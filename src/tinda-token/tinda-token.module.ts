import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TindaTokenService } from './tinda-token.service';
import { TindaTokenController } from './tinda-token.controller';
import { CheckTokenMiddleware } from './middlewares/chekToken.middleware';

@Module({
  providers: [TindaTokenService],
  controllers: [TindaTokenController]
})
  export class TindaTokenModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(CheckTokenMiddleware).forRoutes('auth/tinda-response')
  }
}
