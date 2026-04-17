import { loginSchema } from '@repo/schemas/auth';
import z from 'zod';

export type LoginDto = z.infer<typeof loginSchema>;
