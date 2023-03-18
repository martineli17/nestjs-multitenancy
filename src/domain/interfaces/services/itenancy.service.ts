import { TenancyAddDto } from "src/domain/dtos/tenancies/tenancyadd.dto";
import { Tenancy } from "src/domain/entities/tenancy.entity";

export interface ITenancyService {
    addAsync(dto: TenancyAddDto): Promise<void>;
    getAllAsync(): Promise<Tenancy[]>;
}