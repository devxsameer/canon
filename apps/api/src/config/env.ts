import 'dotenv/config.js';

import z from 'zod';

import { type Env, envSchema } from './env.schema.js';

function validateEnv(): Env {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('\nInvalid environment variables:\n');

    console.error(z.prettifyError(parsed.error));

    console.error('\nFix your .env file and restart.\n');
    process.exit(1);
  }

  return parsed.data;
}

export const env = Object.freeze(validateEnv());
