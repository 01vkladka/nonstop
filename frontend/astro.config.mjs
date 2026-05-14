// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  base: '/',
  integrations: [vue()],
  vite: {
    ssr: {
      external: ['vue']
    },
    resolve: {
      alias: {
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@layouts': new URL('./src/layouts', import.meta.url).pathname,
        '@styles': new URL('./src/styles', import.meta.url).pathname,
        '@assets': new URL('./src/assets', import.meta.url).pathname
      }
    }
  }
});