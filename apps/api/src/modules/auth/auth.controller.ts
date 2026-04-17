import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { loginSchema, registerSchema } from '@repo/schemas/auth';

import { ZodValidationPipe } from '../../common/pipes/zod.pipe.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  @UsePipes(new ZodValidationPipe(registerSchema))
  register(@Body() body) {
    return this.auth.register(body);
  }

  @Post('login')
  @UsePipes(new ZodValidationPipe(loginSchema))
  login(@Body() body) {
    return this.auth.login(body.email, body.password);
  }
}
