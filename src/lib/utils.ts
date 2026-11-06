import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Remove o prefixo "(A) " do texto da alternativa — a letra já é exibida no marcador ao lado. */
export function stripOptionLetter(option: string) {
  return option.replace(/^\s*\([A-E]\)\s*/, '');
}
