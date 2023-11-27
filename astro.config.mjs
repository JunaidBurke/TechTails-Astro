import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://junaidburke.com',
  integrations: [tailwind(), sitemap(), react()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});