import { Contract } from "../../entities/contract.entity";
import { IBaseRepository } from "./ibase.repository";

export interface IContractRepository extends IBaseRepository<Contract> {
    getByTenancyAsync: (tenancyId: string) => Promise<Contract[]>;
}