import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',

  build: {
    format: 'file'
  },

  server: {
    port: 4321,
    host: true
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({
    imageService: 'cloudflare'
  })
});