// Iconos propios de línea fina (24×24, trazo 1.6) que sustituyen a los del original
// («Support», «Artboard-40»…). Siempre decorativos: aria-hidden.
export const iconos = {
  // Videoconferencia: pantalla con persona
  video: '<rect x="2.8" y="4.2" width="18.4" height="12.6" rx="2.4"/><circle cx="12" cy="9.3" r="2.3"/><path d="M8.2 14.6c.8-1.6 2.2-2.4 3.8-2.4s3 .8 3.8 2.4M8.5 20h7M12 16.8V20"/>',
  // Tutorización: dos bocadillos
  conversacion: '<path d="M3.5 6.8A2.8 2.8 0 0 1 6.3 4h7.4a2.8 2.8 0 0 1 2.8 2.8v3.9a2.8 2.8 0 0 1-2.8 2.8H9l-3.2 2.6v-2.6h0a2.3 2.3 0 0 1-2.3-2.3Z"/><path d="M16.5 8.6h1.2a2.8 2.8 0 0 1 2.8 2.8v3.5a2.3 2.3 0 0 1-2.3 2.3v2.4l-3-2.4h-3.6a2.8 2.8 0 0 1-2.4-1.3"/>',
  // Desde 2010: brote que crece
  brote: '<path d="M12 20.5v-8.2"/><path d="M12 12.3c0-3.6-2.6-5.9-6.6-5.9 0 3.8 2.6 5.9 6.6 5.9Z"/><path d="M12 14.6c0-3.3 2.4-5.6 6.4-5.6 0 3.5-2.4 5.6-6.4 5.6Z"/><path d="M7.5 20.5h9"/>',
  // Alumnado: varias personas
  personas: '<circle cx="9" cy="8.4" r="3"/><path d="M3.6 19.2c.7-3.2 2.8-5 5.4-5s4.7 1.8 5.4 5"/><circle cx="16.6" cy="9.4" r="2.4"/><path d="M15.4 14.4c.4-.1.8-.2 1.2-.2 2.1 0 3.8 1.5 4.3 4.1"/>',
  // Mecenazgo: mano que sostiene un corazón
  corazon: '<path d="M12 10.8c-1.2-2.4-5-2-5 .8 0 2.1 2.6 3.7 5 5.4 2.4-1.7 5-3.3 5-5.4 0-2.8-3.8-3.2-5-.8Z"/><path d="M3 15.6l3.1 3.1a3 3 0 0 0 2.1.9h7.6a3 3 0 0 0 2.1-.9l3.1-3.1"/>',
  // Estés donde estés: globo
  globo: '<circle cx="12" cy="12" r="8.6"/><path d="M3.6 12h16.8M12 3.4c2.3 2.4 3.5 5.3 3.5 8.6s-1.2 6.2-3.5 8.6c-2.3-2.4-3.5-5.3-3.5-8.6S9.7 5.8 12 3.4Z"/>',
  // Observar la mente
  mente: '<path d="M8.6 19.8v-2.6c-2.7-1.2-4.4-3.7-4.4-6.6a7.3 7.3 0 0 1 14.6 0c0 .9-.2 1.8-.5 2.6l1.3 2.3-1.8.6v1.4a1.8 1.8 0 0 1-1.8 1.8h-1.5v.5"/><path d="M9.6 10.6c.9-1.3 2.1-1.9 3.4-1.9M10.2 13c1.1.6 2.3.6 3.5 0"/>',
  // Materiales para practicar
  libro: '<path d="M12 6.4c-1.9-1.4-4.6-1.9-8-1.6v13.4c3.4-.3 6.1.2 8 1.6 1.9-1.4 4.6-1.9 8-1.6V4.8c-3.4-.3-6.1.2-8 1.6Z"/><path d="M12 6.4v13.4"/>',
  // Acompañamiento personal
  acompana: '<circle cx="8" cy="6.8" r="2.4"/><circle cx="16" cy="6.8" r="2.4"/><path d="M4 19.5l1-5.2a3 3 0 0 1 3-2.4h0a3 3 0 0 1 2.9 2.2M20 19.5l-1-5.2a3 3 0 0 0-3-2.4h0a3 3 0 0 0-2.9 2.2"/><path d="M10.9 14.1h2.2"/>',
  flechaIzq: '<path d="M14.5 6.5 9 12l5.5 5.5"/>',
  flechaDer: '<path d="M9.5 6.5 15 12l-5.5 5.5"/>',
  flechaDiag: '<path d="M8 16 16 8M9.5 8H16v6.5"/>',
  sobre: '<rect x="3" y="5.5" width="18" height="13" rx="2.4"/><path d="m4 7 8 6 8-6"/>',
  cita: '<path d="M10 7.5c-3 .6-5 2.8-5 6v3.2h4.5v-4.4H7.2M19 7.5c-3 .6-5 2.8-5 6v3.2h4.5v-4.4h-2.3"/>',
} as const;

export type NombreIcono = keyof typeof iconos;
