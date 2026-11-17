// Blender Industria · sitio estático.
// Todo el contenido sale de catalogo.json (productos) y js/servicios.js (servicios). No hay servidor ni panel.
import { SERVICIOS } from "./servicios.js";

const TEL = "+52 477 404 1122";
const TEL_LINK = "tel:+524774041122";
const wa = texto => "https://wa.me/524774041122?text=" + encodeURIComponent(texto);

const app = document.getElementById("app");
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
let PRODUCTOS = [];
let CATEGORIAS = [];
let filtro = "todos";

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const DOCS = { "ft-es": "Ficha técnica · Español", "ft-en": "Ficha técnica · English", "hs-es": "Hoja de seguridad · Español", "hs-en": "Hoja de seguridad · English" };
const ICONO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h14v14H3z" opacity="0"/><path fill="none" stroke="currentColor" stroke-width="2" d="M4 6l8 5 8-5M4 6v12h16V6z"/></svg>';

// ---------------------------------------------------------------- vistas
function tarjetaProducto(p) {
  const im = imagenes(p)[0];
  return `<a class="card" href="#producto/${esc(p.slug)}">
    <div class="ph">${im ? `<img src="${esc(im.thumb)}" alt="${esc(p.nombre)}" loading="lazy">` : ""}</div>
    <div class="bd"><span class="mk">${esc(p.marca)}</span><h3>${esc(p.nombre)}</h3><p>${esc(p.descripcion)}</p></div></a>`;
}

function tarjetaServicio(s) {
  return `<a class="svc-card" href="#servicio/${esc(s.id)}">
    <div class="ph"><img src="servicios/${esc(s.foto)}/horizontal-thumb.webp" alt="${esc(s.titulo)}" loading="lazy"></div>
    <div class="bd"><span class="n">${esc(s.n)}</span><h3>${esc(s.titulo)}</h3><p>${esc(s.resumen)}</p><span class="more">Ver detalle</span></div></a>`;
}

function vistaInicio(ancla) {
  const lista = PRODUCTOS.filter(p => filtro === "todos" || p.categoria === filtro);
  app.innerHTML = `
  <section class="hero on-dark" id="inicio">
    <img class="bg" src="servicios/construccion-de-pisos/horizontal.webp" alt="">
    <div class="wrap">
      <span class="eyebrow">Blender Industria · León, Guanajuato</span>
      <h1>Pisos industriales <b>de concreto</b></h1>
      <p>Soluciones integrales de diseño, construcción, reparación y fabricación de productos para superficies de concreto. Proyectos de alta especificación para naves logísticas, plantas de manufactura y centros de distribución en todo el país.</p>
      <div class="acts">
        <a class="btn btn-y" href="#servicios">Ver servicios</a>
        <a class="btn btn-o" href="${wa("Hola, quiero información sobre sus servicios para pisos industriales.")}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </section>

  <section class="section" id="servicios"><div class="wrap">
    <div class="section-head"><div><h2>Servicios</h2><p>Ingeniería, construcción de alta especialidad, recubrimientos y mantenimiento integral de superficies.</p></div></div>
    <div class="svcs">${SERVICIOS.map(tarjetaServicio).join("")}</div>
  </div></section>

  <section class="section alt" id="productos"><div class="wrap">
    <div class="section-head"><div><h2>Productos</h2><p>Materiales de fabricación propia para construir, proteger y dar mantenimiento a pisos de concreto.</p></div></div>
    <div class="chips" role="group" aria-label="Filtrar por categoría">
      <button class="chip" data-f="todos" aria-pressed="${filtro === "todos"}">Todos</button>
      ${CATEGORIAS.map(c => `<button class="chip" data-f="${esc(c.slug)}" aria-pressed="${filtro === c.slug}">${esc(c.nombre)}</button>`).join("")}
    </div>
    <div class="grid">${lista.map(tarjetaProducto).join("") || '<p class="sub">No hay productos en esta categoría.</p>'}</div>
  </div></section>

  <section class="section" id="contacto"><div class="wrap">
    <div class="section-head"><div><h2>Contacto</h2><p>Escríbenos o llámanos para cotizar tu proyecto.</p></div></div>
    <div class="contact">
      <a class="item" href="${TEL_LINK}"><span class="k">Teléfono y WhatsApp</span><span class="v">${TEL}</span></a>
      <a class="item" href="${wa("Hola, quiero cotizar un servicio para pisos industriales.")}" target="_blank" rel="noopener"><span class="k">WhatsApp</span><span class="v">Enviar mensaje</span><small>Respuesta en horario de oficina</small></a>
    </div>
  </div></section>`;
  wire();
  app.querySelectorAll(".chip").forEach(b => b.onclick = () => { filtro = b.dataset.f; vistaInicio("productos"); });
  if (ancla) document.getElementById(ancla)?.scrollIntoView();
  else scrollTo(0, 0);
}

// Devuelve las imágenes de un producto como lista plana {tipo, src, thumb, foto}.
function imagenes(p) {
  const out = [];
  for (const tipo of ["producto", "ambiente", "obra", "diagrama"]) {
    for (const im of (p.imagenes?.[tipo] || [])) {
      out.push({ tipo, src: `productos/${p.slug}/${im.archivo}`, thumb: `productos/${p.slug}/${im.miniatura}`, foto: !im.transparente });
    }
  }
  return out;
}

function vistaProducto(p) {
  const imgs = imagenes(p);
  const docs = Object.entries(p.documentos || {});
  const filas = [];
  if (p.rendimiento) filas.push(["Rendimiento", p.rendimiento]);
  for (const e of (p.especificaciones || [])) filas.push([e.label, e.valor]);
  if ((p.presentaciones || []).length) filas.push(["Presentación", p.presentaciones.map(x => x.nombre || x).join(" · ")]);
  app.innerHTML = `
  <div class="band"><div class="wrap">
    <span class="crumbs"><a href="#productos">Productos</a> / ${esc(p.marca || "")}</span>
    <h1>${esc(p.nombre)}</h1>
  </div></div>
  <div class="wrap"><div class="detail">
    <div>
      <div class="stage${imgs[0]?.foto ? " foto" : ""}" id="stage">${imgs[0] ? `<img id="stageImg" src="${esc(imgs[0].src)}" alt="${esc(p.nombre)}">` : ""}</div>
      ${imgs.length > 1 ? `<div class="thumbs">${imgs.map((im, i) => `<button type="button" data-i="${i}" aria-pressed="${i === 0}" aria-label="Imagen ${i + 1}"><img src="${esc(im.thumb)}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}
    </div>
    <div class="info">
      ${p.imagenes?.logo_marca ? `<img class="logo-m" src="productos/${esc(p.slug)}/${esc(p.imagenes.logo_marca)}" alt="${esc(p.marca)}">` : ""}
      <p class="lead">${esc(p.descripcion)}</p>
      ${(p.beneficios || []).length ? `<ul class="checks">${p.beneficios.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
      ${filas.length ? `<div><h2>Especificaciones</h2><table class="specs"><tbody>${filas.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table></div>` : ""}
      ${(p.aplicaciones || []).length ? `<div><h2>Aplicaciones</h2><ul class="checks">${p.aplicaciones.map(a => `<li>${esc(a)}</li>`).join("")}</ul></div>` : ""}
      ${docs.length ? `<div><h2>Documentos</h2><div class="docs">${docs.map(([k, d]) => `<a class="doc" href="productos/${esc(p.slug)}/${esc(d.archivo)}" target="_blank" rel="noopener"><span class="pdf">PDF</span><span class="t">${esc(DOCS[k] || k)}${d.bytes ? `<span class="s">${(d.bytes / 1048576).toFixed(1)} MB</span>` : ""}</span></a>`).join("")}</div></div>` : ""}
      <div class="acts">
        <a class="btn btn-y" href="${wa(`Hola, quiero cotizar ${p.nombre}${p.marca ? " (" + p.marca + ")" : ""}.`)}" target="_blank" rel="noopener">Cotizar por WhatsApp</a>
        <a class="btn btn-o" href="${TEL_LINK}">Llamar ${TEL}</a>
      </div>
    </div>
  </div></div>`;
  wire();
  const stage = document.getElementById("stage"), img = document.getElementById("stageImg");
  app.querySelectorAll(".thumbs button").forEach(b => b.onclick = () => {
    const im = imgs[+b.dataset.i]; img.src = im.src; stage.classList.toggle("foto", im.foto);
    app.querySelectorAll(".thumbs button").forEach(x => x.setAttribute("aria-pressed", x === b));
  });
  scrollTo(0, 0);
}

function vistaServicio(s) {
  const otros = SERVICIOS.filter(x => x.id !== s.id);
  app.innerHTML = `
  <div class="band"><div class="wrap">
    <span class="crumbs"><a href="#servicios">Servicios</a> / ${esc(s.n)}</span>
    <h1>${esc(s.titulo)}</h1>
  </div></div>
  <div class="wrap"><div class="detail">
    <div class="photo"><img src="servicios/${esc(s.foto)}/cuadrado.webp" alt="${esc(s.titulo)}"></div>
    <div class="info">
      <p class="lead">${esc(s.resumen)}</p>
      ${s.bloques.map(b => `<div class="block"><h2>${esc(b.titulo)}</h2>
        <ul>${b.items.map(([k, v]) => `<li><b>${esc(k)}:</b> ${esc(v)}</li>`).join("")}</ul>
        ${b.entrega ? `<p class="entrega"><b>Entregables:</b> ${esc(b.entrega)}</p>` : ""}</div>`).join("")}
      <div class="acts">
        <a class="btn btn-y" href="${wa(`Hola, quiero cotizar el servicio: ${s.titulo}.`)}" target="_blank" rel="noopener">Cotizar por WhatsApp</a>
        <a class="btn btn-o" href="${TEL_LINK}">Llamar ${TEL}</a>
      </div>
    </div>
  </div></div>
  <section class="section alt"><div class="wrap">
    <div class="section-head"><h2>Otros servicios</h2></div>
    <div class="svcs">${otros.map(tarjetaServicio).join("")}</div>
  </div></section>`;
  wire();
  scrollTo(0, 0);
}

// ---------------------------------------------------------------- navegación
function wire() { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
menuBtn.onclick = () => menuBtn.setAttribute("aria-expanded", nav.classList.toggle("open"));

function ruta() {
  const h = decodeURIComponent(location.hash.slice(1)) || "inicio";
  const [tipo, id] = h.split("/");
  if (tipo === "producto") { const p = PRODUCTOS.find(x => x.slug === id); if (p) return vistaProducto(p); }
  if (tipo === "servicio") { const s = SERVICIOS.find(x => x.id === id); if (s) return vistaServicio(s); }
  vistaInicio(["servicios", "productos", "contacto"].includes(tipo) ? tipo : "");
}
window.addEventListener("hashchange", ruta);

// catalogo.json: { categorias: [{slug, nombre}], productos: [...] }
fetch("catalogo.json").then(r => r.json()).then(c => {
  CATEGORIAS = [...c.categorias].sort((a, b) => (a.orden || 0) - (b.orden || 0));
  PRODUCTOS = [...c.productos].sort((a, b) => (a.orden || 0) - (b.orden || 0));
  ruta();
}).catch(e => {
  console.error(e);
  app.innerHTML = '<div class="wrap"><p class="sub" style="padding:48px 0">No se pudo cargar el contenido. Recarga la página en unos segundos.</p></div>';
});
