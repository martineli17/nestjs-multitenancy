import { Post, Controller, Res, Req, Inject, Get } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { Request, Response } from "express";
import { TenancyAddDto } from "src/domain/dtos/tenancies/tenancyadd.dto";
import { ITenancyService } from "src/domain/interfaces/services/itenancy.service";
import { TenancyService } from "src/services/tenancy.service";

@Controller("tenancy")
export class TenancyController {
  constructor(
    @Inject(TenancyService) private readonly _tenancyService: ITenancyService
  ) {}

  @Post()
  async add(@Body() request: TenancyAddDto, @Res() response: Response) {
    await this._tenancyService.addAsync(request);
    response.sendStatus(201);
  }

  @Get()
  async get(@Res() response: Response) {
    const tenancies = await this._tenancyService.getAllAsync();
    const hasTenancies = tenancies?.length > 0;

    response
      .status(hasTenancies ? 200 : 204)
      .json({ tenancies });
  }
}
