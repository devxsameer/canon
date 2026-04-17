import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
  constructor(
    private users: UsersService,
    private jwt: JwtService,
  ) {}

  async register(data: { email: string; password: string; name?: string }) {
    const existing = await this.users.findByEmail(data.email);

    if (existing) throw new Error('User Already Exits');

    const hashed = await argon2.hash(data.password);

    const user = await this.users.create({
      ...data,
      password: hashed,
    });

    return this.signToken(user.id);
  }

  async login(email: string, password: string) {
    const user = await this.users.findByEmail(email);

    if (!user) throw new UnauthorizedException();

    const valid = await argon2.verify(user.password!, password);

    if (!valid) throw new UnauthorizedException();

    return this.signToken(user.id);
  }

  private signToken(userId: string) {
    return {
      access_token: this.jwt.sign({ sub: userId }),
    };
  }
}
