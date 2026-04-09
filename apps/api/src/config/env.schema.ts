import { z } from 'zod';

const databaseUrl = z
  .url()
  .refine((val) => val.startsWith('postgres://') || val.startsWith('postgresql://'), {
    message: 'DATABASE_URL must be a PostgreSQL connection string',
  });

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

  PORT: z.coerce.number().int().positive().max(65535).default(3001),

  DATABASE_URL: databaseUrl,
});
