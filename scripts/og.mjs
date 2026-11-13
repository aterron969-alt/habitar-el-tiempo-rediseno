// Genera public/og.jpg (1200×630) a partir del hero de la portada.
// Uso: node scripts/og.mjs http://localhost:4321/habitar-el-tiempo-rediseno/
import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: 'reduce' });
await p.goto(process.argv[2], { waitUntil: 'networkidle' });
await p.addStyleTag({ content: '.cabecera{display:none!important}main>:first-child{margin-top:0!important}.hero{min-height:0!important;height:630px!important;overflow:hidden!important;padding:40px 0 0!important}.hero .container{zoom:.58}.ola{display:none!important}.pausa,.respira-guia{display:none!important}' });
await p.waitForTimeout(800);
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 86 });
await b.close();
