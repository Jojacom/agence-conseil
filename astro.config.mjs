// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jojacom.online',
  // Les pages sont générées en dossiers (/services/x/index.html) :
  // les adresses officielles se terminent donc par « / ».
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
