# Véndelo Ya — Demo

Plataforma donde un cliente publica su auto y **la empresa se lo compra**.
Operación: **Panamá**. Bilingüe **ES / EN**. Sin catálogo público: cada auto lo ven
solo su dueño y la empresa.

---

## Enlaces de la demo

| Zona | Enlace | Para qué es |
|---|---|---|
| **Página web** | [Ver landing](https://woy-lara.github.io/vendelo-ya/) | La web pública: propuesta de valor, proceso, revisado, respaldo legal y preguntas. |
| **Panel de la empresa** | [Ver admin](https://woy-lara.github.io/vendelo-ya/admin.html) | Gestión interna: solicitudes, expedientes, citas, talleres, showroom y usuarios. |
| **Zona del cliente** | [Crear cuenta](https://woy-lara.github.io/vendelo-ya/registro.html) | Publicar un auto y seguir su línea de tiempo en vivo. |

> La zona del cliente pide crear una cuenta primero (es instantáneo, sin verificación).
> Una vez dentro, la ruta directa es [app.html](https://woy-lara.github.io/vendelo-ya/app.html).

---

## Cómo probarlo de punta a punta

1. Entra a **Crear cuenta**, regístrate (Google/Apple simulados o correo).
2. Publica un auto con el asistente de 4 pasos (fotos, datos, precio, declaración legal).
3. Abre el **Panel de la empresa** en otra pestaña → tu auto aparece en *Solicitudes*.
4. Entra al expediente y avanza el proceso: checklist legal, agendar cita, registrar
   revisado, enviar contraoferta, subir documentos escaneados.
5. Vuelve a la pestaña del cliente: **la línea de tiempo se actualiza al instante.**

---

## Cómo funciona el proceso

```
Publicar auto → Revisión de la empresa → Cita en taller designado
→ Revisado (US$60) → El cliente SIEMPRE recibe el reporte
→ Contraoferta → Acuerdo confidencial → Traspaso legal → Pago liberado
```

- El **revisado cuesta US$60 fijos**: lo cubre la empresa si compra; lo paga el
  cliente si no hay acuerdo — y en ambos casos el reporte queda para el cliente.
- El **pago se libera solo al completarse el traspaso legal**.
- Verificación Panamá: titularidad, paz y salvo municipal, gravamen bancario,
  multas ATTT y reporte de robo (DIJ).

---

## Importante para la prueba

- **Es una demo sin servidor.** Todo se guarda en el `localStorage` del navegador,
  así que los datos viven solo en ese equipo y ese navegador. Si abres los enlaces
  en otro dispositivo, empiezas de cero.
- **No hay autenticación real.** El panel de la empresa es de acceso abierto en esta
  demo, y la contraseña del registro no se valida. En producción esto lleva login
  real con roles.
- **Para borrar todo y empezar limpio:** abre la consola del navegador y ejecuta
  `localStorage.clear()`, luego recarga.
- Las fotos de los autos vienen de un servicio externo de demostración
  (IMAGIN.studio con llave pública de pruebas, por eso la marca de agua). En
  producción se muestran las fotos reales que sube el vendedor.

---

## Correrlo en local

```bash
python3 serve.py     # http://localhost:4174
```

## Documentos del proyecto

- `SITEMAP.md` — estructura de las tres zonas (pública, cliente, empresa)
- `DESIGN.md` — guía visual (blanco + negro mate `#16181D` + azul `#005CFF`)
- `BENCHMARK.md` — investigación de competencia y decisiones de producto

---

Desarrollado por **WOY Projects**
