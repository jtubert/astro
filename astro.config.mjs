// @ts-check
import { defineConfig } from 'astro/config';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [compress()],
  devToolbar: {
    enabled: false
  },
  site: 'https://jtubert.github.io',
  base: 'astro'
});