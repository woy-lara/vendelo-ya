# Site Map — Véndelo Ya (Panamá)

> Web bilingüe (Español / Inglés) con selector de idioma persistente.
> Rutas: `/es/...` y `/en/...` (mismo árbol en ambos idiomas).
> País de operación: **Panamá**. Costo del revisado (avalúo): **US$60 fijo**,
> realizado en taller especificado por la empresa.
> **Regla clave:** NO hay catálogo público de autos. Los autos publicados solo
> los ve la empresa (admin). El cliente solo ve sus propios autos.
> Diseño: ver `DESIGN.md` (blanco + negro mate + acento #005CFF).

---

## 1. Zona pública (sin sesión)

```
/
├── Inicio (Landing)
│   ├── Hero: propuesta de valor ("Vende tu auto seguro y sin complicaciones")
│   ├── Cómo funciona (resumen en 4 pasos + CTA "Vende tu auto")
│   ├── Beneficios (avalúo profesional, pago garantizado, respaldo legal)
│   ├── Aviso destacado: verificación legal de propiedad en todo trámite
│   └── CTA → Registro
│
├── /servicio — El Servicio (página informativa completa)
│   ├── Paso 1: Regístrate y publica tu auto (fotos + formulario)
│   ├── Paso 2: Te contactamos y agendamos cita de revisión
│   ├── Paso 3: Revisión / avalúo del vehículo (US$60, en taller designado)
│   │   ├── Si la empresa compra → la empresa cubre los US$60 del revisado
│   │   ├── Si no hay acuerdo → el cliente paga los US$60 del revisado
│   │   └── En ambos casos el cliente RECIBE el reporte del revisado
│   │       (le sirve para saber qué reparar aunque no venda)
│   ├── Paso 4: Acuerdo confidencial de compraventa
│   ├── Paso 5: Trámite legal de traspaso → liberación del pago
│   └── Sección legal destacada:
│       ├── Verificación de propiedad del vehículo (titularidad)
│       ├── Revisión de gravámenes, multas y reporte de robo
│       └── El pago se realiza SOLO al completarse el traspaso legal
│
├── /faq — Preguntas frecuentes
├── /contacto — Contacto (formulario + teléfono/WhatsApp + dirección)
│
├── Legal (footer)
│   ├── /terminos — Términos y condiciones
│   ├── /privacidad — Política de privacidad (datos personales y del vehículo)
│   └── /aviso-legal — Aviso legal (proceso de verificación de propiedad,
│       responsabilidad del vendedor sobre la información declarada)
│
└── Autenticación (rápida, mínimos pasos)
    ├── /registro — Crear cuenta
    │   ├── Continuar con Google (1 clic)
    │   ├── Continuar con Apple (1 clic)
    │   └── Email/teléfono + contraseña (alternativa)
    ├── /login — Iniciar sesión (Google / Apple / email)
    └── /recuperar — Recuperar contraseña
```

## 2. Zona privada — Cliente (con sesión)

```
/app
├── /app/dashboard — Mi panel
│   ├── Resumen de mis autos publicados y su estado
│   └── Próxima cita agendada (si existe)
│
├── /app/publicar — Publicar mi auto (wizard)
│   ├── Paso 1: Fotos y videos del auto
│   │   ├── Fotos (mín. exterior, interior, tablero)
│   │   └── Videos opcionales (recorrido, motor encendido)
│   ├── Paso 2: Datos del vehículo
│   │   ├── Marca: catálogo de todas las marcas del mercado panameño
│   │   │   (Toyota, Hyundai, Kia, Nissan, Honda, Suzuki, Mitsubishi,
│   │   │    Chevrolet, Ford, Mazda, VW, BMW, Mercedes, Audi, etc.)
│   │   ├── Modelo: campo de texto libre (con sugerencias por marca)
│   │   └── Año, kilometraje, transmisión, combustible, color,
│   │       nº de dueños, descripción
│   ├── Paso 3: Precio y situación financiera
│   │   ├── PRECIO DESEADO de venta (campo destacado, obligatorio)
│   │   └── ¿Le debe al banco? Sí/No
│   │       └── Si sí: banco y monto pendiente del préstamo
│   ├── Paso 4: Declaración legal
│   │   ├── "Declaro ser el propietario legal del vehículo"
│   │   ├── Declaración de deuda/gravamen bancario veraz
│   │   ├── Aceptación de la investigación de propiedad
│   │   └── Aceptación de términos del revisado (US$60, quién paga)
│   └── Confirmación → estado "Recibido" → redirige a la línea de tiempo
│
├── /app/mis-autos — Mis publicaciones (solo MIS autos, nunca los de otros)
│   ├── Tarjetas con: foto, marca+modelo+año, precio deseado,
│   │   chips con icono (transmisión ⚙️, kilometraje 🛣️, año 📅,
│   │   combustible ⛽) y badge del estado actual
│   └── /app/mis-autos/:id — LÍNEA DE TIEMPO en tiempo real
│       ├── Timeline visual del proceso, se actualiza en vivo:
│       │   1. Recibido ✓
│       │   2. En revisión (la empresa está estudiando tu auto)
│       │   3. Verificación de documentos y propiedad
│       │   4. Cita agendada (fecha, hora, taller designado)
│       │   5. Revisado realizado (US$60) → reporte disponible
│       │   6. Oferta de la empresa / Sin acuerdo
│       │   7. Acuerdo firmado (confidencial)
│       │   8. Trámite de traspaso legal
│       │   9. Pago liberado → Cerrado
│       ├── Reporte del revisado descargable (PDF) — el cliente lo
│       │   conserva siempre, haya venta o no
│       └── Precio deseado visible + oferta de la empresa cuando exista
│
├── /app/citas — Mis citas (fecha, lugar, notificación previa del avalúo)
├── /app/notificaciones — Notificaciones (email + in-app)
└── /app/perfil — Mi perfil (datos personales, idioma, cambiar contraseña)
```

## 3. Panel de administración — Empresa

```
/admin
├── /admin/dashboard — Resumen (autos nuevos, citas del día, tratos activos)
├── /admin/solicitudes — Autos publicados (cola de revisión)
│   └── /admin/solicitudes/:id — Expediente del auto
│       ├── Fotos, videos y datos del formulario
│       ├── Precio deseado del cliente + deuda bancaria declarada
│       ├── Checklist de verificación legal (Panamá)
│       │   ├── Titularidad — Registro Único Vehicular / municipio
│       │   ├── Paz y salvo municipal (placa e impuestos)
│       │   ├── Gravamen bancario (prenda del préstamo declarado)
│       │   ├── Multas pendientes (ATTT)
│       │   └── Reporte de robo (verificación DIJ)
│       ├── Actualizar etapa de la LÍNEA DE TIEMPO del cliente
│       │   (cada cambio de etapa notifica al cliente en tiempo real)
│       ├── Agendar cita + asignar taller + notificación del revisado
│       ├── Registrar resultado del revisado + subir reporte (PDF)
│       ├── Registrar oferta / acuerdo (confidencial)
│       └── Control de traspaso legal y liberación de pago
├── /admin/citas — Calendario de citas
├── /admin/talleres — Talleres designados para el revisado
├── /admin/marcas — Catálogo de marcas (mercado de Panamá)
├── /admin/usuarios — Clientes registrados
└── /admin/configuracion — Textos ES/EN, costo del revisado (US$60),
    plantillas de notificación
```

## 4. Flujo del proceso (referencia)

```
Registro (Google/Apple/email) → Publicar auto (fotos/videos + datos
+ precio deseado + deuda bancaria) → Empresa revisa (timeline en vivo)
→ Notificación del revisado → Cita en taller designado → Revisado (US$60)
→ Cliente recibe el reporte (siempre, haya venta o no)
→ ¿Interesa a la empresa?
    ├── Sí → empresa paga los US$60 → Acuerdo confidencial
    │        → Investigación legal de propiedad (obligatoria)
    │        → Trámite de traspaso (municipio, paz y salvo, gravamen)
    │        → Pago al cliente → Cerrado
    └── No hay acuerdo → cliente paga los US$60 → conserva el reporte
                          → Cerrado sin venta
```

## Notas importantes

- **Bilingüe:** todo el contenido (páginas, formularios, emails, estados) existe en ES y EN.
- **Registro rápido:** prioridad a "Continuar con Google" y "Continuar con Apple";
  el registro con email es la alternativa, nunca más de 2–3 pasos.
- **Legal Panamá (destacar siempre):** investigación de propiedad obligatoria
  (titularidad, paz y salvo municipal, gravamen bancario, multas ATTT, robo DIJ);
  el pago solo se libera al concluir el traspaso legal. Aparece en: landing,
  página del servicio, wizard de publicación (declaración) y aviso legal.
  *Confirmar detalles del trámite con abogado local antes del lanzamiento.*
- **Revisado US$60:** monto fijo, en taller designado por la empresa.
  El reporte del revisado siempre queda en manos del cliente (valor agregado:
  aunque no venda, sabe qué debe reparar).
- **Deuda bancaria:** si el auto tiene préstamo activo, el monto pendiente y el
  banco se declaran al publicar; afecta la verificación de gravamen y el cálculo
  del pago final al cliente (se salda el banco primero en el traspaso).
- **Timeline en tiempo real:** cada cambio de etapa que haga el admin se refleja
  al instante en la línea de tiempo del cliente + notificación (in-app y email).
- **Beta sugerida:** sin pagos en línea; el pago y el acuerdo se gestionan de forma
  presencial/legal y la web solo refleja los estados.
