import { Module } from '@nestjs/common';
import { ContractController } from 'src/application/controllers/contract.controller';
import { ContractRepository } from 'src/infra/data/repositories/contract.repository';
import { ContractService } from 'src/services/contract.service';
import { ContractMapper } from '../mappers/contract.mapper';
import { DataModule } from './data.module';
import { UserModule } from './user.module';

@Module({
  imports: [DataModule, UserModule],
  controllers: [ContractController],
  providers: [ContractRepository, ContractService, ContractMapper],
})
export class ContractModule {}
