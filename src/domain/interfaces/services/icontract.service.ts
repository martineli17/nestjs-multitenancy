import { ContractAddDto } from "src/domain/dtos/contracts/contractadd.dto";
import { Contract } from "src/domain/entities/contract.entity";

export interface IContractService {
    addAsync(dto: ContractAddDto): Promise<void>;
    getAllAsync(): Promise<Contract[]>;
}