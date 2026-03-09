import z from 'zod';
import { envSchema } from './env.schema.js';

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables\n');

  const formatted = z.treeifyError(parsed.error);

  for (const key of Object.keys(formatted.properties)) {
    if (key === '_errors') continue;
    const errors = formatted[key as keyof typeof formatted]?.errors;
    if (errors?.length) {
      console.error(`- ${key}: ${errors.join(', ')}`);
    }
  }

  process.exit(1);
}

export const env = Object.freeze(parsed.data);
