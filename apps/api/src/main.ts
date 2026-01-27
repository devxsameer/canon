import './config/env';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
