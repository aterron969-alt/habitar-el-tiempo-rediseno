// @ts-check
import { defineConfig } from 'astro/config';

// Publicado en GitHub Pages como página de proyecto:
// https://aterron969-alt.github.io/habitar-el-tiempo-rediseno/
// Todas las rutas internas se construyen con src/lib/url.ts (usa import.meta.env.BASE_URL).
export default defineConfig({
  site: 'https://aterron969-alt.github.io',
  base: '/habitar-el-tiempo-rediseno',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
});
