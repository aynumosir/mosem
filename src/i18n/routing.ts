// https://next-intl.dev/docs/routing/setup
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ja"],
  defaultLocale: "ja",
  // locales: ["en", "ja", "ain-Latn", "ain-Kana"],
  // defaultLocale: "en",
});
