# Guía de Diseño — Véndelo Ya

## Marca

- **Nombre:** Véndelo Ya (`vendelo-ya`)
- **Tono:** directo, confiable, rápido. "Publica tu auto, nosotros hacemos el resto."
- **Idiomas:** ES / EN (selector visible en el header).

## Paleta

| Uso | Color |
|---|---|
| Fondo principal | Blanco `#FFFFFF` (con gris muy claro `#F5F6F7` para paneles/fondos de sección) |
| Texto y elementos estructurales | Negro mate `#1A1A1A` (no negro puro) |
| Acento — botones especiales, links, estados activos, timeline | Azul eléctrico `#005CFF` |
| Apoyo | Grises neutros `#6B7280` (texto secundario), bordes `#E5E7EB` |
| Estados | Éxito `#16A34A` · Alerta `#F59E0B` · Error `#DC2626` |

> Nota: el cliente lo llamó "verde #005cff" pero ese hex es azul. Confirmado usar
> #005CFF como acento salvo que se entregue otro código.

## Referencias visuales (adjuntas por el cliente)

1. **Dashboard tipo "Auto Ultimate"** (rental): sidebar oscura/clara minimal con
   iconos, tarjetas blancas con foto del auto recortada (fondo transparente),
   filtros a la izquierda, mucho aire.
2. **Marketplace tipo listado**: tarjetas con bordes redondeados grandes,
   chips de especificaciones con icono (combustible, transmisión, asientos),
   precio destacado, badge de estado ("New").

## Sistema de componentes

### Tarjeta de auto (la pieza central)
- Foto del auto grande arriba (borde redondeado ~16px).
- Nombre: **Marca + Modelo + Año** en bold.
- Fila de **chips de especificaciones con icono**:
  ⚙️ Automático/Manual · 🛣️ Kilometraje · 📅 Año · ⛽ Combustible
- Precio deseado destacado (grande, negro mate).
- Badge de estado del proceso (color según etapa: azul #005CFF en curso,
  verde éxito cerrado, gris sin acuerdo).
- En el área cliente la tarjeta lleva a su línea de tiempo.

### Otros componentes
- **Botones primarios:** fondo #005CFF, texto blanco, redondeados (pill o ~12px).
- **Botones secundarios:** borde gris, fondo blanco, texto negro mate.
- **Timeline vertical** (detalle del auto): puntos conectados, etapa activa en
  #005CFF con pulso, completadas en negro mate con check, futuras en gris.
- **Wizard de publicación:** barra de progreso superior en #005CFF, un paso por
  pantalla, botón grande "Continuar".
- **Inputs:** grandes, borde #E5E7EB, focus ring #005CFF.
- **Login social:** botones "Continuar con Google" / "Continuar con Apple"
  a lo ancho, estilo oficial de cada marca.

### Tipografía (propuesta)
- Titulares: **Inter / General Sans** semibold-bold.
- Cuerpo: Inter regular. Números de precio en tabular.

## Reglas de producto que afectan el diseño

1. **No hay catálogo público.** Los autos en venta solo los ve la empresa en el
   panel admin. El cliente únicamente ve SUS autos publicados.
2. **Área del cliente = simple.** Dos acciones dominan: "Publicar mi auto"
   (botón #005CFF siempre visible) y la lista de sus autos con estado.
3. **Landing sin listados**: vende el servicio (proceso, confianza, legal),
   no muestra inventario.
4. Los iconos de especificaciones aparecen en: tarjetas del cliente, expediente
   del admin y resumen de confirmación del wizard.

## Layouts

- **Landing / Servicio:** header blanco, hero con auto sobre fondo limpio,
  secciones alternando blanco y #F5F6F7, CTA azul repetido.
- **App cliente:** header simple (logo + idioma + perfil), contenido centrado,
  sin sidebar — máximo 2 niveles de navegación.
- **Admin:** sidebar izquierda estilo referencia 1 (iconos + labels), tabla/grid
  de tarjetas de autos con filtros arriba (marca, estado, fecha).
