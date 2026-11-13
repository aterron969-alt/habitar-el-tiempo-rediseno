// Textos de la portada, copiados de habitareltiempo.com con las erratas corregidas.
// Para cambiar un texto basta con editarlo aquí: los componentes lo leen de este archivo.
import type { NombreIcono } from '../components/iconos';

export const sesiones = {
  antetitulo: 'Sesiones en directo',
  titulo: 'Mindfulness online',
  puntos: [
    { icono: 'video', texto: 'sesiones por videoconferencia' },
    { icono: 'conversacion', texto: 'tutorización continua' },
    { icono: 'brote', texto: 'formando desde el', cifra: 2010, desde: 1990, anio: true },
    { icono: 'personas', texto: 'alumnos', prefijo: 'más de', cifra: 8000, desde: 0, sufijo: '' },
  ] as { icono: NombreIcono; texto: string; prefijo?: string; cifra?: number; desde?: number; anio?: boolean; sufijo?: string }[],
  mecenazgo: 'ayudas posibles gracias al mecenazgo',
  cierre: '¡Estés donde estés!',
};

export const comoEs = {
  antetitulo: '¡Deja de posponerte!',
  tarjeta: { titulo: 'Sesiones en directo', sub: 'Para ti, por videoconferencia' },
  titulo: '¿Cómo es?',
  puntos: [
    {
      icono: 'mente',
      texto:
        'A través de las sesiones en directo y realizando las prácticas propuestas, aprenderás progresivamente a observar cómo funciona tu mente y cómo puedes regular sus automatismos en la gestión del estrés, la ansiedad y las emociones. Conseguirás un “clima” interno más calmado, estable y amable contigo y con las personas con las que convives.',
    },
    {
      icono: 'libro',
      texto:
        'Tras cada sesión tendrás acceso a los materiales para que los practiques, no para que los acumules (evita el Diógenes informativo), pues es la única forma de progresar y mejorar.',
    },
    {
      icono: 'acompana',
      texto:
        'Toda la atención y disponibilidad absoluta durante cada sesión y entre sesiones. Tras muchos años, hemos comprobado que el éxito está en este acompañamiento personalizado que las hace únicas para TI.',
    },
  ] as { icono: NombreIcono; texto: string }[],
  mecenazgo: 'Ayuda a que estas sesiones sigan siendo accesibles a todo el mundo sin que la distancia o la economía sean un obstáculo.',
  aportacion: 'Aportación según tus posibilidades',
};

export const citaPatricia = {
  nombre: 'Patricia Villa',
  texto:
    'Un aprendizaje a medida de tus circunstancias y necesidades para que puedas aplicar mindfulness a tu vida. Trazarás junto a tu profesional el rumbo y las fases para llegar al destino, quien te acompañará durante todo el viaje con su mochila llena de recursos para ayudarte en todo momento y que no te pierdas. Total claridad en cada paso del qué, el cómo, el cuándo y el porqué. ¡Déjate guiar!',
};

/**
 * Bloques de «Acerca de». El texto admite un enlace con la forma [texto](url):
 * se usa en «Situación actual» para enlazar la página de esclerosis múltiple.
 */
export const acerca = {
  antetitulo: 'Acerca de:',
  titulo: 'Habitar el Tiempo',
  nombre: 'Rafael de Silva',
  bloques: [
    {
      id: 'mision',
      titulo: 'Misión',
      parrafos: [
        'Tras varios años impartiendo clases, en 2012 fundé la Escuela de Mindfulness HABITAR EL TIEMPO con la misión de difundir y formar en Mindfulness en distintos entornos: sociales, laborales, educativos y particulares',
      ],
    },
    {
      id: 'formacion',
      titulo: 'Formación',
      parrafos: [
        'Licenciado en 1995 en Ciencias de la Actividad Física y Deportiva en el INEF de Madrid, me formé posteriormente como instructor de meditación, donde tomé contacto y aprendí los conocimientos y prácticas sobre Mindfulness. Y más de una década de mucha meditación, lectura y estudio continuo.',
      ],
    },
    {
      id: 'difusion',
      titulo: 'Difusión académica',
      parrafos: [
        'He impartido cursos e impulsado la difusión e integración social de Mindfulness a través de la Universidad Complutense de Madrid, formando al colectivo universitario a través del servicio de Acción Social y con mi participación en distintas de sus formaciones: Co-director del Primer curso de la Escuela de Verano de la UCM sobre Mindfulness, colaboración en la propuesta del Diploma en Mindfulness para profesionales de la salud como título propio de la UCM, etc.',
      ],
    },
    {
      id: 'trayectoria',
      titulo: 'Trayectoria',
      parrafos: [
        'Llevo realizando cursos de Mindfulness desde el año 2010 y acompañando en su evolución a más de 8.000 participantes a nivel particular a través de sesiones individuales, cursos de 8 semanas, seminarios, intensivos, encuentros y talleres.',
        'He trabajado y colaborado con distintas organizaciones públicas y privadas: 3M, Mahou San Miguel, AstraZeneca, Celgene, Fundación Deporte Joven del CSD, Universidad Complutense de Madrid, Policía Nacional, Asociación de Víctimas del Terrorismo y más y más organizaciones que han confiado en mí.',
      ],
    },
    {
      id: 'situacion',
      titulo: 'Situación actual',
      // Texto literal del original. Va sin animaciones.
      parrafos: [
        'Debido a la [esclerosis múltiple con la que convivo](https://habitareltiempo.com/mindfulness-y-esclerosis-multiple/) desde hace años y al deterioro progresivo que padezco, la dirección y gestión de esta Escuela y con el objetivo de que pueda seguir existiendo y cumpliendo su misión más allá de mi persona, ha sido asumida por mi compañera Patricia Villa que ha compartido conmigo cada paso de este proyecto y lo conoce mejor que nadie.',
      ],
    },
  ],
};

export const confianza = {
  titulo: 'Han confiado en esta Escuela...',
  frase:
    'El cuidado “real” del personal es un valor poco habitual, presente en empresas conscientes de que no emplean a trabajadores sino a seres humanos que trabajan.',
};

export const suscripcion = {
  titulo: '¿Quieres recibir novedades?',
  sub: 'Para estar al día...',
};
