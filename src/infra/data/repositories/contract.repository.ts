import { Inject, Injectable, Scope } from "@nestjs/common";
import { Collection } from "mongoose";
import { Contract } from "src/domain/entities/contract.entity";
import { IContractRepository } from "src/domain/interfaces/repositories/icontract.repository";
import { Context, IContext } from "../context";

@Injectable({scope: Scope.REQUEST})
export class ContractRepository implements IContractRepository {
    private readonly _collection: Collection<Contract>;

    constructor(@Inject(Context) _context: IContext) {
        this._collection = _context.getCollection("Contract");
    }
    
    async addAsync(entity: Contract): Promise<void> {
        await this._collection.insertOne(entity);
    }

    async getByTenancyAsync(tenancyId: string): Promise<Contract[]> {
        return await this._collection
        .find({
            tenancyId
        }).toArray();
    }
}