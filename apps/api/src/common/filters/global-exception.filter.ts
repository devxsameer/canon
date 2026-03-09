// src/common/filters/global-exception.filter.ts
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ZodError } from 'zod';

import { ApiError } from '../errors/base.error.js';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const timestamp = new Date().toISOString();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    let errorBody: {
      code: string;
      message: string;
      issues?: unknown;
    };

    // 1️⃣ Zod validation
    if (exception instanceof ZodError) {
      status = 400;
      errorBody = {
        code: 'VALIDATION_ERROR',
        message: 'Invalid request data',
        issues: exception.issues.map((e) => ({
          path: e.path.join('.'),
          message: e.message,
        })),
      };
    }

    // 2️⃣ Domain / operational errors
    else if (exception instanceof ApiError) {
      status = exception.statusCode;
      errorBody = {
        code: exception.code,
        message: exception.message,
      };
    }

    // 3️⃣ Nest HttpExceptions
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      errorBody = {
        code: 'HTTP_EXCEPTION',
        message: exception.message,
      };
    }

    // 4️⃣ Programmer / unknown errors
    else {
      this.logger.error(
        `${req.method} ${req.url}`,
        exception instanceof Error ? exception.stack : String(exception),
      );

      errorBody = {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong',
      };
    }

    res.status(status).json({
      success: false,
      error: errorBody,
      path: req.url,
      timestamp,
    });
  }
}
