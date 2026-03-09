export abstract class ApiError extends Error {
  abstract readonly statusCode: number;
  abstract readonly code: string;
  readonly isOperational: boolean = true;

  protected constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}
