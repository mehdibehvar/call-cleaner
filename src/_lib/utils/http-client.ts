import { getApiBaseUrl } from "./env";
import { getCookie, normalizePath, parseJsonOrNull } from "./helpers";
import onError, { ApiError } from "./onError";

export const API_BASE = getApiBaseUrl();

/**
 * Generic type for safe API responses
 */
export type ApiResult<T> =
  | { ok: true; data: T }
  | {
      ok: false;
      error: string;
      errors?: Record<string, string>;
      status?: number;
    };

/**
 * Centralized fetch wrapper
 */
export async function apiFetch<T = any>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const url = normalizePath(API_BASE, path);
  ///if the request is in the client not in the server
  const token =
    typeof window !== "undefined" ? getCookie("call-cleaner-jwt") : null;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((init.headers as Record<string, string>) || {}),
  };
  if (token) headers["x-auth-token"] = token;

  const res = await fetch(url, {
    ...init,
    headers,
    credentials: "include" as RequestCredentials,
  });
  const data = await parseJsonOrNull(res);

  if (!res.ok) {
    const err = { response: { status: res.status, data } } as any;
    const normalized = onError(err);
    throw new ApiError(normalized);
  }

  return data as T;
}

/**
 * Wrapper around apiFetch that always returns a safe { ok, data?, error? } shape
 */
export async function safeApiFetch<T = any>(
  path: string,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  try {
    const data = await apiFetch<T>(path, init);
    return { ok: true, data };
  } catch (err: any) {
    const normalized = err instanceof ApiError ? err : onError(err);
    return {
      ok: false,
      error: normalized.message,
      errors: normalized.errors,
      status: normalized.status,
    };
  }
}

/**
 * Convenience methods
 */
export function get<T = any>(path: string) {
  return safeApiFetch<T>(path, { method: "GET" });
}

export function post<T = any>(path: string, body?: any) {
  return safeApiFetch<T>(path, { method: "POST", body: JSON.stringify(body) });
}

export function put<T = any>(path: string, body?: any) {
  return safeApiFetch<T>(path, { method: "PUT", body: JSON.stringify(body)});
}

export function del<T = any>(path: string) {
  return safeApiFetch<T>(path, { method: "DELETE" });
}

export default apiFetch;
