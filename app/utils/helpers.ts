import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  ///twMerge Tailwind class conflict resolver
  ///clsx cleans and joins class names
  return twMerge(clsx(inputs));
}

export const pickFormData = <T extends readonly string[]>(
  formData: FormData,
  keys: T
) =>
  Object.fromEntries(keys.map((k) => [k, formData.get(k)])) as {
    [K in T[number]]: string | null;
  };

// const { title, content } = pickFormData(formData, ['title', 'content'])
