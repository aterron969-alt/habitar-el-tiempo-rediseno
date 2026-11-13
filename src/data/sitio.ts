// Datos generales de la escuela, menú y enlaces externos.
// Las rutas internas empiezan sin "/" y pasan por url() en los componentes.

export const ESCUELA = 'Escuela de Mindfulness Habitar el Tiempo';
export const ORIGINAL = 'https://habitareltiempo.com';

export const externos = {
  publicaciones: `${ORIGINAL}/publicaciones-mindfulness/`,
  // El original enlaza a /encuentros-mindfulness/, que da 404; la página actual es esta.
  encuentros: `${ORIGINAL}/encuentros-conscientes/`,
  esclerosis: `${ORIGINAL}/mindfulness-y-esclerosis-multiple/`,
  avisoLegal: `${ORIGINAL}/aviso-legal/`,
  privacidad: `${ORIGINAL}/politica-de-privacidad/`,
  cookies: `${ORIGINAL}/uso-de-cookies/`,
  acuerdoServicio: `${ORIGINAL}/acuerdo-de-servicio/`,
};

export interface ItemMenu {
  texto: string;
  /** Ruta interna (sin "/" inicial) o URL completa si es externa. */
  href: string;
  externo?: boolean;
}

/** Menú único para toda la web. */
export const menu: ItemMenu[] = [
  { texto: 'Sesiones individuales', href: '#sesiones' },
  { texto: 'Acerca de', href: '#acerca' },
  { texto: 'Experiencias', href: 'experiencias/' },
  { texto: 'Publicaciones', href: externos.publicaciones, externo: true },
  { texto: 'Mecenazgo', href: 'mecenazgo/' },
  { texto: 'Pregunta aquí', href: 'consultame/' },
];

export const legales: ItemMenu[] = [
  { texto: 'Aviso legal', href: externos.avisoLegal, externo: true },
  { texto: 'Privacidad', href: externos.privacidad, externo: true },
  { texto: 'Cookies', href: externos.cookies, externo: true },
];

/** Los 12 beneficios del titular rotativo de la portada. */
export const beneficios = [
  'MÁS CALMA',
  'PLENITUD',
  'MENOR ESTRÉS',
  'MÁS CONSCIENCIA',
  'MAYOR BIENESTAR',
  'SENTIDO VITAL',
  'MENOR ANSIEDAD',
  'MÁS GRATITUD',
  'PRESENCIA',
  'MÁS AMABILIDAD',
  'MÁS CONFIANZA',
  'ATENCIÓN PLENA',
];
