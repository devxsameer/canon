import { z } from 'zod';

export const AuditEventSchema = z.object({
  actorType: z.enum(['USER', 'SYSTEM']),
  actorId: z.string().nullable(),
  action: z.string(),
  resourceType: z.string(),
  resourceId: z.string(),
  metadata: z.unknown().nullable(),
  createdAt: z.string().datetime(),
});
