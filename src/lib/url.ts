// Construye rutas internas respetando el `base` de GitHub Pages.
// url('mecenazgo/') -> /habitar-el-tiempo-rediseno/mecenazgo/
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const url = (ruta = ''): string => base + ruta.replace(/^\//, '');
