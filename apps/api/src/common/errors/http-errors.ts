import { ApiError } from "./base.error.js";

export class BadRequestError extends ApiError {
  statusCode = 400;
  code = 'BAD_REQUEST';
  constructor(message = 'Bad request') {
    super(message);
  }
}

export class UnauthorizedError extends ApiError {
  statusCode = 401;
  code = 'UNAUTHORIZED';
  constructor(message = 'Unauthorized') {
    super(message);
  }
}

export class ForbiddenError extends ApiError {
  statusCode = 403;
  code = 'FORBIDDEN';
  constructor(message = 'Forbidden') {
    super(message);
  }
}

export class NotFoundError extends ApiError {
  statusCode = 404;
  code = 'NOT_FOUND';
  constructor(resource = 'Resource') {
    super(`${resource} not found`);
  }
}

export class ConflictError extends ApiError {
  statusCode = 409;
  code = 'CONFLICT';
  constructor(message = 'Conflict') {
    super(message);
  }
}
