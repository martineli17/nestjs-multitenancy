import { Injectable, Scope } from '@nestjs/common';
import mongoose, { Collection, Connection, Mongoose } from 'mongoose';

export interface IContext {
    getCollection<TType>(name: string): Collection<TType>;
}

@Injectable({scope: Scope.REQUEST})
export class Context implements IContext {
    private _connection: Connection = null;

    constructor(connection: string){
        this._connection = mongoose.createConnection(connection)
    }

    getCollection<TType>(name: string): Collection<TType> {
        return this._connection.collection<TType>(name);
    }
}