import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  ///twMerge Tailwind class conflict resolver
  ///clsx cleans and joins class names
  return twMerge(clsx(inputs));
}

export const pickFormData = <T extends readonly string[]>(
  formData: FormData,
  keys: T,
) =>
  Object.fromEntries(keys.map((k) => [k, formData.get(k)])) as {
    [K in T[number]]: string | number | readonly string[] | undefined;
  };

// const { title, content } = pickFormData(formData, ['title', 'content'])

/**
 * Normalize the request path to avoid double slashes
 */
export const normalizePath = (API_BASE: string, path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;

  const base = API_BASE.replace(/\/+$/, ""); // remove trailing slashes
  const p = path.replace(/^\/+/, ""); // remove leading slashes
  return base ? `${base}/${p}` : `/${p}`;
};

/**
 * Safely parse JSON or return null
 */
export async function parseJsonOrNull(res: Response) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}
