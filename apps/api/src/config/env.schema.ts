import { z } from 'zod';

const databaseUrl = z
  .url()
  .refine((val) => val.startsWith('postgres://') || val.startsWith('postgresql://'), {
    message: 'DATABASE_URL must be a PostgreSQL connection string',
  });

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

  PORT: z.coerce.number().int().positive().max(65535).default(4000),

  DATABASE_URL: databaseUrl,

  JWT_SECRET: z.string().min(32),

  // future ready
  REDIS_URL: z.url().optional(),

  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
});

export type Env = z.infer<typeof envSchema>;
