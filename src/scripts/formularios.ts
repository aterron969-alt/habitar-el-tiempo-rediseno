// Validación de formularios (al salir del campo y al enviar) y ventana de sesiones.
// Como es una demo, los formularios con [data-demo] no envían datos:
// muestran el aviso [data-aviso-demo]. Para conectarlos de verdad, quita
// data-demo y pon action/method (Formspree o backend de la escuela).

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function mensaje(campo: HTMLInputElement | HTMLTextAreaElement): string {
  const valor = campo.type === 'checkbox' ? (campo as HTMLInputElement).checked : campo.value.trim();
  if (campo.required && !valor) return campo.dataset.vacio || 'Este campo es obligatorio.';
  if (campo.type === 'email' && valor && !EMAIL.test(String(valor)))
    return 'Revisa el correo: debe tener la forma nombre@dominio.es.';
  if (campo.type === 'tel' && valor && String(valor).replace(/\D/g, '').length < 9)
    return 'Revisa el teléfono: debe tener al menos 9 cifras.';
  return '';
}

function pinta(campo: HTMLInputElement | HTMLTextAreaElement): boolean {
  const caja = campo.closest<HTMLElement>('[data-campo]');
  const error = caja?.querySelector<HTMLElement>('.campo-error');
  const texto = mensaje(campo);
  if (caja) caja.dataset.estado = texto ? 'error' : 'ok';
  campo.setAttribute('aria-invalid', texto ? 'true' : 'false');
  if (error) error.textContent = texto;
  return !texto;
}

document.querySelectorAll<HTMLFormElement>('form[data-demo]').forEach((form) => {
  const campos = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea')];
  const aviso = form.querySelector<HTMLElement>('[data-aviso-demo]');
  campos.forEach((c) => {
    c.addEventListener('blur', () => { if (c.value || c.dataset.tocado) pinta(c); c.dataset.tocado = '1'; });
    c.addEventListener(c.type === 'checkbox' ? 'change' : 'input', () => {
      if (c.closest<HTMLElement>('[data-campo]')?.dataset.estado === 'error') pinta(c);
    });
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const validos = campos.map(pinta);
    const primero = campos[validos.indexOf(false)];
    if (primero) { primero.focus(); if (aviso) aviso.hidden = true; return; }
    if (aviso) { aviso.hidden = false; }
  });
});

// Ventana «Solicita tus sesiones»
const dialogo = document.querySelector<HTMLDialogElement>('[data-dialogo-sesiones]');
if (dialogo) {
  let origen: HTMLElement | null = null;
  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const abre = t.closest<HTMLElement>('[data-abrir-sesiones]');
    if (abre) {
      e.preventDefault();
      origen = abre;
      dialogo.showModal();
      window.dispatchEvent(new CustomEvent('ht:scroll', { detail: false }));
      return;
    }
    if (t.closest('[data-cerrar-dialogo]') || t === dialogo) dialogo.close();
  });
  dialogo.addEventListener('close', () => {
    window.dispatchEvent(new CustomEvent('ht:scroll', { detail: true }));
    origen?.focus();
  });
}
