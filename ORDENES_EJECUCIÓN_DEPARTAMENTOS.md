# 📢 ÓRDENES DE EJECUCIÓN POR DEPARTAMENTO

**Documento:** Instrucciones accionables por departamento  
**Fecha:** 4 de Octubre de 2026  
**Validez:** Hasta viernes 6-Octubre 14:00  
**Formato:** Cada departamento es 100% autónomo; si necesita escalación, avisa a Dirección

---

## 🎨 ORDEN A: MARKETING + BRANDING

**Responsable:** [Nombre jefe Marketing]  
**Deadline:** Viernes 6-OCT 12:00 (Dirección revisa antes de deploy)  
**Status:** ⏳ EN ACCIÓN  
**Escala:** Verde (bajo riesgo; si hay conflicto con Informática → Dirección)

### TU MISIÓN

Definir la **identidad visual de Yuna** como marca (no solo mascota). Cada pixel debe "oler a Yuna": amiga, motivadora, inteligente, accesible.

### TAREAS CONCRETAS

#### ✅ TAREA 1: Auditoría Competitiva Visual (2 horas)

**Qué hacer:**
1. Abre en paralelo: Duolingo, Memrise, Quizlet, Anki (móvil)
2. Documenta por cada app:
   - Paleta principal (primario, secundario, acentos)
   - Tipografías (fuente, peso, tamaño)
   - Espaciado (padding, gap, bordes redondeados)
   - Tone of voice (¿amiga? ¿seria? ¿juguetona?)
   - Qué genera engagement (colores call-to-action, animaciones)

3. **Entrega:** Crea archivo `REPORTE_COMPETENCIA_VISUAL.md` con tabla:

```markdown
| App | Color Primario | Vibe | Tipografía | CTA Color |
|-----|---|---|---|---|
| Duolingo | #FFDC00 | Juguetona, amable | Segoe UI Bold | Verde #00DC00 |
| Memrise | #00A4BC | Seria, educada | ??? | Azul |
| ... | | | | |

## Insights:
- El amarillo de Duolingo convierte bien (estudio de UX)
- Los gradientes son muy 2024 (casi todos lo usan)
- Tipografías sans-serif 100% (legibilidad móvil)
```

---

#### ✅ TAREA 2: Identidad Visual YUNA (4 horas)

**Qué hacer:**
1. Define **Yuna como marca** (no como mascota):
   - Primario: ¿Indigo #6366F1? ¿Por qué? (profesional + playful)
   - Secundario: ¿Purple #8B5CF6? (profundidad, lujo)
   - Acentos: ¿Pink #EC4899? (atracción, energía)
   - Grises: (neutrales para texto, backgrounds)

2. Define **tipografía (máx 3 familias):**
   - Heading: sistema (ej: Inter Bold para urgencia)
   - Body: accesible (ej: Segoe UI regular)
   - Accent: playful (ej: Comic Sans NO, Fredoka SÍ)

3. Define **tone of voice (5-7 adjetivos):**
   - Yuna es: Amiga + Motivadora + Inteligente + Accesible + Divertida + Seria + Segura

4. **Entrega:** Documento `YUNA_BRANDING_GUIDE.md`:

```markdown
# YUNA Branding Guide v1.0

## Paleta de Colores

### Primario: Indigo #6366F1
- RGB: 99, 102, 241
- Uso: Botones principales, headers, focus states
- Sensación: Profesional, confiable, tech

### Secundario: Purple #8B5CF6
- Uso: Gradientes, acentos secundarios
- Sensación: Profundidad, premium

### Acentos
- Success: #10B981 (correcto, logros)
- Error: #EF4444 (incorrecto)
- Warning: #F59E0B (cuidado)

## Tipografía

### Inter (Google Fonts)
- Headings: Bold (700)
- Body: Regular (400)
- Small: Medium (500)

## Tone of Voice

Yuna habla como tu amiga inteligente:
- Motivadora (te anima sin ser fake)
- Accesible (explica sin ser condescendiente)
- Seria cuando hay que serlo (explica bien)
- Divertida en logros (confetti, emojis)

### Ejemplos:
- ✅ "¡25 años! Correcto. Art. 138 de la Constitución."
- ❌ "NOPE! Try again!!!" (demasiado fake)
```

---

#### ✅ TAREA 3: Design System (3 horas)

**Qué hacer:**
1. Define componentes reutilizables con **especificaciones técnicas** (para que Informática las implemente):

```markdown
## Componentes

### Button (CTA Principal)
- Background: linear-gradient(to right, #6366F1, #8B5CF6)
- Padding: 16px 32px
- Border-radius: 16px
- Font: Inter Bold 16px
- Shadow: 0 8px 20px rgba(99, 102, 241, 0.3)
- States:
  - Default: color gradient
  - Hover: transform translateY(-2px), shadow más fuerte
  - Active: transform translateY(0)
  - Disabled: opacity 50%, no shadow

### Button (Secundario)
- Background: white
- Border: 2px solid #E2E8F0
- Padding: 14px
- Hover: border-color #6366F1, background #F8FAFC

### Card
- Background: white
- Padding: 16px
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0,0,0,0.05)
- Border: 1px solid #E2E8F0
```

2. **Entrega:** `DESIGN_SYSTEM_COMPONENTS.md` (especificaciones para cada componente)

---

#### ✅ TAREA 4: Guía de Ilustraciones (2 horas)

**Qué hacer:**
1. Revisa las 9 imágenes de Yuna (que ya descargaste)
2. Propón dónde colocar decorativos SUTILMENTE:
   - Home: Yuna "on-fire" en racha (grande)
   - Quiz: Yuna "celebrate" al acertar (mediano)
   - Achievements: Yuna "applaud" para cada logro (pequeño)
   - NO saturar: máx 1-2 ilustraciones por pantalla

3. **Entrega:** `YUNA_PLACEMENT_GUIDE.md` con mock-ups ASCII:

```markdown
# HOME LAYOUT

┌─────────────────────────┐
│     LOGO YUNA           │
├─────────────────────────┤
│                         │
│     [YUNA ON-FIRE]      │  ← Tamaño: 150px
│        RACHA: 7         │
│                         │
├─────────────────────────┤
│  [STAT] [STAT]          │  ← Sin ilustraciones aquí
├─────────────────────────┤
│  [ESTUDIAR HOY]         │  ← Botón limpio, sin extras
├─────────────────────────┤
│ [Progreso] [Logros]     │  ← Botones text-only
└─────────────────────────┘
```

---

### SALIDA FINAL (Marketing)

```
MARKETING_OUTPUT/
├── REPORTE_COMPETENCIA_VISUAL.md
├── YUNA_BRANDING_GUIDE.md
├── DESIGN_SYSTEM_COMPONENTS.md
└── YUNA_PLACEMENT_GUIDE.md
```

**KPI:** Alguien que vea la app debe decir "esto es Yuna" sin explicación.

---

---

## 💻 ORDEN B: INFORMÁTICA (Producto & Operaciones)

**Responsable:** [Nombre jefe Informática]  
**Deadline:** Viernes 6-OCT 11:00  
**Status:** ⏳ EN ACCIÓN  
**Escala:** Verde (si hay blocker técnico → Dirección)

### TU MISIÓN

Convertir el mockup HTML en componentes React profesionales. La app debe:
- ✅ Ser responsive (375px, 390px, 768px)
- ✅ Cargar <2s en 4G lento
- ✅ Lighthouse Performance ≥90
- ✅ 0 bugs críticos

### TAREAS CONCRETAS

#### ✅ TAREA 1: Integración de Diseño (6 horas)

**Qué hacer:**
1. Recibe de Marketing: `YUNA_BRANDING_GUIDE.md` + `DESIGN_SYSTEM_COMPONENTS.md`
2. Convierte colores/tipografía → CSS variables en `app/globals.css`:

```css
:root {
  /* Colores */
  --primary: #6366F1;
  --primary-dark: #4F46E5;
  --secondary: #8B5CF6;
  --accent: #EC4899;
  --success: #10B981;
  --error: #EF4444;
  
  /* Tipografía */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Segoe UI', sans-serif;
  
  /* Espaciado */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}
```

3. Refactoriza componentes:
   - `components/Button.tsx` (primario, secundario, states)
   - `components/Card.tsx` (variantes)
   - `components/StatCard.tsx` (con animación)
   - Integra Yuna en cada componente (dónde va)

4. **Entrega:** Componentes React en carpeta `components/`

---

#### ✅ TAREA 2: Testing Responsive (2 horas)

**Qué hacer:**
1. Abre DevTools → Device Emulation
2. Prueba en: iPhone SE (375px), iPhone 12 (390px), iPad (768px)
3. Verifica:
   - ✅ Texto legible (mín 14px)
   - ✅ Botones tocables (≥44px)
   - ✅ Sin scroll horizontal
   - ✅ Imágenes no distorsionadas
   - ✅ Espaçamento apropiado

4. **Entrega:** `RESPONSIVE_QA_REPORT.md` (pantallazos + notas):

```markdown
# Responsive QA Report

## iPhone SE (375px)
- ✅ Texto legible
- ✅ Botones >44px
- ⚠️ Racha card: espaciado apretado (ajustar padding)

## iPhone 12 (390px)
- ✅ Todo bien

## iPad (768px)
- ⚠️ Ancho máximo 600px (no ocupar todo el ancho)
```

---

#### ✅ TAREA 3: Optimización Imágenes (2 horas)

**Qué hacer:**
1. Descarga las 9 PNG de Yuna que están en Descargas
2. Optimiza usando `next/image`:
   - Convierte a WebP con fallback PNG
   - Lazy loading para decorativos
   - Sizes: `sizes="(max-width: 640px) 100vw, 640px"`

3. Carpeta estructura:
```
public/yuna/
├── yuna-frontend-smile.webp
├── yuna-celebrate.webp
├── yuna-confused.webp
├── yuna-study-mode.webp
├── yuna-applauding.webp
├── yuna-on-fire.webp
├── yuna-expressions.webp
├── yuna-profile.webp
└── yuna-sleeping.webp
```

4. **Entrega:** Carpeta `public/yuna/` optimizada + checklist

---

#### ✅ TAREA 4: Lighthouse Audit (1 hora)

**Qué hacer:**
1. `npm run build && npm start` (producción)
2. Abre Chrome DevTools → Lighthouse
3. Audita: Performance, Accessibility, Best Practices
4. Target:
   - Performance: ≥90
   - Accessibility: ≥95
   - Best Practices: ≥90

5. **Entrega:** `LIGHTHOUSE_REPORT.json` + notas de mejora

---

### SALIDA FINAL (Informática)

```
TECH_OUTPUT/
├── components/ (refactorizados)
├── app/globals.css (CSS variables)
├── app/page.tsx (home actualizado)
├── public/yuna/ (optimizado)
├── RESPONSIVE_QA_REPORT.md
└── LIGHTHOUSE_REPORT.json
```

**KPI:** Lighthouse ≥90; carga <2s en 4G; 0 errores en consola.

---

---

## 🎮 ORDEN C: ENGAGEMENT & COMMUNITY

**Responsable:** [Nombre jefe Engagement]  
**Deadline:** Viernes 6-OCT 12:00  
**Status:** ⏳ EN ACCIÓN  
**Escala:** Verde (estrategia de engagement es tu área)

### TU MISIÓN

Asegurar que la UI **enganche** a los usuarios. Streaks visible, animaciones motivadoras, push strategy clara.

### TAREAS CONCRETAS

#### ✅ TAREA 1: Audit de Gamificación (2 horas)

**Qué hacer:**
1. Abre el mockup interactivo: `YUNA_MOBILE_MOCKUP.html`
2. Simula ser usuario Lucia, responde:
   - ¿Dónde está la racha? ¿Es lo primero que ves?
   - ¿Qué botón pulsas primero en Home?
   - ¿Ves claramente XP y Nivel?
   - ¿Las respuestas correctas te hacen sentir bien?
   - ¿Hay algo que te distrae?

3. **Entrega:** `ENGAGEMENT_AUDIT.md`:

```markdown
# Engagement Audit — Mockup YUNA

## Racha Visibility
- Ubicación: Arriba en Home, centrado
- Tamaño: Grande (48px emoji)
- Clarity: 9/10 (muy visible)
- Sugerencia: Agregar "días en racha" en texto pequeño

## CTA Principal
- Botón: "ESTUDIAR HOY"
- Visibilidad: 10/10
- Claridad: 10/10
- Sugerencia: Sonido al clickar (opcional)

## XP Visible
- Cards secundarias: 8/10 (podrían ser más grandes)
```

---

#### ✅ TAREA 2: Microinteractions Spec (3 horas)

**Qué hacer:**
1. Define animaciones que **celebren el éxito**:
   - Quiz correcto: ¿confetti? ¿sonido? ¿bounce?
   - Streak aumenta: ¿glow? ¿animation?
   - Nivel sube: ¿modal o en-place?

2. **Entrega:** `MICROINTERACTIONS_SPEC.md`:

```markdown
# Microinteractions Specification

## Quiz — Respuesta Correcta
- Trigger: Usuario selecciona respuesta correcta
- Animation 1: Respuesta se vuelve verde + border glow
  - Duration: 300ms
  - Easing: ease-out
- Animation 2: Confetti (si score >80%)
  - Duration: 2s
  - Particles: 20-30
  - Direction: random
- Sound: (opcional) pequeño "ding" (sin spam)
- Timing: Secuencial (primero glow, luego confetti)

## Quiz — Respuesta Incorrecta
- Animation: Shake + fade to red
- Duration: 500ms
- Yuna aparece: "confused" expression

## Streak Milestones
- En 7 días: Modal celebration "Racha de 7 Días 🔥"
  - Auto-close: 3 segundos
- En 30 días: Notificación especial
```

---

#### ✅ TAREA 3: Push Notification Strategy (2 horas)

**Qué hacer:**
1. Define **cuándo** notificar (timing), **qué** decir (copy), **por qué** (psychology):

2. **Entrega:** `PUSH_STRATEGY.md`:

```markdown
# Push Notification Strategy

## Timing

### Buenos Días (08:00 AM)
- Frecuencia: 1x día
- Copy: "¡Buenos días, [Nombre]! ☀️ Racha actual: 7 días"
- Psychology: Reminder suave, no invasivo
- CTR Target: ≥20%

### Última Hora (23:50 PM)
- Frecuencia: 1x día (si racha >3 días)
- Copy: "⏰ ¡Última hora para mantener tu racha!"
- Psychology: Loss aversion (no quiero perder la racha)
- CTR Target: ≥30%

## Reglas Globales
- Máx 2 notificaciones/semana
- Nunca más de 1 por día
- Respeta quiet hours (21:00-07:00 si prefiere usuario)

## Copy Examples (todos motivadores, NO fake)
- ✅ "Vas bien, puedes hacerlo 💪"
- ❌ "¡ÚLTIMA CHANCE! BUY NOW!" (spam)
```

---

#### ✅ TAREA 4: Community Features Roadmap (2 horas)

**Qué hacer:**
1. Propone features de engagement para futuro (no MVP, pero planificado):
   - Leaderboard (top 10 usuarios por semana)
   - Desafíos (reto 7 días con amigos)
   - Referrals (invita 1 amigo → 50 XP bonus)

2. **Entrega:** `COMMUNITY_ROADMAP.md`:

```markdown
# Community Features Roadmap

## MVP (Semana 1-2)
- ✅ Streaks (ya hecho)
- ✅ Levels (ya hecho)
- ✅ Achievements (ya hecho)

## v1.1 (Semana 3-4)
- 🔄 Leaderboard (top 10 semanal)
- 🔄 Push notifications (2/semana)

## v2.0 (Mes 2)
- 🎯 Challenges (desafíos con amigos)
- 🎯 Referrals (invitar amigos)
```

---

### SALIDA FINAL (Engagement)

```
ENGAGEMENT_OUTPUT/
├── ENGAGEMENT_AUDIT.md
├── MICROINTERACTIONS_SPEC.md
├── PUSH_STRATEGY.md
└── COMMUNITY_ROADMAP.md
```

**KPI:** Engagement score ≥8.5/10; DAU retención D7 ≥50%.

---

---

## 📚 ORDEN D: FORMACIÓN (Contenido)

**Responsable:** [Nombre jefe Formación]  
**Deadline:** Viernes 6-OCT 12:00  
**Status:** ⏳ EN ACCIÓN  
**Escala:** Verde (accesibilidad educativa es tu área)

### TU MISIÓN

Asegurar que la UI sea **pedagógicamente clara** y **accesible**. Los usuarios aprenden bien; el texto es legible; WCAG compliance.

### TAREAS CONCRETAS

#### ✅ TAREA 1: Content UX Audit (2 horas)

**Qué hacer:**
1. Ponte en la piel de Lucia (usuario que no conoce la app)
2. Abre mockup interactivo, contesta:
   - ¿Entiendo qué es cada botón?
   - ¿La pregunta del quiz es clara?
   - ¿Las explicaciones (post-respuesta) se leen bien?
   - ¿Dificultad (easy/medium/hard) está clara?
   - ¿Necesito tutorial para entender cómo funciona?

3. **Entrega:** `CONTENT_UX_AUDIT.md`:

```markdown
# Content UX Audit

## Quiz Question
- Current: "¿Cuál es la edad mínima para ser diputado?"
- Clarity: 10/10 (pregunta en lenguaje simple)
- Improvement: Agregar contexto opcional (Art. 138)

## Answer Options
- Clarity: 10/10 (números claros)
- Visual: Botones claros, pero podrían tener más espaciado

## Explanation
- Current: "25 años. Artículo 138 de la Constitución"
- Clarity: 8/10 (bien, pero breve)
- Improvement: Agregar 1 frase más explicativa
```

---

#### ✅ TAREA 2: WCAG 2.1 AA Compliance (3 horas)

**Qué hacer:**
1. Revisa cada componente contra WCAG AA:
   - ✅ Contraste texto: ≥4.5:1 para normal, ≥3:1 para large
   - ✅ Alt text en imágenes (Yuna debe tener descripciones)
   - ✅ Navegabilidad keyboard (Tab, arrows, Enter)
   - ✅ Labels en inputs (si hay)
   - ✅ Color no es único indicador (ej: rojo para error, pero agregar texto)

2. **Entrega:** `WCAG_COMPLIANCE_REPORT.md`:

```markdown
# WCAG 2.1 AA Compliance Report

## Color Contrast
- Primary text (#1E293B) on white: 14.5:1 ✅ (exceeds 4.5:1)
- Button text (white on #6366F1): 5.2:1 ✅
- Disabled button: 2.1:1 ❌ (needs improvement)

## Images
- Yuna on-fire: alt="Yuna mascot celebrating with fire emoji"
- Decorative streaks: aria-hidden="true" ✅

## Keyboard Navigation
- Tab order: Home → Quiz → Sopa → Logros ✅
- Focus indicator: visible blue outline ✅

## Overall Score: 94% AA Compliant
- 3 items to fix (minor)
```

---

#### ✅ TAREA 3: Testing Script con Lucia (2 horas prep)

**Qué hacer:**
1. Prepara 5-7 preguntas para cuando Lucia pruebe (viernes):
   - Observa dónde hace clic
   - Pregunta qué entiende de cada pantalla
   - Anota qué le confunde

2. **Entrega:** `LUCIA_TESTING_SCRIPT.md`:

```markdown
# Testing Script — Lucia (Friday Oct 6)

## Pre-Test Brief
"Hola Lucia, vamos a probar la app YUNA. No hay respuestas correctas/incorrectas. Queremos saber qué te resulta claro."

## Questions

1. **Home Screen**
   - Observa: ¿Qué es lo primero que ve?
   - Pregunta: "¿Qué crees que es ese número 7?"
   - Metric: ¿identifica racha correctamente?

2. **Quiz**
   - Pregunta: "¿Entiendes qué tienes que hacer?"
   - Observe: ¿hesita? ¿clickea rápido?
   - Metric: Tiempo decisión <5 segundos = bueno

3. **Overall**
   - Pregunta: "En una escala 1-10, ¿qué tan premium se ve esta app?"
   - Target: Lucia responda ≥8/10
```

---

#### ✅ TAREA 4: Content Strategy UI (1 hora)

**Qué hacer:**
1. Propone cómo integrar contenido educativo futuro:
   - Vídeos tutoriales (dónde?)
   - Tips entre preguntas (cómo presentarlos?)
   - Resúmenes (modal o nueva pantalla?)

2. **Entrega:** `CONTENT_STRATEGY_UI.md`:

```markdown
# Content Strategy — UI Integration

## Video Tutorials
- Placement: Modal dentro de Quiz, pre-respuesta
- Duration: <30s cada una
- Trigger: Button "💡 Ver explicación" (opcional)

## Tips Entre Preguntas
- Placement: Sidebar derecha (iPad) o modal (móvil)
- Content: "Tip: Art. 138 de la CE habla de edad mínima"
- Frequency: 1 de cada 3 preguntas (no spam)
```

---

### SALIDA FINAL (Formación)

```
FORMACIÓN_OUTPUT/
├── CONTENT_UX_AUDIT.md
├── WCAG_COMPLIANCE_REPORT.md
├── LUCIA_TESTING_SCRIPT.md
└── CONTENT_STRATEGY_UI.md
```

**KPI:** WCAG AA ≥95% cumplido; Lucia testing score ≥9/10.

---

---

## 🔄 REUNIÓN SÍNCRONA (Miércoles 5-OCT, 15:00)

**Asistencia obligatoria:** Jefes de los 4 departamentos + Dirección

### AGENDA (60 minutos)

1. **Marketing presenta** (15 min)
   - Paleta de colores final
   - Tone of voice
   - Dónde van las ilustraciones

2. **Informática confirma** (10 min)
   - "Recibido, implementando"
   - Riesgos técnicos (si los hay)

3. **Engagement propone** (10 min)
   - Microinteractions basadas en branding
   - Push strategy alineada con engagement

4. **Formación valida** (10 min)
   - WCAG compliance OK
   - Lucia testing script listo

5. **Dirección resuelve conflictos** (15 min)
   - Si hay tensiones (ej: "el color claro no se ve en 4G")
   - Toma decisión final

6. **Salidas de la reunión:**
   - ✅ Paleta de colores aprobada
   - ✅ Componentes React listos para integrar
   - ✅ Microinteractions confirmadas
   - ✅ WCAG compliance definido

---

## 📋 CHECKLIST FINAL (Viernes 6-OCT, 14:00)

Antes de enviar a Lucia:

- [ ] **Marketing:** 4 documentos entregados y aprobados
- [ ] **Informática:** Componentes React integrados, Lighthouse ≥90
- [ ] **Engagement:** Microinteractions especificadas, push strategy lista
- [ ] **Formación:** WCAG compliance ≥95%, testing script preparado
- [ ] **Dirección:** Revisa, aprueba, da luz verde a deploy

---

## 🎯 DEFINICIÓN DE LISTO

La app YUNA es considerada **LISTA PARA LUCIA** cuando:

✅ Todos los departamentos han entregado sus documentos  
✅ No hay conflictos (o Dirección los ha resuelto)  
✅ Lucia testing script está preparado  
✅ Deploy a Vercel es seguro (0 errores críticos)  
✅ Dirección da aprobación final

---

**Documento vigente hasta:** Viernes 6-Octubre 14:00  
**Punto de contacto:** Dirección (Jose)  
**Escalación:** Cuelgalo en Slack #ops si hay blocker
