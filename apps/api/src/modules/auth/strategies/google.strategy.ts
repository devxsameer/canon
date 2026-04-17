// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy } from 'passport-google-oidc';

// import { authConfig } from '../../../config/auth.config.js';

// @Injectable()
// export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
//   constructor() {
//     super({
//       clientID: authConfig.googleClientId,
//       clientSecret: authConfig.googleClientSecret,
//       callbackURL: '/auth/google/callback',
//       scope: ['email', 'profile'],
//     });
//   }

//   async validate(accessToken, refreshToken, profile: profile) {
//     return {
//       provider: 'google',
//       providerId: profile.id,
//     };
//   }
// }
