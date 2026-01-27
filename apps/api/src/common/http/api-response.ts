export type ApiSuccess<T = unknown> = {
  success: true;
  data: T;
  meta?: Record<string, unknown>;
};

export type ApiErrorResponse = {
  success: false;
  error: {
    code: string;
    message: string;
    issues?: Array<{
      path: string;
      message: string;
    }>;
  };
};
