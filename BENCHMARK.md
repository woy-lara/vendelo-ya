# Benchmark — Servicios de compra directa de autos

Investigación de referentes para alimentar Véndelo Ya (jul 2026).

## Referentes y qué hacen

### Kavak (México / LatAm)
- Cotización preliminar **online en segundos** (año, modelo, versión, km).
- Inspección de **240 puntos** en sede, con cita agendada por el cliente.
- Tras la inspección: **3 ofertas** (consignación / pago inmediato / parte de pago).
- Pago por transferencia 30–60 min después de firmar el contrato.

### WeBuyAnyCar (UK/US)
- Valuación online en **menos de 2 minutos**; "7 Day Offer" (oferta con vigencia).
- Cita en sucursal; el gerente inspecciona y **ajusta la oferta** según daños no declarados.
- Pago inmediato (cheque/ACH/transferencia; opción de 15 min con cargo).

### Carvana / CarMax (US)
- Oferta instantánea con placa o VIN + preguntas de condición.
- **Recogida a domicilio el mismo día** (Carvana) / tasación en tienda de 30–45 min y **pago el mismo día** (CarMax).
- Oferta de CarMax **válida por 7 días**.
- Si hay préstamo: **pagan primero al banco** y entregan la diferencia al cliente.

### OLX Autos (LatAm)
- Inspección **virtual (15 min)** o presencial (60 min) en centros ubicados en lugares seguros (malls).
- Pago el mismo día por transferencia, incluso fines de semana.

## Qué adoptamos en Véndelo Ya

| Idea del mercado | Implementación |
|---|---|
| Valuación instantánea (Kavak/WBAC) | Rango de mercado estimado (referencial) en el paso de precio del wizard |
| Oferta con vigencia (CarMax/WBAC) | "Oferta válida por 7 días" en el detalle del cliente |
| Disponibilidad inmediata (Carvana/CarMax) | Campo "¿Disponible de inmediato?" al publicar + filtro "Solo disponibles ahora" en el admin |
| Se salda el banco primero (Carvana/CarMax) | Ya lo teníamos: préstamo declarado se salda en el traspaso |
| Inspección con cita en sede designada (todos) | Ya lo teníamos: revisado US$60 en taller designado |
| Ajuste de oferta tras inspección (WBAC) | El admin registra la oferta después del reporte del taller |

## Diferencias deliberadas de Véndelo Ya
- El **pago se libera al completarse el traspaso legal** (no "en 15 minutos"): más lento pero más seguro para ambas partes en el contexto panameño.
- El **reporte del revisado siempre queda con el cliente**, venda o no — ninguno de los referentes lo ofrece como promesa central.
- Sin catálogo público: un solo comprador (la empresa), publicaciones privadas.

## Datos personales — Ley 81 de 2019 (Panamá)

La retención y uso de los datos del vendedor (nombre, teléfono, correo) es legal en Panamá
**solo bajo las reglas de la Ley 81 de 2019** (reglamentada por el Decreto Ejecutivo 285 de 2021,
autoridad: **ANTAI**). Lo esencial para Véndelo Ya:

- **Consentimiento previo e informado**: el titular debe autorizar el tratamiento de sus datos
  y conocer el fin. → Implementado: declaración n.º 5 del wizard de publicación.
- **Finalidad limitada**: los datos solo pueden usarse para el fin autorizado (gestionar la
  compraventa), no para marketing sin nuevo consentimiento. → Aviso en la ficha del vendedor
  del panel admin: "uso exclusivo para gestionar esta compraventa".
- **Seguridad y confidencialidad**: protocolos y procesos de protección; los datos de contacto
  solo visibles para la empresa (nunca públicos — coincide con nuestro modelo sin catálogo público).
- **Derechos ARCO** (acceso, rectificación, cancelación, oposición): el cliente puede pedir
  corrección o eliminación de sus datos → prever en backend real.
- **Sanciones**: B/. 1,000 – 10,000 según gravedad y reincidencia (ANTAI).
- Pendiente producción: política de privacidad formal, registro de consentimientos con fecha,
  y plazo de retención definido (p. ej., eliminar datos X meses después de cerrar el caso).

## Fuentes
- https://www.kavak.com/mx/vender-mi-auto · https://www.emol.com/noticias/Tendencias/2024/03/19/1125263/kavak-compra-venta-autos-seguridad.html
- https://www.webuyanycar.com/how-it-works/ · https://www.webuyanycarusa.com/faq/answer/1/how-does-it-all-work
- https://www.carvana.com/sell-my-car · https://www.carmax.com/sell-my-car
- https://www.thevantagegroupauto.com/blog/how-to-sell-your-car-to-carmax
- https://www.autos.olx.com.pe/como-compramos-tu-carro/ · https://blog.olxautos.com.mx/que-es-olx-autos-y-como-funciona/
