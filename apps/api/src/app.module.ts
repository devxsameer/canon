import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module.js';
import { HealthModule } from './modules/health/health.module.js';
import { PrismaModule } from './modules/prisma/prisma.module.js';
import { RealtimeModule } from './modules/realtime/realtime.module.js';
import { UsersModule } from './modules/users/users.module.js';

@Module({
  imports: [HealthModule, AuthModule, UsersModule, PrismaModule, RealtimeModule],
})
export class AppModule {}
