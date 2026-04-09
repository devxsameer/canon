import { BadRequestError,ConflictError } from './http-errors.js';

type PgErrorLike = { code?: string };

export function translateDbError(err: unknown): never {
  if (!err || typeof err !== 'object' || !('code' in err)) {
    throw err;
  }

  const code = (err as PgErrorLike).code;

  switch (code) {
    case '23505':
      throw new ConflictError('Resource already exists');

    case '23503':
      throw new BadRequestError('Invalid reference to related resource');

    case '23502':
      throw new BadRequestError('Missing required field');

    case '22P02':
      throw new BadRequestError('Invalid input format');

    default:
      throw err;
  }
}
