// Capturas de revisión con Playwright.
// Uso: node scripts/capturas.mjs <url-base> <carpeta-salida> [rutas separadas por coma] [anchos] [completa=1]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const [base, out, rutas = '', anchos = '390,1440', completa = '1'] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const b = await chromium.launch();
const errores = [];
for (const ruta of (rutas || '').split(',')) {
  for (const w of anchos.split(',').map(Number)) {
    const p = await b.newPage({ viewport: { width: w, height: w < 800 ? 844 : 900 } });
    p.on('console', (m) => m.type() === 'error' && errores.push(`${ruta}@${w}: ${m.text()}`));
    p.on('pageerror', (e) => errores.push(`${ruta}@${w}: ${e.message}`));
    await p.goto(base + ruta, { waitUntil: 'networkidle' });
    await p.waitForTimeout(3200);
    if (completa === '1') {
      // Recorre la página para disparar revelados y lazy-load
      const alto = await p.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < alto; y += 500) { await p.mouse.wheel(0, 500); await p.waitForTimeout(120); }
      await p.waitForTimeout(1500);
      await p.evaluate(() => window.scrollTo(0, 0));
      await p.waitForTimeout(600);
    }
    const nombre = `${(ruta || 'inicio').replace(/\W+/g, '_')}-${w}.png`;
    const sobre = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (sobre > 0) errores.push(`${ruta}@${w}: scroll horizontal de ${sobre}px`);
    await p.screenshot({ path: `${out}/${nombre}`, fullPage: completa === '1' });
    await p.close();
  }
}
await b.close();
console.log(errores.length ? errores.join('\n') : 'Sin errores de consola ni scroll horizontal');
