/* Véndelo Ya — shared: iconos, i18n ES/EN, sesión demo, datos demo (localStorage) */

/* ---------- Sprite de iconos ---------- */
const VY_SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="i-gear" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.4-2.1.9-1.4-1.6-2.8-1.7.3a6.6 6.6 0 0 0-1.2-.7L15.4 4h-3.2l-.4 1.8c-.4.2-.8.4-1.2.7l-1.7-.3-1.6 2.8.9 1.4a6.7 6.7 0 0 0 0 1.4l-.9 1.4 1.6 2.8 1.7-.3c.4.3.8.5 1.2.7l.4 1.8h3.2l.4-1.8c.4-.2.8-.4 1.2-.7l1.7.3 1.6-2.8-.9-1.4c0-.5 0-1 0-1.4Z"/></symbol>
  <symbol id="i-road" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M4 20 9 4m11 16L15 4M12 6v2.5M12 11v2.5M12 16v2.5"/></symbol>
  <symbol id="i-cal" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M7 3v3m10-3v3M4.5 8.5h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></symbol>
  <symbol id="i-fuel" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M5 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15M3.5 21h11M15 10h1.5a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0v-8L18 5.5M8 4v5h4V4"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3 5 5.8v5.4c0 4.3 2.9 8 7 9.8 4.1-1.8 7-5.5 7-9.8V5.8L12 3Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m9 12 2.2 2.2L15.5 9.7"/></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M9 13h6M9 17h6"/></symbol>
  <symbol id="i-camera" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13.5" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol>
  <symbol id="i-video" viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="m16 10 5-3v10l-5-3"/></symbol>
  <symbol id="i-bank" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 9.5 12 4l9 5.5M5 10v8m4.5-8v8m5-8v8M19 10v8M3.5 20.5h17"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 12h15m-6-6 6 6-6 6"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 7.5V12l3 2"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M5 20c1.3-3 4-4.5 7-4.5s5.7 1.5 7 4.5"/></symbol>
  <symbol id="i-plus" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" d="M12 5v14M5 12h14"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 21s-6.5-5.3-6.5-10a6.5 6.5 0 0 1 13 0c0 4.7-6.5 10-6.5 10Z"/><circle cx="12" cy="10.7" r="2.3" fill="none" stroke="currentColor" stroke-width="1.8"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 3.7c.6-.6 1.6-.5 2.1.2l1.7 2.4c.4.6.3 1.4-.2 1.9l-1 1a13 13 0 0 0 5.8 5.8l1-1c.5-.5 1.3-.6 1.9-.2l2.4 1.7c.7.5.8 1.5.2 2.1l-1.3 1.3c-.7.7-1.7 1-2.6.7A17.6 17.6 0 0 1 5.4 8.3c-.3-.9 0-1.9.7-2.6l.3-.3Z"/></symbol>
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8ZM9 8.1c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1 0 1.3.9 2.5 1 2.7.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.4-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.3 0-.4.1-.6l.6-.7c.2-.2.2-.4.1-.6-.1-.2-.7-1.6-.9-2.1-.2-.5-.4-.5-.6-.5H9Z"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m4.5 7.5 7.5 6 7.5-6"/></symbol>
  <symbol id="i-bell" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M18 8a6 6 0 0 0-12 0c0 6-2.5 7-2.5 7h17S18 14 18 8Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M10.5 19a1.8 1.8 0 0 0 3 0"/></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M12 3.6 21.4 20H2.6L12 3.6Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 9.5v4.4"/><circle cx="12" cy="16.8" r="1.05" fill="currentColor"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6 6 18"/></symbol>
  <symbol id="i-note" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M8 9h8M8 13h8M8 17h5"/></symbol>
  <symbol id="i-expand" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M9 4H5a1 1 0 0 0-1 1v4m0 6v4a1 1 0 0 0 1 1h4m6-16h4a1 1 0 0 1 1 1v4m0 6v4a1 1 0 0 1-1 1h-4"/></symbol>
  <symbol id="i-play" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z"/></symbol>
  <symbol id="i-download" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M12 4v10m0 0 4-4m-4 4-4-4M5 18h14"/></symbol>
  <symbol id="i-google" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.4 14a6 6 0 0 1 0-3.8V7.6H3.1a10 10 0 0 0 0 9l3.3-2.6Z"/><path fill="#EA4335" d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.6L6.4 10c.8-2.3 3-4 5.6-4Z"/></symbol>
  <symbol id="i-apple" viewBox="0 0 24 24"><path fill="currentColor" d="M16.7 12.9c0-2.4 2-3.6 2-3.6-1.1-1.6-2.8-1.8-3.4-1.9-1.5-.1-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8-1.6 0-3 .9-3.9 2.4-1.6 2.9-.4 7.1 1.2 9.4.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.8c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7 0 0-2.6-1-2.7-3.7ZM14.4 5.6c.7-.8 1.1-1.9 1-3.1-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.9-1 3 1 .1 2.1-.6 2.8-1.4Z"/></symbol>
</svg>`;

/* ---------- Diccionario ES / EN ---------- */
const VY_DICT = {
  es: {
    "nav.servicio": "El servicio",
    "nav.faq": "Preguntas",
    "nav.contacto": "Contacto",
    "nav.entrar": "Iniciar sesión",
    "nav.vender": "Vende tu auto",
    "nav.salir": "Cerrar sesión",
    "nav.misautos": "Mis autos",
    "nav.perfil": "Mi perfil",

    "hero.kicker": "Panamá",
    "hero.t1": "Vende tu auto",
    "hero.t2": "sin vueltas.",
    "hero.sub": "Publica tu auto con fotos y datos, nosotros lo revisamos, te hacemos una oferta y el pago se libera con el traspaso legal. Transparente de principio a fin.",
    "hero.cta": "Publicar mi auto",
    "hero.cta2": "Ver cómo funciona",
    "hero.note": "Registro en menos de 1 minuto",
    "hero.chip1": "Automático",
    "hero.chip2": "45,000 km",
    "hero.chip3": "2021",
    "hero.chip4": "Gasolina",
    "hero.stat1": "Revisado fijo",
    "hero.stat2": "El reporte es tuyo",
    "hero.stat2v": "Siempre",
    "hero.stat3": "Pago",
    "hero.stat3v": "Al traspaso",

    "marcas.label": "Compramos todas las marcas del mercado panameño",

    "steps.kicker": "El proceso",
    "steps.title": "Cuatro pasos, cero enredos",
    "steps.s1t": "Publica tu auto",
    "steps.s1d": "Crea tu cuenta con Google o Apple, sube fotos y videos, llena los datos y define el precio que quieres recibir.",
    "steps.s2t": "Agendamos la revisión",
    "steps.s2d": "Te contactamos, te notificamos el revisado y agendamos cita en un taller designado. El revisado cuesta US$60 fijos.",
    "steps.s3t": "Recibes oferta y reporte",
    "steps.s3d": "Con el diagnóstico en mano te hacemos una oferta. El reporte del taller queda para ti, vendas o no vendas.",
    "steps.s4t": "Traspaso y pago",
    "steps.s4d": "Firmamos un acuerdo confidencial, verificamos la parte legal y el pago se libera al completarse el traspaso.",
    "steps.follow": "Sigue cada etapa en tiempo real desde tu cuenta",

    "sixty.kicker": "El revisado",
    "sixty.title": "Revisión profesional, y el reporte es tuyo.",
    "sixty.d": "Revisamos tu auto a fondo en un taller designado y te entregamos un reporte completo. Lo importante: ese diagnóstico queda en tus manos, vendas o no.",
    "sixty.c1t": "Si te compramos el auto",
    "sixty.c1d": "Nosotros cubrimos los US$60 del revisado. Tú no pagas nada por el diagnóstico.",
    "sixty.c2t": "Si no llegamos a acuerdo",
    "sixty.c2d": "Pagas los US$60 del revisado y te llevas el reporte completo: sabrás exactamente qué reparar o negociar en otra venta.",
    "sixty.note": "El reporte incluye estado mecánico, carrocería y recomendaciones del taller.",

    "legal.kicker": "Respaldo legal",
    "legal.title": "Verificamos todo antes de pagar",
    "legal.d": "Cada compra pasa por una investigación legal obligatoria en Panamá. Así protegemos al vendedor y a la empresa.",
    "legal.l1t": "Titularidad",
    "legal.l1d": "Confirmamos que el vehículo esté a tu nombre en el Registro Único Vehicular y el municipio.",
    "legal.l2t": "Paz y salvo",
    "legal.l2d": "Verificamos placa e impuestos municipales al día antes del traspaso.",
    "legal.l3t": "Gravamen bancario",
    "legal.l3d": "Si le debes al banco, lo declaras al publicar: el préstamo se salda primero en el traspaso.",
    "legal.l4t": "Multas y robo",
    "legal.l4d": "Revisamos multas pendientes (ATTT) y verificamos que no exista reporte de robo (DIJ).",
    "legal.pay": "El pago se libera únicamente al completarse el trámite legal de traspaso. Sin excepciones — esa es tu garantía y la nuestra.",

    "time.kicker": "Transparencia total",
    "time.title": "Tu auto, en vivo",
    "time.d": "Desde que publicas, tu cuenta muestra una línea de tiempo que se actualiza en tiempo real: sabrás cuándo lo estamos revisando, cuándo hay cita, cuándo hay oferta y cuándo se libera el pago.",

    "faq.kicker": "Preguntas frecuentes",
    "faq.title": "Resolvemos tus dudas",
    "faq.q1": "¿Cuánto cuesta publicar mi auto?",
    "faq.a1": "Nada. Publicar es gratis. El único costo posible son los US$60 del revisado, y solo si no llegamos a un acuerdo de compra.",
    "faq.q2": "¿Quién hace el revisado y dónde?",
    "faq.a2": "Un taller designado por la empresa. Te notificamos el taller, la fecha y la hora al agendar tu cita.",
    "faq.q3": "¿Qué pasa si mi auto tiene préstamo del banco?",
    "faq.a3": "Lo declaras al publicar (banco y monto). En el traspaso se salda primero el préstamo y el resto se te paga a ti.",
    "faq.q4": "¿Cuándo recibo mi dinero?",
    "faq.a4": "Al completarse el trámite legal de traspaso del vehículo. Es la forma más segura para ambas partes.",
    "faq.q5": "¿Mis datos y el acuerdo son privados?",
    "faq.a5": "Sí. La oferta y el acuerdo de compraventa son confidenciales, y tus autos solo los ves tú y la empresa.",

    "cta.title": "¿Listo para venderlo ya?",
    "cta.d": "Publica tu auto en minutos. Nosotros nos encargamos del resto.",
    "cta.b": "Empezar ahora",
    "cta.ready": "¿Listo para empezar? Publica tu auto en menos de un minuto.",
    "cta.ready2": "Con todo el respaldo legal, tu venta empieza aquí.",
    "cta.doubt": "¿Te quedó alguna duda? Empieza y te acompañamos en cada paso.",
    "cta.trust": "Gratis · Sin compromiso · Tus datos son privados",
    "cta.rev": "Quiero mi revisado",

    "foot.legal": "Aviso legal",
    "foot.terms": "Términos y condiciones",
    "foot.priv": "Privacidad",
    "foot.tag": "Compra directa de autos en Panamá. El pago se libera al completarse el traspaso legal.",
    "foot.credit": "Desarrollado por",

    "svc.kicker": "El servicio",
    "svc.title": "Así funciona Véndelo Ya",
    "svc.intro": "Un solo comprador serio: nosotros. Sin publicar en redes, sin desconocidos, sin regateo eterno. Este es el proceso completo, paso a paso.",
    "svc.s1t": "Publicas tu auto",
    "svc.s1d": "Te registras con Google, Apple o tu correo. Subes fotos (y videos si quieres), llenas marca, modelo, año, kilometraje y defines el precio que deseas recibir. Si el auto tiene préstamo bancario, lo declaras ahí mismo.",
    "svc.s2t": "Lo estudiamos",
    "svc.s2d": "Nuestro equipo revisa tu publicación y la documentación básica. Desde tu cuenta ves el avance en tiempo real.",
    "svc.s3t": "Notificación del revisado",
    "svc.s3d": "Antes de cualquier cita te notificamos formalmente que el auto pasará por un revisado técnico de US$60 en un taller designado, y quién lo paga en cada caso.",
    "svc.s4t": "Cita y revisado",
    "svc.s4d": "Agendamos contigo fecha, hora y taller. El diagnóstico cubre mecánica, carrocería y recomendaciones.",
    "svc.s5t": "Oferta",
    "svc.s5d": "Con el reporte en mano te presentamos nuestra oferta. Tú tienes tu precio deseado; conversamos sobre esa base.",
    "svc.s6t": "Acuerdo confidencial",
    "svc.s6d": "Si aceptas, firmamos un acuerdo de compraventa confidencial que protege a ambas partes.",
    "svc.s7t": "Verificación legal",
    "svc.s7d": "Titularidad, paz y salvo, gravámenes, multas ATTT y reporte de robo (DIJ). Obligatoria en toda compra.",
    "svc.s8t": "Traspaso y pago",
    "svc.s8d": "Se hace el trámite legal de traspaso. Al completarse, se libera tu pago. Si hay préstamo, se salda el banco primero.",
    "svc.who": "¿Quién paga el revisado?",
    "svc.who1": "Te compramos el auto → lo pagamos nosotros.",
    "svc.who2": "No hay acuerdo → lo pagas tú (US$60) y el reporte queda contigo.",
    "svc.cta": "Publicar mi auto ahora",

    "auth.login.t": "Bienvenido de vuelta",
    "auth.login.d": "Entra para ver tus autos y el estado de tu venta.",
    "auth.reg.t": "Crea tu cuenta",
    "auth.reg.d": "En menos de un minuto. Elige la vía rápida:",
    "auth.google": "Continuar con Google",
    "auth.apple": "Continuar con Apple",
    "auth.or": "o con tu correo",
    "auth.name": "Nombre completo",
    "auth.email": "Correo electrónico",
    "auth.phone": "Teléfono (WhatsApp)",
    "auth.pass": "Contraseña",
    "auth.login.b": "Entrar",
    "auth.reg.b": "Crear cuenta",
    "auth.login.alt": "¿No tienes cuenta?",
    "auth.login.alt2": "Regístrate",
    "auth.reg.alt": "¿Ya tienes cuenta?",
    "auth.reg.alt2": "Inicia sesión",
    "auth.terms": "Al continuar aceptas los Términos y la Política de privacidad.",

    "app.hola": "Hola",
    "app.sub": "Este es el estado de tus autos.",
    "app.publicar": "Publicar mi auto",
    "app.empty.t": "Aún no has publicado ningún auto",
    "app.empty.d": "Publica el primero: fotos, datos y tu precio deseado. Toma menos de 5 minutos.",
    "app.precio": "Precio deseado",
    "app.oferta": "Oferta de la empresa",
    "app.reporte": "Descargar reporte del revisado",
    "app.reporte.na": "El reporte estará disponible después del revisado",
    "app.debe": "Préstamo declarado",
    "app.volver": "Volver a mis autos",
    "app.timeline": "Línea de tiempo",
    "app.demo": "Auto de ejemplo para que veas la línea de tiempo. Puedes eliminarlo.",
    "app.eliminar": "Eliminar",
    "app.cita": "Cita: 24 jul, 9:00 a.m. · Taller AutoCheck, Vía España",

    "st.1": "Recibido",
    "st.2": "En revisión",
    "st.3": "Verificación de documentos",
    "st.4": "Cita agendada",
    "st.5": "Revisado realizado",
    "st.6": "Oferta enviada",
    "st.7": "Acuerdo firmado",
    "st.8": "Trámite de traspaso",
    "st.9": "Pago liberado",
    "st.1d": "Tu publicación entró al sistema.",
    "st.2d": "Nuestro equipo está estudiando tu auto.",
    "st.3d": "Revisamos titularidad, gravámenes y multas.",
    "st.4d": "Fecha, hora y taller confirmados para el revisado.",
    "st.5d": "Diagnóstico completo. El reporte queda disponible para ti.",
    "st.6d": "Te presentamos nuestra oferta de compra.",
    "st.7d": "Acuerdo confidencial de compraventa firmado.",
    "st.8d": "Traspaso legal en curso. Si hay préstamo, se salda primero.",
    "st.9d": "Traspaso completado y pago liberado. ¡Vendido!",

    "body.S": "Sedán",
    "body.H": "Hatchback",
    "body.U": "SUV / Crossover",
    "body.P": "Pickup",
    "body.C": "Coupé",
    "body.V": "Van",
    "wiz.body": "Tipo de carrocería",
    "wiz.color": "Color",
    "wiz.disp": "¿Está disponible de inmediato?",
    "wiz.disp.d": "¿Puedes entregar el auto ya para el revisado y la venta, o todavía lo usas a diario?",
    "wiz.disp.si": "Sí, disponible ya",
    "wiz.disp.no": "Aún lo uso a diario",
    "wiz.val": "Rango de mercado estimado (referencial)",
    "app.disp.si": "Disponible de inmediato",
    "app.disp.no": "En uso diario",
    "app.oferta.vig": "Oferta válida por 7 días",
    "wiz.extras": "Detalles adicionales del auto (opcional)",
    "wiz.extras.d": "¿Algo más que debamos saber? Equipamiento, mantenimientos, detalles de pintura, un solo dueño, etc.",
    "wiz.extras.ph": "Ej. llantas nuevas, sonido premium, servicios al día, pequeño detalle en el paragolpes…",
    "wiz.acc": "¿El auto ha tenido algún accidente?",
    "wiz.acc.si": "Sí",
    "wiz.acc.no": "No",
    "wiz.acc.desc": "Cuéntanos brevemente qué pasó",
    "wiz.acc.ph": "Ej. choque leve trasero en 2023, reparado en taller autorizado…",
    "app.extras": "Detalles adicionales",
    "app.acc": "Accidente declarado",
    "app.acc.no": "Sin accidentes declarados",

    "wiz.title": "Publicar mi auto",
    "wiz.p1": "Fotos y videos",
    "wiz.p2": "Datos del auto",
    "wiz.p3": "Precio y finanzas",
    "wiz.p4": "Declaración legal",
    "wiz.fotos.d": "Sube al menos 3 fotos: exterior, interior y tablero. Videos opcionales.",
    "wiz.fotos.add": "Agregar fotos",
    "wiz.video.add": "Agregar video (opcional)",
    "wiz.marca": "Marca",
    "wiz.marca.ph": "Elige la marca",
    "wiz.modelo": "Modelo",
    "wiz.modelo.ph": "Ej. Corolla, Tucson, CR-V…",
    "wiz.anio": "Año",
    "wiz.km": "Kilometraje",
    "wiz.trans": "Transmisión",
    "wiz.trans.a": "Automática",
    "wiz.trans.m": "Manual",
    "wiz.fuel": "Combustible",
    "wiz.fuel.g": "Gasolina",
    "wiz.fuel.d": "Diésel",
    "wiz.fuel.h": "Híbrido",
    "wiz.fuel.e": "Eléctrico",
    "wiz.precio": "¿En cuánto quieres vender tu auto?",
    "wiz.precio.d": "Este es el precio que negociaremos contigo. Sé realista: lo contrastamos con el mercado y el revisado.",
    "wiz.debe": "¿Le debes al banco por este auto?",
    "wiz.debe.no": "No",
    "wiz.debe.si": "Sí",
    "wiz.banco": "Banco",
    "wiz.banco.ph": "Ej. Banco General",
    "wiz.monto": "Monto pendiente (US$)",
    "wiz.leg1": "Declaro que soy el propietario legal del vehículo.",
    "wiz.leg2": "La información del préstamo bancario declarada es veraz.",
    "wiz.leg3": "Acepto la investigación de propiedad (titularidad, paz y salvo, gravámenes, multas ATTT y verificación DIJ).",
    "wiz.leg4": "Acepto los términos del revisado: US$60 en taller designado; lo paga la empresa si compra, o yo si no hay acuerdo. El reporte queda conmigo.",
    "wiz.leg5": "Autorizo el uso de mis datos personales y de contacto únicamente para gestionar esta compraventa, conforme a la Ley 81 de 2019 de Protección de Datos Personales de Panamá.",
    "wiz.atras": "Atrás",
    "wiz.sig": "Continuar",
    "wiz.enviar": "Publicar auto",
    "wiz.ok.t": "¡Auto publicado!",
    "wiz.ok.d": "Ya está en manos de nuestro equipo. Sigue el proceso en tu línea de tiempo.",
    "wiz.ok.b": "Ver línea de tiempo",
    "wiz.err.req": "Completa este campo para continuar.",
    "wiz.err.fotos": "Sube al menos 3 fotos.",
    "wiz.err.leg": "Debes aceptar todas las declaraciones.",
    "wiz.fotos.n": "fotos",
    "wiz.video.n": "video",
  },
  en: {
    "nav.servicio": "How it works",
    "nav.faq": "FAQ",
    "nav.contacto": "Contact",
    "nav.entrar": "Log in",
    "nav.vender": "Sell your car",
    "nav.salir": "Log out",
    "nav.misautos": "My cars",
    "nav.perfil": "My profile",

    "hero.kicker": "Panama",
    "hero.t1": "Sell your car,",
    "hero.t2": "no runaround.",
    "hero.sub": "Post your car with photos and details, we inspect it, make you an offer, and payment is released once the legal transfer is complete. Transparent from start to finish.",
    "hero.cta": "Post my car",
    "hero.cta2": "See how it works",
    "hero.note": "Sign up in under a minute",
    "hero.chip1": "Automatic",
    "hero.chip2": "45,000 km",
    "hero.chip3": "2021",
    "hero.chip4": "Gasoline",
    "hero.stat1": "Flat inspection fee",
    "hero.stat2": "The report is yours",
    "hero.stat2v": "Always",
    "hero.stat3": "Payment",
    "hero.stat3v": "On transfer",

    "marcas.label": "We buy every brand in the Panamanian market",

    "steps.kicker": "The process",
    "steps.title": "Four steps, zero hassle",
    "steps.s1t": "Post your car",
    "steps.s1d": "Sign up with Google or Apple, upload photos and videos, fill in the details and set the price you want to receive.",
    "steps.s2t": "We schedule the inspection",
    "steps.s2d": "We contact you, notify you about the inspection and book an appointment at a designated garage. The inspection is a flat US$60.",
    "steps.s3t": "Get an offer and the report",
    "steps.s3d": "With the diagnosis in hand we make you an offer. The garage report is yours to keep, whether you sell or not.",
    "steps.s4t": "Transfer and payment",
    "steps.s4d": "We sign a confidential agreement, verify the legal side, and payment is released once the transfer is complete.",
    "steps.follow": "Track every stage in real time from your account",

    "sixty.kicker": "The inspection",
    "sixty.title": "A professional inspection, and the report is yours.",
    "sixty.d": "We thoroughly inspect your car at a designated garage and hand you a full report. The key part: that diagnosis stays with you, whether you sell or not.",
    "sixty.c1t": "If we buy your car",
    "sixty.c1d": "We cover the US$60 inspection fee. You pay nothing for the diagnosis.",
    "sixty.c2t": "If we don't reach a deal",
    "sixty.c2d": "You pay the US$60 fee and keep the full report: you'll know exactly what to fix or negotiate elsewhere.",
    "sixty.note": "The report covers mechanics, bodywork and the garage's recommendations.",

    "legal.kicker": "Legal backing",
    "legal.title": "We verify everything before paying",
    "legal.d": "Every purchase goes through a mandatory legal investigation in Panama. It protects both the seller and the company.",
    "legal.l1t": "Ownership",
    "legal.l1d": "We confirm the vehicle is registered under your name in the Vehicle Registry and municipality.",
    "legal.l2t": "Tax clearance",
    "legal.l2d": "We check the plate and municipal taxes are up to date before the transfer.",
    "legal.l3t": "Bank lien",
    "legal.l3d": "If you owe the bank, you declare it when posting: the loan is settled first during the transfer.",
    "legal.l4t": "Fines & theft",
    "legal.l4d": "We check pending fines (ATTT) and verify there is no theft report (DIJ).",
    "legal.pay": "Payment is released only once the legal transfer is complete. No exceptions — that's your guarantee and ours.",

    "time.kicker": "Full transparency",
    "time.title": "Your car, live",
    "time.d": "From the moment you post, your account shows a real-time timeline: you'll know when we're reviewing it, when the appointment is set, when there's an offer and when payment is released.",

    "faq.kicker": "Frequently asked questions",
    "faq.title": "Your questions, answered",
    "faq.q1": "How much does it cost to post my car?",
    "faq.a1": "Nothing. Posting is free. The only possible cost is the US$60 inspection, and only if we don't reach a deal.",
    "faq.q2": "Who performs the inspection and where?",
    "faq.a2": "A garage designated by the company. We notify you of the garage, date and time when booking.",
    "faq.q3": "What if my car has a bank loan?",
    "faq.a3": "You declare it when posting (bank and amount). During the transfer the loan is settled first and the rest is paid to you.",
    "faq.q4": "When do I get my money?",
    "faq.a4": "Once the legal transfer of the vehicle is complete. It's the safest way for both parties.",
    "faq.q5": "Are my details and the agreement private?",
    "faq.a5": "Yes. The offer and purchase agreement are confidential, and your cars are visible only to you and the company.",

    "cta.title": "Ready to sell it now?",
    "cta.d": "Post your car in minutes. We handle the rest.",
    "cta.b": "Start now",
    "cta.ready": "Ready to start? List your car in under a minute.",
    "cta.ready2": "With full legal backing, your sale starts here.",
    "cta.doubt": "Still have questions? Start and we'll guide you every step.",
    "cta.trust": "Free · No commitment · Your data stays private",
    "cta.rev": "I want my inspection",

    "foot.legal": "Legal notice",
    "foot.terms": "Terms & conditions",
    "foot.priv": "Privacy",
    "foot.tag": "Direct car buying in Panama. Payment is released once the legal transfer is complete.",
    "foot.credit": "Developed by",

    "svc.kicker": "The service",
    "svc.title": "How Véndelo Ya works",
    "svc.intro": "One serious buyer: us. No posting on social media, no strangers, no endless haggling. Here's the full process, step by step.",
    "svc.s1t": "You post your car",
    "svc.s1d": "Sign up with Google, Apple or email. Upload photos (and videos if you like), fill in brand, model, year, mileage and set the price you want. If the car has a bank loan, you declare it right there.",
    "svc.s2t": "We study it",
    "svc.s2d": "Our team reviews your listing and basic paperwork. You watch the progress in real time from your account.",
    "svc.s3t": "Inspection notice",
    "svc.s3d": "Before any appointment we formally notify you that the car will undergo a US$60 technical inspection at a designated garage, and who pays in each case.",
    "svc.s4t": "Appointment & inspection",
    "svc.s4d": "We book the date, time and garage with you. The diagnosis covers mechanics, bodywork and recommendations.",
    "svc.s5t": "Offer",
    "svc.s5d": "With the report in hand we present our offer. You have your asking price; we talk on that basis.",
    "svc.s6t": "Confidential agreement",
    "svc.s6d": "If you accept, we sign a confidential purchase agreement protecting both parties.",
    "svc.s7t": "Legal verification",
    "svc.s7d": "Ownership, tax clearance, liens, ATTT fines and theft report (DIJ). Mandatory in every purchase.",
    "svc.s8t": "Transfer & payment",
    "svc.s8d": "The legal transfer takes place. Once complete, your payment is released. If there's a loan, the bank is settled first.",
    "svc.who": "Who pays for the inspection?",
    "svc.who1": "We buy your car → we pay it.",
    "svc.who2": "No deal → you pay (US$60) and the report stays with you.",
    "svc.cta": "Post my car now",

    "auth.login.t": "Welcome back",
    "auth.login.d": "Log in to see your cars and the state of your sale.",
    "auth.reg.t": "Create your account",
    "auth.reg.d": "Under a minute. Pick the fast lane:",
    "auth.google": "Continue with Google",
    "auth.apple": "Continue with Apple",
    "auth.or": "or with your email",
    "auth.name": "Full name",
    "auth.email": "Email",
    "auth.phone": "Phone (WhatsApp)",
    "auth.pass": "Password",
    "auth.login.b": "Log in",
    "auth.reg.b": "Create account",
    "auth.login.alt": "No account yet?",
    "auth.login.alt2": "Sign up",
    "auth.reg.alt": "Already have an account?",
    "auth.reg.alt2": "Log in",
    "auth.terms": "By continuing you accept the Terms and the Privacy Policy.",

    "app.hola": "Hi",
    "app.sub": "Here's the state of your cars.",
    "app.publicar": "Post my car",
    "app.empty.t": "You haven't posted a car yet",
    "app.empty.d": "Post your first one: photos, details and your asking price. It takes under 5 minutes.",
    "app.precio": "Asking price",
    "app.oferta": "Company offer",
    "app.reporte": "Download inspection report",
    "app.reporte.na": "The report becomes available after the inspection",
    "app.debe": "Declared loan",
    "app.volver": "Back to my cars",
    "app.timeline": "Timeline",
    "app.demo": "Sample car so you can see the timeline. You can delete it.",
    "app.eliminar": "Delete",
    "app.cita": "Appointment: Jul 24, 9:00 a.m. · AutoCheck Garage, Vía España",

    "st.1": "Received",
    "st.2": "Under review",
    "st.3": "Document verification",
    "st.4": "Appointment set",
    "st.5": "Inspection done",
    "st.6": "Offer sent",
    "st.7": "Agreement signed",
    "st.8": "Transfer in progress",
    "st.9": "Payment released",
    "st.1d": "Your listing entered the system.",
    "st.2d": "Our team is studying your car.",
    "st.3d": "We check ownership, liens and fines.",
    "st.4d": "Date, time and garage confirmed for the inspection.",
    "st.5d": "Full diagnosis. The report is now available to you.",
    "st.6d": "We present our purchase offer.",
    "st.7d": "Confidential purchase agreement signed.",
    "st.8d": "Legal transfer underway. Any loan is settled first.",
    "st.9d": "Transfer complete, payment released. Sold!",

    "body.S": "Sedan",
    "body.H": "Hatchback",
    "body.U": "SUV / Crossover",
    "body.P": "Pickup",
    "body.C": "Coupe",
    "body.V": "Van",
    "wiz.body": "Body type",
    "wiz.color": "Color",
    "wiz.disp": "Is it available right away?",
    "wiz.disp.d": "Can you hand over the car now for inspection and sale, or do you still use it daily?",
    "wiz.disp.si": "Yes, available now",
    "wiz.disp.no": "Still using it daily",
    "wiz.val": "Estimated market range (reference)",
    "app.disp.si": "Available right away",
    "app.disp.no": "In daily use",
    "app.oferta.vig": "Offer valid for 7 days",
    "wiz.extras": "Additional car details (optional)",
    "wiz.extras.d": "Anything else we should know? Equipment, maintenance, paint details, single owner, etc.",
    "wiz.extras.ph": "E.g. new tires, premium sound, up-to-date service, small dent on the bumper…",
    "wiz.acc": "Has the car been in an accident?",
    "wiz.acc.si": "Yes",
    "wiz.acc.no": "No",
    "wiz.acc.desc": "Briefly tell us what happened",
    "wiz.acc.ph": "E.g. minor rear collision in 2023, repaired at an authorized shop…",
    "app.extras": "Additional details",
    "app.acc": "Declared accident",
    "app.acc.no": "No accidents declared",

    "wiz.title": "Post my car",
    "wiz.p1": "Photos & videos",
    "wiz.p2": "Car details",
    "wiz.p3": "Price & finances",
    "wiz.p4": "Legal declaration",
    "wiz.fotos.d": "Upload at least 3 photos: exterior, interior and dashboard. Videos optional.",
    "wiz.fotos.add": "Add photos",
    "wiz.video.add": "Add video (optional)",
    "wiz.marca": "Brand",
    "wiz.marca.ph": "Pick a brand",
    "wiz.modelo": "Model",
    "wiz.modelo.ph": "E.g. Corolla, Tucson, CR-V…",
    "wiz.anio": "Year",
    "wiz.km": "Mileage",
    "wiz.trans": "Transmission",
    "wiz.trans.a": "Automatic",
    "wiz.trans.m": "Manual",
    "wiz.fuel": "Fuel",
    "wiz.fuel.g": "Gasoline",
    "wiz.fuel.d": "Diesel",
    "wiz.fuel.h": "Hybrid",
    "wiz.fuel.e": "Electric",
    "wiz.precio": "How much do you want for your car?",
    "wiz.precio.d": "This is the price we'll negotiate with you. Be realistic: we weigh it against the market and the inspection.",
    "wiz.debe": "Do you owe the bank on this car?",
    "wiz.debe.no": "No",
    "wiz.debe.si": "Yes",
    "wiz.banco": "Bank",
    "wiz.banco.ph": "E.g. Banco General",
    "wiz.monto": "Outstanding amount (US$)",
    "wiz.leg1": "I declare I am the legal owner of the vehicle.",
    "wiz.leg2": "The bank loan information declared is truthful.",
    "wiz.leg3": "I accept the ownership investigation (title, tax clearance, liens, ATTT fines and DIJ verification).",
    "wiz.leg4": "I accept the inspection terms: US$60 at a designated garage; the company pays if it buys, I pay if there's no deal. The report stays with me.",
    "wiz.leg5": "I authorize the use of my personal and contact data solely to manage this sale, under Panama's Personal Data Protection Law 81 of 2019.",
    "wiz.atras": "Back",
    "wiz.sig": "Continue",
    "wiz.enviar": "Post car",
    "wiz.ok.t": "Car posted!",
    "wiz.ok.d": "It's now with our team. Follow the process on your timeline.",
    "wiz.ok.b": "View timeline",
    "wiz.err.req": "Fill in this field to continue.",
    "wiz.err.fotos": "Upload at least 3 photos.",
    "wiz.err.leg": "You must accept every declaration.",
    "wiz.fotos.n": "photos",
    "wiz.video.n": "video",
  }
};

/* ---------- Marcas del mercado panameño ---------- */
const VY_BRANDS = ["Toyota","Hyundai","Kia","Nissan","Honda","Suzuki","Mitsubishi","Chevrolet","Ford","Mazda","Volkswagen","BMW","Mercedes-Benz","Audi","Lexus","Subaru","Isuzu","Jeep","RAM","Dodge","Peugeot","Renault","Volvo","Land Rover","Porsche","MG","BYD","Chery","Geely","JAC","Changan","Great Wall","Haval","Kaiyi","Otro"];

/* ---------- Carrocerías y colores ---------- */
const VY_BODY = { S: "body.S", H: "body.H", U: "body.U", P: "body.P", C: "body.C", V: "body.V" };
const VY_COLORS = {
  negro:  "#16181D",
  gris:   "#9AA1AA",
  blanco: "#E9EBEE",
  azul:   "#2563EB",
  rojo:   "#C0272D",
  verde:  "#166534"
};
const VY_LIGHT_COLORS = ["blanco", "gris"];

/* Valuación preliminar demo (estilo Kavak/WeBuyAnyCar — referencial) */
function vyValuacion(year, km){
  const base = 32000 - (2026 - (+year || 2018)) * 1900 - (+km || 0) * 0.05;
  const b = Math.max(2500, base);
  const r100 = n => Math.round(n / 100) * 100;
  return { min: r100(b * 0.88), max: r100(b * 1.05) };
}

/* ---------- i18n ---------- */
function vyLang(){ return localStorage.getItem("vy_lang") || "es"; }
function vySetLang(l){ localStorage.setItem("vy_lang", l); vyApplyI18n(); }
function t(k){ return (VY_DICT[vyLang()] && VY_DICT[vyLang()][k]) || VY_DICT.es[k] || k; }
function vyApplyI18n(){
  document.documentElement.lang = vyLang();
  document.querySelectorAll("[data-i]").forEach(el => { el.textContent = t(el.dataset.i); });
  document.querySelectorAll("[data-i-ph]").forEach(el => { el.placeholder = t(el.dataset.iPh); });
  document.querySelectorAll("[data-setlang]").forEach(b => {
    b.classList.toggle("on", b.dataset.setlang === vyLang());
  });
  document.dispatchEvent(new CustomEvent("vy:lang"));
}

/* ---------- Registro de usuarios / clientes (demo, localStorage) ---------- */
/* Lista persistente de todas las cuentas creadas. Coordina el registro de
   clientes con los autos (cada auto guarda ownerId además del nombre). */
function vyUsers(){ try { return JSON.parse(localStorage.getItem("vy_users")) || []; } catch(e){ return []; } }
function vySaveUsers(list){ localStorage.setItem("vy_users", JSON.stringify(list)); }
function vyNewUserId(){ return "u" + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36); }
/* Crea o actualiza un cliente por correo (clave única). Devuelve el registro. */
function vyUpsertUser(u){
  const list = vyUsers();
  const email = (u.email || "").trim().toLowerCase();
  let rec = email && list.find(x => (x.email || "").toLowerCase() === email);
  if (rec){
    if (u.name)  rec.name  = u.name;
    if (u.phone) rec.phone = u.phone;
    if (u.provider) rec.provider = u.provider;
    if (u.photo != null) rec.photo = u.photo;
  } else {
    rec = { id: vyNewUserId(), name: u.name || "Cliente", email: u.email || "",
            phone: u.phone || "", provider: u.provider || "email", photo: u.photo || "",
            created: Date.now() };
    list.push(rec);
  }
  vySaveUsers(list);
  return rec;
}
function vyUserById(id){ return vyUsers().find(u => u.id === id) || null; }

/* Coordina cada auto con un registro de cliente: crea el cliente si falta y
   liga el auto por ownerId (evita el vínculo frágil por nombre). Idempotente. */
function vySyncOwners(){
  const cars = vyCars();
  if (!cars.length) return;
  let changed = false;
  cars.forEach(c => {
    if (!c.owner) return;
    if (c.ownerId && vyUserById(c.ownerId)) return;
    const email = (c.ownerEmail || "").toLowerCase();
    const users = vyUsers();
    let u = users.find(x =>
      (email && (x.email || "").toLowerCase() === email) ||
      (!email && x.name === c.owner));
    if (!u) u = vyUpsertUser({ name: c.owner, email: c.ownerEmail, phone: c.ownerPhone, provider: "cliente" });
    if (c.ownerId !== u.id){ c.ownerId = u.id; changed = true; }
  });
  if (changed) vySaveCars(cars);
}

/* ---------- Sesión demo ---------- */
function vyUser(){ try { return JSON.parse(localStorage.getItem("vy_user")); } catch(e){ return null; } }
function vyLogin(name, email, provider, phone){
  /* toda entrada/registro queda coordinada en la lista de clientes */
  const rec = vyUpsertUser({ name, email, phone, provider });
  localStorage.setItem("vy_user", JSON.stringify({
    id: rec.id, name: rec.name, email: rec.email, provider: rec.provider,
    phone: rec.phone || "+507 6123-4567", photo: rec.photo || ""
  }));
}
/* Actualiza el perfil del cliente en sesión y lo refleja en la lista + sus autos */
function vyUpdateCurrentUser(patch){
  const cur = vyUser(); if (!cur) return null;
  const merged = Object.assign({}, cur, patch);
  localStorage.setItem("vy_user", JSON.stringify(merged));
  const rec = vyUpsertUser(merged);
  /* propaga los datos de contacto a los autos del cliente */
  const cars = vyCars(); let changed = false;
  cars.forEach(c => {
    const mine = (cur.id && c.ownerId === cur.id) || (!c.ownerId && c.owner === cur.name);
    if (mine){
      c.ownerId = rec.id;
      c.owner = merged.name; c.ownerPhone = merged.phone; c.ownerEmail = merged.email;
      if (merged.photo) c.ownerPhoto = merged.photo;
      changed = true;
    }
  });
  if (changed) vySaveCars(cars);
  return merged;
}
function vyLogout(){ localStorage.removeItem("vy_user"); location.href = "index.html"; }
/* Redirige si no hay sesión y devuelve false para que el llamador detenga el render
   (evita que render() corra con vyUser() === null durante la redirección). */
function vyRequireAuth(){ if (!vyUser()){ location.href = "login.html"; return false; } return true; }

/* ---------- Autos demo ---------- */
function vyCars(){ try { return JSON.parse(localStorage.getItem("vy_cars")) || []; } catch(e){ return []; } }
function vySaveCars(cars){ localStorage.setItem("vy_cars", JSON.stringify(cars)); }
function vySeed(){
  if (localStorage.getItem("vy_seeded")) return;
  const cars = vyCars();
  cars.unshift({
    id: "demo-corolla", demo: true,
    brand: "Toyota", model: "Corolla SE", year: 2021, km: 45000,
    trans: "A", fuel: "G", price: 16500, offer: 15200,
    body: "S", color: "rojo", disp: true,
    debt: { has: true, bank: "Banco General", amount: 4300 },
    photos: 6, videos: 1, stage: 5, created: Date.now(),
    /* el auto de ejemplo pertenece a quien acaba de registrarse, para que
       cualquier cliente (no solo "Carlos") vea la línea de tiempo de muestra */
    owner: (vyUser() && vyUser().name) || "Carlos",
    ownerPhone: (vyUser() && vyUser().phone) || "+507 6123-4567",
    ownerEmail: (vyUser() && vyUser().email) || "carlos@gmail.com",
    cita: { fecha: "24 jul", hora: "9:00 a.m.", tipo: "revisado", taller: "Taller AutoCheck, Vía España" },
    checklist: { tit: true, paz: true, grav: false, attt: true, dij: false }
  });
  vySaveCars(cars);
  localStorage.setItem("vy_seeded", "1");
}

/* Autos de otros clientes (solo visibles en el panel admin) */
function vySeedAdmin(){
  if (localStorage.getItem("vy_seed_admin")) return;
  const cars = vyCars();
  const extra = [
    { id:"adm-sportage", owner:"María G.", brand:"Kia", model:"Sportage LX", year:2022, km:31000, trans:"A", fuel:"G", price:21500, stage:2, photos:8, videos:1, body:"U", color:"azul", disp:true, debt:{has:true, bank:"Banistmo", amount:9800} },
    { id:"adm-crv", owner:"José R.", brand:"Honda", model:"CR-V EX", year:2020, km:58000, trans:"A", fuel:"G", price:19800, offer:18500, stage:6, photos:7, videos:0, body:"U", color:"blanco", disp:true, debt:{has:false}, reporte:true,
      cita:{fecha:"21 jul", hora:"8:30 a.m.", tipo:"cita", taller:"Taller AutoCheck, Vía España"}, checklist:{tit:true,paz:true,grav:true,attt:true,dij:true} },
    { id:"adm-sentra", owner:"Ana T.", brand:"Nissan", model:"Sentra SV", year:2019, km:74000, trans:"A", fuel:"G", price:11200, stage:1, photos:5, videos:0, body:"S", color:"gris", disp:false, debt:{has:false} },
    { id:"adm-accent", owner:"Luis P.", brand:"Hyundai", model:"Accent GL", year:2018, km:96000, trans:"M", fuel:"G", price:8900, stage:3, photos:6, videos:0, body:"H", color:"negro", disp:false, debt:{has:false},
      checklist:{tit:true,paz:false,grav:false,attt:false,dij:false} },
    { id:"adm-hilux", owner:"Rebeca M.", brand:"Toyota", model:"Hilux SRV", year:2023, km:22000, trans:"A", fuel:"D", price:34500, stage:4, photos:9, videos:2, body:"P", color:"verde", disp:true, debt:{has:true, bank:"Banco General", amount:15200},
      cita:{fecha:"30 jul", hora:"2:00 p.m.", tipo:"reunion", taller:"MultiService Motors, Costa del Este"}, checklist:{tit:true,paz:true,grav:false,attt:false,dij:false} },
    { id:"adm-mazda3", owner:"Diego C.", brand:"Mazda", model:"Mazda3 Touring", year:2021, km:41000, trans:"A", fuel:"G", price:16900, offer:15800, stage:9, photos:6, videos:1, body:"H", color:"azul", disp:true, debt:{has:false}, reporte:true,
      cita:{fecha:"10 jul", hora:"9:00 a.m.", tipo:"revisado", taller:"Taller AutoCheck, Vía España"}, checklist:{tit:true,paz:true,grav:true,attt:true,dij:true} },
    { id:"adm-tucson2", owner:"Paola V.", brand:"Hyundai", model:"Tucson Limited", year:2022, km:28000, trans:"A", fuel:"H", price:24900, stage:5, photos:8, videos:1, body:"U", color:"negro", disp:true, debt:{has:false}, reporte:true,
      cita:{fecha:"17 jul", hora:"11:00 a.m.", tipo:"revisado", taller:"Taller La Estrella, David, Chiriquí"}, checklist:{tit:true,paz:true,grav:false,attt:true,dij:false} },
    { id:"adm-frontier", owner:"Iván S.", brand:"Nissan", model:"Frontier PRO-4X", year:2020, km:67000, trans:"M", fuel:"D", price:22800, stage:7, offer:21000, photos:7, videos:0, body:"P", color:"gris", disp:false, debt:{has:false}, reporte:true,
      cita:{fecha:"12 jul", hora:"10:00 a.m.", tipo:"reunion", taller:"MultiService Motors, Costa del Este"}, checklist:{tit:true,paz:true,grav:true,attt:true,dij:true} }
  ];
  extra.forEach(c => { c.created = Date.now(); cars.push(c); });
  vySaveCars(cars);
  localStorage.setItem("vy_seed_admin", "1");
  vyMigrate(); /* completa contactos y campos nuevos de los recién sembrados */
}

/* Showroom: autos ya comprados por la empresa (en reacondicionamiento o vendidos).
   Cada uno guarda inversión, tareas de mejora, informe del taller y, si se vendió, precio y ganancia. */
function vySeedShowroom(){
  if (localStorage.getItem("vy_seed_showroom")) return;
  const cars = vyCars();
  const T_AC = "Taller AutoCheck, Vía España", T_MM = "MultiService Motors, Costa del Este";
  const sr = [
    { id:"sr-corolla", owner:"Marta S.", ownerPhone:"+507 6011-7788", ownerEmail:"marta.s@gmail.com",
      brand:"Toyota", model:"Corolla LE", year:2019, km:63000, trans:"A", fuel:"G", body:"S", color:"blanco", disp:true,
      price:13200, offer:12500, invest:12500, sold:true, soldPrice:15200, soldDate:"28 jun", taller:T_MM,
      photos:7, videos:0, stage:9, debt:{has:false}, reporte:true, accident:false,
      mejoras:"Llantas al 60%. Detalle de tapicería. Un solo dueño, historial completo.",
      tasks:[{t:"Limpieza profunda de tapicería", cost:70, done:true},{t:"Alineación y balanceo", cost:45, done:true}] },
    { id:"sr-sportage", owner:"Óscar D.", ownerPhone:"+507 6233-9910", ownerEmail:"oscar.d@hotmail.com",
      brand:"Kia", model:"Sportage EX", year:2019, km:71000, trans:"A", fuel:"G", body:"U", color:"gris", disp:true,
      price:16800, offer:16000, invest:16000, sold:true, soldPrice:19400, soldDate:"12 jul", taller:T_AC,
      photos:8, videos:1, stage:9, debt:{has:false}, reporte:true, accident:true, accidentDesc:"Golpe leve en defensa delantera, reparado.",
      mejoras:"Defensa delantera repintada. Sensor de reversa a revisar.",
      tasks:[{t:"Repintado de defensa delantera", cost:160, done:true},{t:"Reparar sensor de reversa", cost:85, done:true}] }
  ];
  sr.forEach(c => { c.created = Date.now(); c.showroom = true; cars.push(c); });
  vySaveCars(cars);
  localStorage.setItem("vy_seed_showroom", "1");
  vyMigrate();
}

/* Migración: autos guardados antes de carrocería/color/disponibilidad/contacto */
function vyMigrate(){
  const cars = vyCars();
  if (!cars.length) return;
  const known = {
    "demo-corolla": { body:"S", color:"rojo", disp:true },
    "adm-sportage": { body:"U", color:"azul", disp:true },
    "adm-crv":      { body:"U", color:"blanco", disp:true },
    "adm-sentra":   { body:"S", color:"gris", disp:false },
    "adm-accent":   { body:"H", color:"negro", disp:false },
    "adm-hilux":    { body:"P", color:"verde", disp:true },
    "adm-mazda3":   { body:"H", color:"azul", disp:true },
    "adm-tucson2":  { body:"U", color:"negro", disp:true },
    "adm-frontier": { body:"P", color:"gris", disp:false }
  };
  const contacts = {
    "demo-corolla": ["+507 6123-4567", "carlos@gmail.com"],
    "adm-sportage": ["+507 6284-1190", "maria.g@gmail.com"],
    "adm-crv":      ["+507 6511-7723", "jose.r@hotmail.com"],
    "adm-sentra":   ["+507 6097-3348", "ana.t@gmail.com"],
    "adm-accent":   ["+507 6739-5512", "luis.p@yahoo.com"],
    "adm-hilux":    ["+507 6402-8861", "rebeca.m@gmail.com"],
    "adm-mazda3":   ["+507 6875-2204", "diego.c@gmail.com"],
    "adm-tucson2":  ["+507 6318-6647", "paola.v@icloud.com"],
    "adm-frontier": ["+507 6950-1132", "ivan.s@gmail.com"]
  };
  let changed = false;
  cars.forEach(c => {
    if (!c.body){
      const k = known[c.id] || { body:"S", color:"negro", disp:true };
      Object.assign(c, k);
      changed = true;
    }
    /* Nunca reasignar 'owner' de un auto que no lo tiene: hacerlo filtraría las
       publicaciones de un cliente a otro en el mismo navegador. Los autos sin
       dueño quedan solo visibles para la empresa (admin), nunca para clientes. */
    if (!c.ownerPhone){
      const ct = contacts[c.id];
      c.ownerPhone = ct ? ct[0] : "+507 6123-4567";
      c.ownerEmail = ct ? ct[1] : "cliente@correo.com";
      changed = true;
    }
    /* tipo de cita para datos sembrados antes de existir el campo */
    if (c.cita && !c.cita.tipo){
      const tipos = { "adm-crv":"cita", "adm-hilux":"reunion", "adm-frontier":"reunion" };
      c.cita.tipo = tipos[c.id] || "revisado";
      changed = true;
    }
    /* datos de accidente / detalles extra para el demo (campos nuevos) */
    if (c.accident === undefined){
      const accs = {
        "adm-accent": { accident: true, accidentDesc: "Choque leve trasero en 2022, reparado en taller autorizado. Sin daños estructurales.", extras: "Un solo dueño, mantenimientos al día en agencia." },
        "adm-frontier": { accident: true, accidentDesc: "Roce lateral menor, repintado la puerta del conductor.", extras: "" },
        "adm-sportage": { accident: false, accidentDesc: "", extras: "Llantas nuevas (2025), pantalla con CarPlay, vidrios polarizados." },
        "demo-corolla": { accident: false, accidentDesc: "", extras: "Servicios al día, un pequeño detalle de pintura en el paragolpes delantero." }
      };
      const a = accs[c.id] || { accident: false, accidentDesc: "", extras: "" };
      c.accident = a.accident; c.accidentDesc = a.accidentDesc; c.extras = a.extras;
      changed = true;
    }
    /* historial de contraofertas para autos que ya tenían una oferta registrada */
    if (c.offer && !c.contraofertas){
      const seedHist = {
        "adm-crv": [
          { monto: 17800, vendedor: c.owner || "Cliente", fecha: "18 jul, 10:20 a. m." },
          { monto: 18500, vendedor: c.owner || "Cliente", fecha: "20 jul, 03:45 p. m." }
        ]
      };
      c.contraofertas = seedHist[c.id] || [{ monto: c.offer, vendedor: c.owner || "Cliente", fecha: "18 jul, 09:00 a. m." }];
      changed = true;
    }
    /* mover autos ya confirmados del pipeline al showroom (con inversión/tareas/informe) */
    if (c.showroom === undefined && (c.id === "adm-mazda3" || c.id === "adm-frontier")){
      c.showroom = true;
      c.invest = c.offer || c.price;
      if (c.id === "adm-mazda3"){
        c.sold = true; c.soldPrice = 18900; c.soldDate = "5 jul";
        c.mejoras = "Rayón leve en puerta trasera. Pastillas de freno al 45%. A/C con recarga pendiente.";
        c.tasks = [{t:"Pulir y encerar carrocería", cost:90, done:true},{t:"Cambio de pastillas de freno", cost:180, done:true},{t:"Recarga de gas A/C", cost:60, done:true}];
      } else {
        c.sold = false;
        c.mejoras = "Neumáticos todo terreno al 50%. Revisar suspensión trasera. Estribos con óxido leve.";
        c.tasks = [{t:"Tratamiento anticorrosión estribos", cost:95, done:false},{t:"Revisión de suspensión", cost:130, done:false}];
      }
      changed = true;
    }
  });
  if (changed) vySaveCars(cars);
}
vyMigrate();

function vyUpdateCar(id, patch){
  const cars = vyCars();
  const i = cars.findIndex(c => c.id === id);
  if (i < 0) return null;
  cars[i] = Object.assign({}, cars[i], patch);
  vySaveCars(cars);
  return cars[i];
}

/* Recordatorios manuales del calendario (clave "y-m-d") */
function vyCalRem(){ try { return JSON.parse(localStorage.getItem("vy_cal_rem")) || {}; } catch(e){ return {}; } }
function vySaveCalRem(o){ localStorage.setItem("vy_cal_rem", JSON.stringify(o)); }
function vyAddCalRem(key, item){ const o = vyCalRem(); (o[key] = o[key] || []).push(item); vySaveCalRem(o); }
function vyDelCalRem(key, i){ const o = vyCalRem(); if (o[key]){ o[key].splice(i, 1); if (!o[key].length) delete o[key]; vySaveCalRem(o); } }

/* Talleres designados (demo) */
function vyTalleres(){
  try {
    return JSON.parse(localStorage.getItem("vy_talleres")) || null;
  } catch(e){ return null; }
}
function vySeedTalleres(){
  let t = vyTalleres();
  if (!t){
    t = [
      { id: "t1", nombre: "Taller AutoCheck", zona: "Vía España" },
      { id: "t2", nombre: "MultiService Motors", zona: "Costa del Este" },
      { id: "t3", nombre: "Taller La Estrella", zona: "David, Chiriquí" }
    ];
  }
  /* enriquecer con contacto/banner/logo si faltan (migración) */
  const extra = {
    t1: { phone: "+507 300-1122", contacto: "Ing. Rodrigo Him", email: "citas@autocheck.pa", banner: "#1E3A8A,#2563EB", logo: "AC", desde: "2019" },
    t2: { phone: "+507 302-4455", contacto: "Sr. Luis Batista", email: "recepcion@multiservice.pa", banner: "#0F766E,#14B8A6", logo: "MM", desde: "2016" },
    t3: { phone: "+507 774-8890", contacto: "Sra. Karla Núñez", email: "taller.laestrella@gmail.com", banner: "#7C2D12,#EA580C", logo: "LE", desde: "2012" }
  };
  let changed = false;
  t.forEach(x => {
    if (x.phone === undefined){
      Object.assign(x, extra[x.id] || { phone: "+507 000-0000", contacto: "", email: "", banner: "#1F2937,#4B5563", logo: (x.nombre || "T").slice(0,2).toUpperCase(), desde: "2024" });
      changed = true;
    }
  });
  localStorage.setItem("vy_talleres", JSON.stringify(t));
  return t;
}
function vySaveTalleres(t){ localStorage.setItem("vy_talleres", JSON.stringify(t)); }
function vyTaller(id){ return (vyTalleres() || []).find(t => t.id === id); }

/* ---------- Helpers UI ---------- */
const vyMoney = n => "$" + Number(n).toLocaleString("en-US");
const vyKm = n => Number(n).toLocaleString("en-US") + " km";
function vyIcon(id, cls){ return `<svg class="ic ${cls||""}" aria-hidden="true"><use href="#${id}"/></svg>`; }

/* Escapa texto de usuario antes de interpolarlo en innerHTML o atributos.
   Evita XSS/roturas cuando el modelo, banco, nombre, correo, etc. traen < > " ' & */
function esc(s){
  return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
/* Iniciales para el avatar del vendedor */
function vyInitials(name){
  return String(name || "C").trim().split(/\s+/).map(w => w[0] || "").join("").slice(0, 2).toUpperCase() || "C";
}

/* ---------- Siluetas de auto por carrocería (flat, vista lateral) ---------- */
const VY_BODY_PATHS = {
  S: { /* Sedán */
    body: "M50 196 C36 192 30 172 46 164 L92 148 C146 104 216 84 298 82 C384 80 454 98 502 134 L548 142 C590 148 610 158 614 172 C617 182 610 190 596 191 L544 192 A46 46 0 0 0 452 192 L216 192 A46 46 0 0 0 124 192 L64 194 Z",
    glass: "M152 142 C196 108 248 94 302 92 C358 90 412 104 450 128 L446 134 C396 138 220 142 152 142 Z",
    extra: '<path fill="BODYFILL" d="M296 92 h10 l-4 48 h-10 Z"/><rect x="250" y="150" width="22" height="4" rx="2" fill="#3A404A"/><rect x="380" y="150" width="22" height="4" rx="2" fill="#3A404A"/><path fill="BODYFILL" d="M452 122 q14 -6 16 4 l-2 6 h-14 Z"/>',
    front: 592, tail: 44
  },
  U: { /* SUV / Crossover */
    body: "M48 194 C34 190 30 166 46 158 L88 146 C112 96 172 74 292 72 C398 70 470 90 514 124 L556 136 C592 142 610 152 614 168 C617 178 610 188 596 190 L544 192 A46 46 0 0 0 452 192 L216 192 A46 46 0 0 0 124 192 L62 193 Z",
    glass: "M140 140 C170 100 222 84 296 82 C370 80 430 96 470 122 L464 130 C400 136 210 140 140 140 Z",
    extra: '<rect x="176" y="64" width="190" height="5" rx="2.5" fill="#0E1013"/><path fill="BODYFILL" d="M280 84 h9 l-3 52 h-9 Z"/><path fill="BODYFILL" d="M382 88 h9 l-2 46 h-9 Z"/><rect x="238" y="148" width="22" height="4" rx="2" fill="#3A404A"/><rect x="368" y="148" width="22" height="4" rx="2" fill="#3A404A"/><path fill="BODYFILL" d="M470 118 q14 -6 16 4 l-2 6 h-14 Z"/>',
    front: 592, tail: 42
  },
  P: { /* Pickup */
    body: "M50 192 L50 142 C50 136 56 132 62 132 L210 132 L218 100 C224 88 240 82 260 80 L340 78 C400 78 458 96 502 128 L548 138 C590 145 610 155 614 170 C617 180 610 189 596 190 L544 192 A46 46 0 0 0 452 192 L216 192 A46 46 0 0 0 124 192 L64 193 Z",
    glass: "M232 128 C238 106 250 96 268 92 L336 90 C380 90 420 102 452 124 L446 130 C400 134 280 132 232 128 Z",
    extra: '<rect x="56" y="132" width="152" height="7" rx="3" fill="#0E1013" opacity=".45"/><path fill="BODYFILL" d="M330 90 h9 l-2 40 h-9 Z"/><rect x="300" y="148" width="22" height="4" rx="2" fill="#3A404A"/><path fill="BODYFILL" d="M452 118 q14 -6 16 4 l-2 6 h-14 Z"/>',
    front: 592, tail: 44
  },
  H: { /* Hatchback */
    body: "M64 192 C48 188 44 162 62 152 L96 144 C122 100 172 80 262 78 C352 76 432 96 482 128 L530 138 C574 145 596 155 600 170 C603 180 596 189 582 190 L536 192 A46 46 0 0 0 444 192 L216 192 A46 46 0 0 0 124 192 L74 193 Z",
    glass: "M132 140 C162 102 212 86 266 84 C332 82 398 100 438 124 L432 132 C380 136 200 140 132 140 Z",
    extra: '<path fill="BODYFILL" d="M262 86 h10 l-4 50 h-10 Z"/><rect x="230" y="148" width="22" height="4" rx="2" fill="#3A404A"/><rect x="350" y="148" width="22" height="4" rx="2" fill="#3A404A"/><path fill="BODYFILL" d="M440 118 q14 -6 16 4 l-2 6 h-14 Z"/>',
    front: 578, tail: 58
  },
  C: { /* Coupé — sedán bajo */
    body: "M56 194 C42 190 36 172 52 164 L100 150 C158 106 230 88 306 88 C390 88 456 104 500 136 L546 144 C588 150 608 160 612 172 C615 182 608 190 594 191 L544 192 A46 46 0 0 0 452 192 L216 192 A46 46 0 0 0 124 192 L70 194 Z",
    glass: "M168 146 C212 114 262 100 310 98 C360 96 408 110 446 132 L440 138 C396 142 230 146 168 146 Z",
    extra: '<path fill="BODYFILL" d="M312 98 h10 l-4 44 h-10 Z"/><rect x="270" y="152" width="22" height="4" rx="2" fill="#3A404A"/><path fill="BODYFILL" d="M448 128 q14 -6 16 4 l-2 6 h-14 Z"/>',
    front: 590, tail: 50
  },
  V: { /* Van */
    body: "M46 192 C32 188 30 160 48 152 L80 144 C90 92 130 72 260 70 C390 68 470 86 516 120 L558 134 C592 140 610 152 614 168 C617 178 610 188 596 190 L544 192 A46 46 0 0 0 452 192 L216 192 A46 46 0 0 0 124 192 L60 193 Z",
    glass: "M120 138 C136 96 180 80 280 78 C370 76 440 94 478 120 L472 128 C400 134 190 138 120 138 Z",
    extra: '<path fill="BODYFILL" d="M240 80 h9 l-2 54 h-9 Z"/><path fill="BODYFILL" d="M360 82 h9 l-2 50 h-9 Z"/><rect x="300" y="148" width="24" height="4" rx="2" fill="#3A404A"/><path fill="BODYFILL" d="M482 116 q14 -6 16 4 l-2 6 h-14 Z"/>',
    front: 592, tail: 40
  }
};

function vyCarSvg(colorKey, bodyKey){
  const hex = VY_COLORS[colorKey] || VY_COLORS.negro;
  const p = VY_BODY_PATHS[bodyKey] || VY_BODY_PATHS.S;
  const stroke = VY_LIGHT_COLORS.includes(colorKey)
    ? 'stroke="#B9BFC7" stroke-width="2"' : "";
  const extra = p.extra.replaceAll("BODYFILL", hex);
  return `
<svg class="car" viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Auto">
  <ellipse cx="322" cy="234" rx="270" ry="12" fill="rgba(22,24,29,.08)"/>
  <path fill="${hex}" ${stroke} d="${p.body}"/>
  <path fill="#262B33" d="${p.glass}"/>
  <path fill="#FFFFFF" opacity=".14" d="M330 94 l44 4 -70 44 h-22 Z"/>
  ${extra}
  <rect x="140" y="178" width="330" height="5" rx="2.5" fill="#005CFF"/>
  <rect x="${p.front}" y="158" width="16" height="5" rx="2.5" fill="#6FA3FF"/>
  <rect x="${p.tail}" y="155" width="11" height="6" rx="3" fill="#FF6B6B"/>
  <g>
    <circle cx="170" cy="192" r="36" fill="#0E1013"/>
    <circle cx="170" cy="192" r="15" fill="#3A404A"/>
    <circle cx="170" cy="192" r="9" fill="none" stroke="#565D68" stroke-width="3" stroke-dasharray="4 6"/>
    <circle cx="170" cy="192" r="4.5" fill="#005CFF"/>
  </g>
  <g>
    <circle cx="498" cy="192" r="36" fill="#0E1013"/>
    <circle cx="498" cy="192" r="15" fill="#3A404A"/>
    <circle cx="498" cy="192" r="9" fill="none" stroke="#565D68" stroke-width="3" stroke-dasharray="4 6"/>
    <circle cx="498" cy="192" r="4.5" fill="#005CFF"/>
  </g>
</svg>`;
}

/* Compat: silueta por defecto (hero de la landing) */
const VY_CAR_SVG = vyCarSvg("negro", "S");
const vyCarOf = c => vyCarSvg(c.color || "negro", c.body || "S");

/* Imagen real del auto por marca/modelo, fondo transparente, tamaño estándar (IMAGIN.studio).
   En producción se prioriza la foto que sube el vendedor (c.photoUrl). */
const VY_ANGLES = ["23", "29", "01", "05", "09", "13", "17", "21"]; /* distintas vistas 3D */
function vyCarPhotoUrlAngle(c, angle, w){
  const make = encodeURIComponent(String(c.brand || "").toLowerCase());
  const model = encodeURIComponent(String(c.model || "").trim().split(/\s+/)[0].toLowerCase());
  if (!make || !model) return "";
  return `https://cdn.imagin.studio/getImage?customer=hrjavascript-mastery&make=${make}&modelFamily=${model}&zoomType=fullscreen&angle=${angle}&width=${w || 640}`;
}
function vyCarPhotoUrl(c){
  if (c.photoUrl) return c.photoUrl;
  return vyCarPhotoUrlAngle(c, "23", 640);
}

/* Preview del auto: imagen real con la silueta de color como respaldo, + botón de galería con contador */
function vyCarMedia(c){
  const url = vyCarPhotoUrl(c);
  const nf = c.photos || 0, nv = c.videos || 0;
  const badge = `<span class="media-expand" data-gallery="${c.id}" title="Ver galería">
    <svg class="ic"><use href="#i-expand"/></svg>${nf} foto${nf === 1 ? "" : "s"}${nv ? `<span class="me-v"><svg class="ic"><use href="#i-play"/></svg>${nv}</span>` : ""}</span>`;
  const img = url
    ? `<img class="carimg" src="${esc(url)}" alt="${esc(c.brand)} ${esc(c.model)}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='grid';">` +
      `<span class="carimg-fb" style="display:none">${vyCarOf(c)}</span>`
    : vyCarOf(c);
  return img + badge;
}

/* Miniatura del auto (foto real, sin badge de galería) — para filas compactas */
function vyCarThumb(c){
  const url = vyCarPhotoUrl(c);
  return url
    ? `<img class="carimg" src="${esc(url)}" alt="${esc(c.brand)} ${esc(c.model)}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='grid';">` +
      `<span class="carimg-fb" style="display:none">${vyCarOf(c)}</span>`
    : vyCarOf(c);
}

/* Galería emergente: distintos ángulos del auto + videos, pantalla completa, miniaturas y contador */
function vyGalleryMedia(c){
  const media = [];
  const nf = Math.min(Math.max(c.photos || 1, 3), VY_ANGLES.length);
  for (let i = 0; i < nf; i++) media.push({ type: "photo", angle: VY_ANGLES[i] });
  const nv = c.videos || 0;
  for (let i = 0; i < nv; i++) media.push({ type: "video", n: i + 1 });
  return media;
}
/* Descarga la imagen actual: fetch→blob→enlace; si el CDN bloquea CORS, abre en pestaña nueva */
async function vyDownloadGalleryImg(c, angle, i){
  const url = vyCarPhotoUrlAngle(c, angle, 1600);
  const base = `${c.brand}-${c.model}-${i + 1}`.trim().replace(/\s+/g, "-").toLowerCase();
  try {
    const r = await fetch(url, { mode: "cors" });
    if (!r.ok) throw new Error("http");
    const b = await r.blob();
    const ext = (b.type.split("/")[1] || "jpg").replace("jpeg", "jpg");
    const objurl = URL.createObjectURL(b);
    const a = document.createElement("a");
    a.href = objurl; a.download = `${base}.${ext}`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(objurl), 4000);
  } catch (e) {
    /* si el CDN bloquea CORS: abrir en pestaña nueva con un ancla (menos propenso
       al bloqueo de pop-ups que window.open tras un await) */
    const a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
  }
}

function vyOpenGallery(c){
  if (!c) return;
  const media = vyGalleryMedia(c);
  if (!media.length) return;
  const nf = media.filter(m => m.type === "photo").length;
  const nv = media.filter(m => m.type === "video").length;
  let idx = 0;
  const ov = document.createElement("div");
  ov.className = "gal-overlay";
  document.body.appendChild(ov);
  document.body.style.overflow = "hidden";

  const stage = m => m.type === "video"
    ? `<div class="gal-video"><span class="gal-play"><svg class="ic"><use href="#i-play"/></svg></span>
        <p>Video ${m.n} del vendedor</p><small>Recorrido y motor · se sube en la publicación</small></div>`
    : `<img class="gal-img" src="${vyCarPhotoUrlAngle(c, m.angle, 1200)}" alt="${esc(c.brand)} ${esc(c.model)}">`;

  function render(){
    const m = media[idx];
    const isPhoto = m.type === "photo";
    ov.innerHTML = `
      <div class="gal-modal" role="dialog" aria-modal="true">
        <div class="gal-top">
          <div class="gal-title"><b>${esc(c.brand)} ${esc(c.model)}</b><span>· ${c.year}</span></div>
          <span class="gal-count"><svg class="ic"><use href="#i-camera"/></svg>${nf} foto${nf === 1 ? "" : "s"}${nv ? ` · <svg class="ic"><use href="#i-play"/></svg>${nv} video${nv === 1 ? "" : "s"}` : ""}</span>
          ${isPhoto ? `<button class="gal-dl" data-dl title="Descargar imagen"><svg class="ic"><use href="#i-download"/></svg></button>` : ""}
          <button class="gal-close" data-close aria-label="Cerrar"><svg class="ic"><use href="#i-x"/></svg></button>
        </div>
        <div class="gal-stage">
          <button class="gal-arrow left" data-prev aria-label="Anterior"><svg class="ic"><use href="#i-arrow"/></svg></button>
          ${stage(m)}
          <button class="gal-arrow right" data-next aria-label="Siguiente"><svg class="ic"><use href="#i-arrow"/></svg></button>
          <span class="gal-index">${idx + 1} / ${media.length}</span>
        </div>
        <div class="gal-thumbs">
          ${media.map((mm, i) => `<button class="gal-thumb ${i === idx ? "on" : ""}" data-i="${i}">
            ${mm.type === "video"
              ? `<span class="gal-thumb-v"><svg class="ic"><use href="#i-play"/></svg></span>`
              : `<img src="${vyCarPhotoUrlAngle(c, mm.angle, 220)}" alt="">`}</button>`).join("")}
        </div>
      </div>`;
    ov.querySelector("[data-close]").onclick = close;
    ov.querySelector("[data-prev]").onclick = () => go(-1);
    ov.querySelector("[data-next]").onclick = () => go(1);
    const dl = ov.querySelector("[data-dl]");
    if (dl) dl.onclick = () => vyDownloadGalleryImg(c, m.angle, idx);
    ov.querySelectorAll("[data-i]").forEach(b => b.onclick = () => { idx = +b.dataset.i; render(); });
  }
  function go(d){ idx = (idx + d + media.length) % media.length; render(); }
  function close(){ ov.remove(); document.body.style.overflow = ""; document.removeEventListener("keydown", key); }
  function key(e){ if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") go(-1); else if (e.key === "ArrowRight") go(1); }
  ov.addEventListener("click", e => { if (e.target === ov) close(); });
  document.addEventListener("keydown", key);
  render();
  requestAnimationFrame(() => ov.classList.add("open"));
}
/* Delegación global: cualquier [data-gallery] abre la galería sin propagar el clic */
document.addEventListener("click", e => {
  const g = e.target.closest && e.target.closest("[data-gallery]");
  if (g){ e.preventDefault(); e.stopPropagation(); vyOpenGallery(vyCars().find(x => x.id === g.dataset.gallery)); }
}, true);

function vyReveal(){
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".rev").forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", VY_SPRITE);
  document.querySelectorAll("[data-setlang]").forEach(b =>
    b.addEventListener("click", () => vySetLang(b.dataset.setlang)));
  vyApplyI18n();
  vyReveal();
});
