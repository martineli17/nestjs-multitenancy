import {v4} from 'uuid';

export class Contract {
    public tenancyId: string;
    public readonly id: string;
    public readonly createdAt: Date;
    public readonly value: Number;

    constructor(tenancyId: string,
        value: Number)
    {
        this.id = v4();
        this.createdAt = new Date(); 
        this.tenancyId = tenancyId;
        this.value = value;
    }

    setTenancyId(tenancyId: string): void {
        this.tenancyId = tenancyId;
    }
}