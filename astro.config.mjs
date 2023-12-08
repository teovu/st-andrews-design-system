import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    vue(),
    tailwind({
      applyBaseStyles: false,
      configFile: fileURLToPath(new URL('./tailwind.config.mjs', import.meta.url)),
    }),
    mdx()
  ],
  site: 'https://st-andrews-design-system-astro.vercel.app/'
});
