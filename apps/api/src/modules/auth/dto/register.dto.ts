import { registerSchema } from '@repo/schemas/auth';
import z from 'zod';

export type RegisterDto = z.infer<typeof registerSchema>;
