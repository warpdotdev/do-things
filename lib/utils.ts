import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Performs a case-insensitive fuzzy search between two strings
 * @param searchTerm - The search term to look for
 * @param text - The text to search within
 * @returns boolean indicating if the text matches the search criteria
 */
export function fuzzySearch(searchTerm: string, text: string): boolean {
  // If search term is empty, return true (show all)
  if (!searchTerm.trim()) return true

  // Convert to lowercase for case-insensitive search
  const term = searchTerm.toLowerCase()
  const target = text.toLowerCase()

  // Check if the target contains the search term
  return target.includes(term)
}
