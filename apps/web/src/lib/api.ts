const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    issues?: Record<string, string[]>;
  };
}

export class AppError extends Error {
  public code: string;
  public issues?: Record<string, string[]>;

  constructor(error: ApiError['error']) {
    super(error.message);
    this.code = error.code;
    this.issues = error.issues;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorData: ApiError;
    try {
      errorData = await response.json();
    } catch {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    if (errorData?.error) {
      throw new AppError(errorData.error);
    }

    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data as T;
}

export const api = {
  get: async <T>(url: string, headers: HeadersInit = {}): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    return handleResponse<T>(response);
  },

  post: async <T>(url: string, body: unknown, headers: HeadersInit = {}): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  },

  put: async <T>(url: string, body: unknown, headers: HeadersInit = {}): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  },

  delete: async <T>(url: string, headers: HeadersInit = {}): Promise<T> => {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    return handleResponse<T>(response);
  },
};
