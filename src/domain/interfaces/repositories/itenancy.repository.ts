import { Tenancy } from "../../entities/tenancy.entity";
import { IBaseRepository } from "./ibase.repository";

export interface ITenancyRepository extends IBaseRepository<Tenancy> {
    getAllAsync(): Promise<Tenancy[]>;
}