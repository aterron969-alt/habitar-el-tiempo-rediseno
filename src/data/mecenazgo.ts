// Mecenazgo: textos y enlaces de pago. Los enlaces de Stripe son los ORIGINALES
// de la escuela (comprobados en el HTML de habitareltiempo.com/mecenazgo/). No cambiarlos.

export const citaMecenazgo = {
  nombre: 'Patricia Villa',
  parrafos: [
    'Gracias al compromiso y fidelidad de quienes creen en este proyecto y aportan recursos con su mecenazgo, esta escuela existe y nos hace posible facilitar el acceso a más personas, para que puedan aprender a estar mejor en la vida a pesar de las dificultades. En el nombre de todas ellas y todos ellos y por supuesto en el mío propio y el de Rafael de Silva, te damos las ¡GRACIAS!',
    '¿Aún no eres mecenas? Elige tu mecenazgo y pasa a formar parte de esta “familia”.',
  ],
};

export const invitacion =
  'Únete a nuestras y nuestros MECENAS y ayúdanos a cuidar del árbol de Mindfulness para que pueda cobijar a todas las personas, con independencia de sus recursos personales.';

export type Planta = 'raiz' | 'tallo' | 'fruto';

export const cuotas: { id: Planta; nombre: string; precio: string; texto: string; enlace: string }[] = [
  {
    id: 'raiz',
    nombre: 'RAÍZ',
    precio: '4,95 €',
    texto: 'Con esta aportación nos ayudas a conseguir la base en la que sostener este hermoso proyecto.',
    enlace: 'https://buy.stripe.com/4gw9DO8BN8pY95C14w',
  },
  {
    id: 'tallo',
    nombre: 'TALLO',
    precio: '9,95 €',
    texto: 'Esta ayuda nos permite crecer y alcanzar a más y más personas.',
    enlace: 'https://buy.stripe.com/7sI9DOg4f49Igy428x',
  },
  {
    id: 'fruto',
    nombre: 'FRUTO',
    precio: '14,95 €',
    texto:
      'Con esta ayuda avanzamos en expandir por el mundo la conciencia necesaria para apreciar profundamente la belleza de la vida, sin perdernos en las dificultades.',
    enlace: 'https://buy.stripe.com/7sI5ny3htcGe2He28B',
  },
];

export const notaSuscripcion = '*Suscripción mensual que puedes anular o modificar cuando desees.';

export const puntual = {
  titulo: 'Aportación puntual',
  texto: 'Aportación puntual · tú eliges el importe',
  enlace: 'https://buy.stripe.com/3cs3fqaJV6hQ3Li4gG',
};
