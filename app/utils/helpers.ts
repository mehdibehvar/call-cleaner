import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  ///twMerge Tailwind class conflict resolver
  ///clsx cleans and joins class names
  return twMerge(clsx(inputs))
}