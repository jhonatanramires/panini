import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
export default defineConfig({
  vite: {
    resolve: {
      // Required when Vite 8 is hoisted: @tailwindcss/vite spreads this object into
      // createResolver() and Vite 8 rejects resolve options without `tsconfigPaths`.
      tsconfigPaths: true,
    },
    plugins: [tailwindcss()],
  },
  // Add your domain here
   site: 'https://lexingtonthemes.com',
  integrations: [ sitemap()]
});