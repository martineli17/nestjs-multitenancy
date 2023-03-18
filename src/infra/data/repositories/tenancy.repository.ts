import { Inject, Injectable, Scope } from "@nestjs/common";
import { Collection } from "mongoose";
import { Tenancy } from "src/domain/entities/tenancy.entity";
import { ITenancyRepository } from "src/domain/interfaces/repositories/itenancy.repository";
import { Context, IContext } from "../context";

@Injectable({scope: Scope.REQUEST})
export class TenancyRepository implements ITenancyRepository {
    private readonly _collection: Collection<Tenancy>;

    constructor(@Inject(Context) _context: IContext) {
        this._collection = _context.getCollection("Tenancy");
    }

    async addAsync(entity: Tenancy): Promise<void> {
        await this._collection.insertOne(entity);
    }

    async getAllAsync(): Promise<Tenancy[]> {
        return await this._collection.find().toArray();
    }
}