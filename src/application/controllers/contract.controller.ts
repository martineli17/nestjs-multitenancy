import { Post, Controller, Res, Inject, Get, Body } from "@nestjs/common";
import { Response } from "express";
import { ContractAddDto } from "src/domain/dtos/contracts/contractadd.dto";
import { IContractService } from "src/domain/interfaces/services/icontract.service";
import { ContractService } from "src/services/contract.service";

@Controller("contract")
export class ContractController {
  constructor(
    @Inject(ContractService) private readonly _contractService: IContractService
  ) {}

  @Post()
  async add(@Body() request: ContractAddDto, @Res() response: Response) {
    await this._contractService.addAsync(request);
    response.sendStatus(201);
  }

  @Get()
  async get(@Res() response: Response) {
    const contracts = await this._contractService.getAllAsync();
    const hasContracts = contracts?.length > 0;

    response.status(hasContracts ? 200 : 204).json({ contracts });
  }
}
