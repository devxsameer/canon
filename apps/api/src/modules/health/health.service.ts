import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  check() {
    return {
      status: 'ok',
      service: 'canon-api',
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
    };
  }
}
