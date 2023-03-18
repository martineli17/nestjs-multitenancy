import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { IUserService } from 'src/domain/interfaces/services/iuser.service';
import { UserService } from 'src/services/user.service';

@Injectable()
export class RequestMiddleware implements NestMiddleware {
    constructor
    (
        @Inject(UserService) private readonly _userService: IUserService,
    ){}

  use(req: Request, res: Response, next: NextFunction) {
    this._userService.setTenancyId(req.headers["tenancy-id"] as string);
    next();
  }
}
