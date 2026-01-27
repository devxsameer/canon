import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express'; // Ensure these are from express
import { ZodError } from 'zod';

import { ApiError } from '../errors/api-error.js';
import { translateDbError } from '../errors/db-error.js';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('GlobalException');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const errorResponse = {
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong',
        issues: undefined as unknown,
      },
    };

    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    // 1️⃣ Handle Zod Validation
    if (exception instanceof ZodError) {
      status = HttpStatus.BAD_REQUEST;
      errorResponse.error = {
        code: 'VALIDATION_ERROR',
        message: 'Invalid request data',
        issues: exception.issues.map((e) => ({
          path: e.path.join('.'),
          message: e.message,
        })),
      };
    }
    // 2️⃣ Handle Custom ApiErrors or Translated DB Errors
    else if (exception instanceof ApiError) {
      status = exception.statusCode;
      errorResponse.error = {
        code: exception.code,
        message: exception.message,
        issues: undefined,
      };
    }
    // 3️⃣ Handle standard NestJS HttpExceptions
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const nestRes = exception.getResponse();
      errorResponse.error = {
        code: 'HTTP_EXCEPTION',
        message:
          typeof nestRes === 'string'
            ? nestRes
            : (nestRes as unknown as { message: string }).message || exception.message,
        issues: undefined,
      };
    }
    // 4️⃣ Fallback: Try translating DB errors if not already caught
    else {
      try {
        translateDbError(exception);
      } catch (translated) {
        if (translated instanceof ApiError) {
          // Recursive call or manual assignment to handle the translated error
          return this.catch(translated, host);
        }
      }

      // Log the actual unhandled error with stack trace
      this.logger.error(
        `${request.method} ${request.url}`,
        exception instanceof Error ? exception.stack : exception,
      );
    }

    response.status(status).json(errorResponse);
  }
}
