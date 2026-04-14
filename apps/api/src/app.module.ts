import { Module } from '@nestjs/common';

import { HealthModule } from './modules/health/health.module.js';
import { RealtimeModule } from './modules/realtime/realtime.module.js';

@Module({
  imports: [HealthModule, RealtimeModule],
})
export class AppModule {}
