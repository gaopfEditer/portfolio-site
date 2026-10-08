export type Locale = "en" | "zh";

export const LOCALE_STORAGE_KEY = "portfolio-locale";

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh";
}
