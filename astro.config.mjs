import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["en", "ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind()],
});
