import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import helmet from 'helmet';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/controller/cats.controller';
import { logger } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './exception/httpException';

@Module({
  imports: [CatsModule],
  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), logger).forRoutes(CatsController);
  }
}
