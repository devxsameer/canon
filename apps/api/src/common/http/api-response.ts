export type ApiSuccess<T> = {
  success: true;
  data: T;
  meta?: Record<string, unknown>;
};

export type ApiErrorResponse = {
  success: false;
  error: {
    code: string;
    message: string;
    issues?: unknown;
  };
  path: string;
  timestamp: string;
};
