import { Injectable, Scope } from "@nestjs/common";
import { IUserService } from "src/domain/interfaces/services/iuser.service";

@Injectable({scope: Scope.REQUEST})
export class UserService implements IUserService {
    private _tenancyId: string;

    setTenancyId(id: string): void {
        this._tenancyId = id;
    }

    getTenancyId(): string {
        return this._tenancyId;
    }
}