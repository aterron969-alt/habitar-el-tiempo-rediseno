// Acceso a las imágenes de src/assets/orig por nombre de archivo,
// para que los datos (testimonios, logos) solo guarden el nombre.
import type { ImageMetadata } from 'astro';

const todas = import.meta.glob<{ default: ImageMetadata }>('../assets/orig/*.{webp,png,jpg,jpeg}', { eager: true });

export function imagen(archivo: string): ImageMetadata {
  const m = todas[`../assets/orig/${archivo}`];
  if (!m) throw new Error(`No existe la imagen src/assets/orig/${archivo}`);
  return m.default;
}
