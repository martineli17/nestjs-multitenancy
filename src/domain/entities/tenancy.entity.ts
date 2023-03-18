import {v4} from 'uuid';

export class Tenancy {
    public readonly id: string;
    public readonly name: string;

    constructor(name: string){
        this.id = v4();
        this.name = name;
    }
}