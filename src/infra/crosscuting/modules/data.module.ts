import { Module, Provider } from '@nestjs/common';
import { Context } from 'src/infra/data/context';

const DATA_PROVIDER_CONFIG: Provider<any> = {
  provide: Context,
  useFactory: async () => {
    return new Context(process.env.CONNECTIONSTRING_MONGODB);
  }
};

@Module({
  imports: [],
  controllers: [],
  providers: [DATA_PROVIDER_CONFIG],
  exports: [DATA_PROVIDER_CONFIG]
})
export class DataModule {}
