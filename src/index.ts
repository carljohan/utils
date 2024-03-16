import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export async function wait(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
