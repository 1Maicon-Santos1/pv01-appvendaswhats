type ClassValue = string | number | false | null | undefined;

/** Concatena classes ignorando valores falsos. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
