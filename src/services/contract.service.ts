import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { Inject, Injectable, Scope } from "@nestjs/common";
import { ContractAddDto } from "src/domain/dtos/contracts/contractadd.dto";
import { Contract } from "src/domain/entities/contract.entity";
import { IContractRepository } from "src/domain/interfaces/repositories/icontract.repository";
import { IContractService } from "src/domain/interfaces/services/icontract.service";
import { IUserService } from "src/domain/interfaces/services/iuser.service";
import { ContractRepository } from "src/infra/data/repositories/contract.repository";
import { UserService } from "./user.service";

@Injectable({ scope: Scope.REQUEST })
export class ContractService implements IContractService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    @Inject(ContractRepository) private readonly _contractRepository: IContractRepository,
    @Inject(UserService) private readonly _userService: IUserService,
  ) {}

  async addAsync(dto: ContractAddDto): Promise<void> {
    const tenancyId = this._userService.getTenancyId();
    const entity: Contract = await this._mapper.mapAsync(dto, ContractAddDto, Contract);
    entity.setTenancyId(tenancyId);

    await this._contractRepository.addAsync(entity);
  }
  
  async getAllAsync(): Promise<Contract[]> {
    const tenancyId = this._userService.getTenancyId();
    return await this._contractRepository.getByTenancyAsync(tenancyId);
  }
}
