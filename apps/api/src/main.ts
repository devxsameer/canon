import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';

import { AppModule } from './app.module.js';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter.js';
import { env } from './config/env.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useWebSocketAdapter(new WsAdapter(app));

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableShutdownHooks();

  await app.listen(env.PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
