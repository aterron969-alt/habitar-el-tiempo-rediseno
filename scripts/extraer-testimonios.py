"""Extrae los testimonios de la web original (HTML descargado) a src/data/testimonios.ts.
Uso: python3 -I scripts/extraer-testimonios.py <home.html> <experiencias.html> <salida.ts>"""
import re, html, json, sys

ERRATAS = [("éste curso", "este curso"), ("a mi misma", "a mí misma"), ("queel", "que el")]

def limpia(t):
    t = html.unescape(re.sub(r"<[^>]+>", " ", t))
    t = re.sub(r"\s+", " ", t).strip().replace(" ​", "").replace("​", "")
    for a, b in ERRATAS:
        t = t.replace(a, b)
    return t

def cargo(job):
    partes = [limpia(p) for p in re.split(r"</?br\s*/?>", job) if limpia(p)]
    return partes[0] if partes else "", (partes[1] if len(partes) > 1 else "")

def foto(src):
    return re.sub(r"-\d+x\d+(?=\.\w+$)", "", src.split("/")[-1])

def portada(s):
    out = []
    for b in re.findall(r'(?s)elementor-testimonial__text">(.*?)</div>.*?<img[^>]*src="([^"]+)".*?__name">(.*?)</span><span class="elementor-testimonial__title">(.*?)</span>', s):
        texto, src, nombre, job = b
        c, e = cargo(job)
        out.append(dict(nombre=limpia(nombre), cargo=c, empresa=e, texto=limpia(texto), foto=foto(src)))
    return out

def experiencias(s):
    out = []
    bloques = s.split('elementor-testimonial-content">')[1:]
    for b in bloques:
        texto = b.split("</div>", 1)[0]
        meta = b.split('elementor-testimonial-content">', 1)[0][:4000]
        src = re.search(r'<img[^>]*src="([^"]+)"', meta)
        nombre = re.search(r'testimonial-name">(.*?)</div>', meta, re.S)
        job = re.search(r'testimonial-job">(.*?)</div>', meta, re.S)
        c, e = cargo(job.group(1) if job else "")
        out.append(dict(nombre=limpia(nombre.group(1)) if nombre else "", cargo=c, empresa=e, texto=limpia(texto), foto=foto(src.group(1)) if src else ""))
    return out

home = open(sys.argv[1], encoding="utf-8").read()
exp = open(sys.argv[2], encoding="utf-8").read()
p, x = portada(home), experiencias(exp)
vacios = [t["nombre"] for t in p + x if not t["texto"]]
print(len(p), "portada;", len(x), "experiencias; sin texto:", vacios, file=sys.stderr)
cab = ("// Testimonios copiados literalmente de habitareltiempo.com (solo se corrigen erratas).\n"
       "// Para añadir o cambiar uno: edita el objeto y, si lleva foto, deja el archivo en src/assets/testimonios/.\n"
       "export interface Testimonio { nombre: string; cargo: string; empresa: string; texto: string; foto: string; }\n\n")
with open(sys.argv[3], "w", encoding="utf-8") as f:
    f.write(cab)
    f.write("/** Versión corta, la del carrusel de la portada. */\nexport const testimoniosPortada: Testimonio[] = " + json.dumps(p, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("/** Versión completa, la de la página Experiencias. */\nexport const testimoniosExperiencias: Testimonio[] = " + json.dumps(x, ensure_ascii=False, indent=2) + ";\n")
