import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { TenancyModule } from './tenancy.module';
import { ContractModule } from './contract.module';
import { UserModule } from './user.module';
import { RequestMiddleware } from 'src/application/middlewares/request.middleware';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    ConfigModule.forRoot(),
    TenancyModule,
    ContractModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}