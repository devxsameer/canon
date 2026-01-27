import { z } from 'zod';

export const RoleSchema = z.enum(['OWNER', 'EDITOR', 'COMMENTER', 'VIEWER']);

export const PermissionGrantSchema = z.object({
  principalType: z.enum(['USER', 'LINK']),
  principalId: z.string(),
  resourceType: z.string(),
  resourceId: z.string(),
  role: RoleSchema,
  grantedAt: z.iso.datetime(),
  revokedAt: z.iso.datetime().nullable(),
});
