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

export function getCookie(name: string) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";"); // Split cookies into an array
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      // Trim leading spaces
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      // If the cookie name matches
      return c.substring(nameEQ.length, c.length); // Return the cookie value
    }
  }
  return null; // Return null if not found
}

// Helper to get error message for a specific field
export const getFieldError = (fieldName: string, state: any) => {
  return !state.ok ? state.errors?.[fieldName] : undefined;
};

// Helper to get value, prioritizing errors if available for repopulation
export const getInputValue = (fieldName: string,state:any) => {
  // If there are errors, use the value from errors (assuming errors object contains submitted values on failure)
  // NOTE: This depends HEAVILY on how `signUpUser` returns its data.
  // A more robust approach is if `signUpUser` returns { ok: boolean, defaultValue: Record<string, any>, errors: Record<string, string> } }
  // For now, we assume state.data holds the previous input if  it returned defaultValue on failure
  return state?.defaultValues?.[fieldName];
};
