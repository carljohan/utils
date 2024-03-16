import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export async function wait(milliseconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
