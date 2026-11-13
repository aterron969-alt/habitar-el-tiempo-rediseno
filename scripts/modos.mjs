import { chromium } from 'playwright';
// Comprueba que el contenido se ve sin JavaScript y con movimiento reducido.
// Uso: con 'npx astro preview --port 4322' en marcha, node scripts/modos.mjs
const base = 'http://localhost:4322/habitar-el-tiempo-rediseno/';
const b = await chromium.launch();
for (const [nombre, opts] of [['sin-js', { javaScriptEnabled: false }], ['reducido', { reducedMotion: 'reduce' }]]) {
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, ...opts });
  for (const ruta of ['', 'experiencias/', 'mecenazgo/', 'consultame/']) {
    const p = await ctx.newPage();
    const err = [];
    p.on('pageerror', (e) => err.push(e.message));
    p.on('console', (m) => m.type() === 'error' && err.push(m.text()));
    await p.goto(base + ruta, { waitUntil: 'networkidle' });
    await p.waitForTimeout(500);
    const r = await p.evaluate(() => {
      const ocultos = [...document.querySelectorAll('main h1, main h2, main h3, main p, main li, main img')]
        .filter((e) => { const s = getComputedStyle(e); return s.opacity === '0' || s.visibility === 'hidden'; })
        .filter((e) => !e.closest('[aria-hidden="true"], .rotador, .respira-guia, [hidden], .sr-only'));
      const cinta = document.querySelector('.cinta-pista');
      return { ocultos: ocultos.length, ej: ocultos.slice(0, 3).map((e) => e.outerHTML.slice(0, 80)), cinta: cinta ? getComputedStyle(cinta).display : '-', lenis: document.documentElement.classList.contains('lenis') };
    });
    console.log(nombre, ruta || 'inicio', JSON.stringify(r), err.length ? 'ERRORES: ' + err.join(' | ') : '');
    await p.close();
  }
  await ctx.close();
}
await b.close();
