// Movimiento global: scroll suave (Lenis), revelados al hacer scroll,
// contadores y paralaje de nubes (GSAP + ScrollTrigger).
// Con prefers-reduced-motion no se carga nada de esto: el contenido ya es visible.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const reducido = matchMedia('(prefers-reduced-motion: reduce)');

// Contadores: con movimiento reducido el número ya está escrito en el HTML.
function contadores() {
  document.querySelectorAll<HTMLElement>('[data-contador]').forEach((el) => {
    const fin = Number(el.dataset.contador);
    const desde = Number(el.dataset.desde ?? 0);
    // «8.000» lleva punto de millar; «2010» es un año y no lo lleva.
    const anio = el.dataset.anio !== undefined;
    const pinta = (v: number) => {
      const n = String(Math.round(v));
      el.textContent = anio ? n : n.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    const obj = { v: desde };
    pinta(desde);
    gsap.to(obj, {
      v: fin,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: () => pinta(obj.v),
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}

function revelados() {
  // Grupos escalonados: [data-revelar-grupo] > hijos directos
  document.querySelectorAll<HTMLElement>('[data-revelar-grupo]').forEach((g) => {
    gsap.from(g.children, {
      autoAlpha: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.09,
      scrollTrigger: { trigger: g, start: 'top 86%', once: true },
    });
  });
  document.querySelectorAll<HTMLElement>('[data-revelar]').forEach((el) => {
    gsap.from(el, {
      autoAlpha: 0,
      y: 22,
      duration: 0.85,
      ease: 'power2.out',
      delay: Number(el.dataset.revelar || 0),
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}

function paralaje() {
  document.querySelectorAll<HTMLElement>('[data-paralaje]').forEach((el) => {
    const f = Number(el.dataset.paralaje || 0.15);
    gsap.to(el, {
      yPercent: -100 * f,
      ease: 'none',
      scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

function iniciar() {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, anchors: { offset: -80 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // Menú móvil y ventanas modales paran el scroll suave mientras están abiertos
  window.addEventListener('ht:scroll', (e) => ((e as CustomEvent<boolean>).detail ? lenis.start() : lenis.stop()));

  revelados();
  contadores();
  paralaje();
}

if (!reducido.matches) iniciar();
