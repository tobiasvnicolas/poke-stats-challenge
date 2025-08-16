// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Explícitamente estático
  build: {
    assets: '_astro'
  }
});
