import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Inject, Injectable, Scope } from "@nestjs/common";
import { TenancyAddDto } from "src/domain/dtos/tenancies/tenancyadd.dto";
import { Tenancy } from "src/domain/entities/tenancy.entity";
import { ITenancyRepository } from "src/domain/interfaces/repositories/itenancy.repository";
import { ITenancyService } from "src/domain/interfaces/services/itenancy.service";
import { TenancyRepository } from "src/infra/data/repositories/tenancy.repository";

@Injectable({ scope: Scope.REQUEST })
export class TenancyService implements ITenancyService {
  constructor(
    @Inject(TenancyRepository)
    private readonly _tenancyRepository: ITenancyRepository,
    @InjectMapper() private readonly _mapper: Mapper
  ) {}

  async addAsync(dto: TenancyAddDto): Promise<void> {
    const tenancy: Tenancy = await this._mapper.mapAsync(dto, TenancyAddDto, Tenancy);
    await this._tenancyRepository.addAsync(tenancy);
  }

  async getAllAsync(): Promise<Tenancy[]> {
    return await this._tenancyRepository.getAllAsync();
  }
}
