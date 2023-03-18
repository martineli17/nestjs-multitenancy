import { Module } from '@nestjs/common';
import { TenancyController } from 'src/application/controllers/tenancy.controller';
import { TenancyRepository } from 'src/infra/data/repositories/tenancy.repository';
import { TenancyService } from 'src/services/tenancy.service';
import { TenancyMapper } from '../mappers/tenancy.mapper';
import { DataModule } from './data.module';

@Module({
  imports: [DataModule],
  controllers: [TenancyController],
  providers: [TenancyRepository, TenancyService, TenancyMapper],
})
export class TenancyModule {}
