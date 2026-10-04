# 📋 MEMO DE DIRECCIÓN - Proyecto UI/UX YUNA v2.0

**Fecha:** 4 de Octubre de 2026  
**De:** Dirección General  
**Para:** Marketing + Branding, Informática, Engagement, Formación  
**Asunto:** Rediseño integral de interfaz móvil YUNA - Coordinación de departamentos  
**Deadline:** 6 de Octubre (Lucia testing)  
**Prioridad:** 🔴 CRÍTICA

---

## 📌 CONTEXTO

El mockup base de YUNA está completo pero requiere validación y optimización desde múltiples perspectivas de negocio. No es un proyecto tecnico aislado, es un esfuerzo coordinado de **departamentos especialistas** para asegurar que la UI sirva **todos nuestros objetivos simultáneamente**:

- ✅ Branding consistente (Yuna como identidad)
- ✅ Experiencia de usuario premium y casual
- ✅ Máxima retención (streaks, gamificación)
- ✅ Accesibilidad educativa (contenido claro)

---

## 🎯 OBJETIVO GENERAL

**Entregar en 48h una UI móvil profesional que:**
- Refleje identidad Yuna en cada pixel
- Maximice engagement mediante gamificación visible
- Sea responsive y rápida (<2s carga)
- Cumpla estándares de accesibilidad educativa

---

## 📊 TAREAS POR DEPARTAMENTO

### 1️⃣ **MARKETING + BRANDING** (Responsable: ___)

**Investigar y Definir:**

- [ ] **Auditoría Competitiva Visual** (2 horas)
  - Analizar paleta + tipografía de: Duolingo, Memrise, Quizlet, Anki
  - Documentar: qué colores generan engagement, qué tipografías son "premium casual"
  - Entregar: [REPORTE_COMPETENCIA_VISUAL.md](benchmark contra 4 competidores)

- [ ] **Identidad Visual Yuna** (4 horas)
  - Definir: paleta oficial (primario, secundario, acentos, grises)
  - Tipografía: 2-3 familias máximo (legibilidad móvil)
  - Tone of voice: adjetivos que resuman a Yuna (ej: "amiga, motivadora, inteligente")
  - Entregar: [YUNA_BRANDING_GUIDE.md](colores HEX, CSS variables, ejemplos de uso)

- [ ] **Design System** (3 horas)
  - Componentes reutilizables: botones, cards, badges, inputs
  - Estados: hover, active, disabled
  - Espaciado, sombras, bordes redondeados (consistencia)
  - Entregar: [DESIGN_SYSTEM_COMPONENTS.md](especificaciones técnicas)

- [ ] **Ilustraciones + Microinteractions** (2 horas)
  - Revisar: Yuna en 9 expresiones (¿refleja bien la marca?)
  - Proponer: dónde colocar decorativos (no abrumar, ser sutiles)
  - Entregar: [YUNA_PLACEMENT_GUIDE.md](mock-ups con ilustraciones integradas)

**Entregables:**
```
MARKETING_OUTPUT/
├── REPORTE_COMPETENCIA_VISUAL.md
├── YUNA_BRANDING_GUIDE.md
├── DESIGN_SYSTEM_COMPONENTS.md
└── YUNA_PLACEMENT_GUIDE.md
```

**KPI:** Consistencia visual vs. 3+ competidores; puntuación "premium casual" ≥8/10

---

### 2️⃣ **INFORMÁTICA (Producto & Operaciones)** (Responsable: ___)

**Implementar y Validar:**

- [ ] **Integración de Diseño en React** (6 horas)
  - Convertir mockup HTML → componentes React/Next.js reutilizables
  - Implementar: CSS variables (colores, tipografía, espaciado)
  - Asegurar: responsive <600ms, performance <2s en 4G lento
  - Entregar: [app/page.tsx](home actualizado), [components/](botones, cards refactorizados)

- [ ] **Testing Responsive** (2 horas)
  - Probar en: iPhone SE (375px), iPhone 12 (390px), iPad (768px)
  - Revisar: legibilidad tipografía, touch targets ≥44px, sin scroll innecesario
  - Entregar: [RESPONSIVE_QA_REPORT.md](pantallazos + observaciones)

- [ ] **Optimización Imágenes** (2 horas)
  - Procesar Yuna (9 PNG) → optimización Next.js
  - Lazy loading de decorativos
  - Format: WebP con fallback PNG
  - Entregar: carpeta `public/yuna/` + checklist de optimización

- [ ] **Lighthouse Audit** (1 hora)
  - Performance ≥90, Accessibility ≥95, Best Practices ≥90
  - Identificar: bottlenecks, accessibility issues
  - Entregar: [LIGHTHOUSE_REPORT.json](data + recomendaciones)

**Entregables:**
```
TECH_OUTPUT/
├── app/page.tsx (actualizado)
├── components/ (refactorizados)
├── public/yuna/ (optimizado)
├── RESPONSIVE_QA_REPORT.md
└── LIGHTHOUSE_REPORT.json
```

**KPI:** Lighthouse Performance ≥90; carga <2s en 4G; 0 bugs críticos

---

### 3️⃣ **ENGAGEMENT & COMMUNITY** (Responsable: ___)

**Optimizar Gamificación:**

- [ ] **Análisis Mecánicas Actuales** (2 horas)
  - ¿Streaks es lo bastante VISIBLE? ¿Pita con datos?
  - ¿Botones de CTA son obvios? (¿dónde hace clic el usuario primero?)
  - ¿Rewards están claros? (XP, nivel, badges)
  - Entregar: [ENGAGEMENT_AUDIT.md](heatmap mental del usuario)

- [ ] **Propuestas de Microinteractions** (3 horas)
  - Animaciones: streak aumenta → confetti, sonido (opcional)
  - Feedback visual: quiz correcto → verde + bounce
  - Notificación: "¡Racha en riesgo!" a las 21:00
  - Entregar: [MICROINTERACTIONS_SPEC.md](timing, sound design, CSS animations)

- [ ] **Push Notifications Strategy** (2 horas)
  - Timing óptimo: "Buenos días" (8:00), "Última hora" (23:50)
  - Mensajes: motivadores, NO spammy
  - Frecuencia: máx 2/semana (respeta fatiga)
  - Entregar: [PUSH_STRATEGY.md](copy + timing + psychology)

- [ ] **Community Features** (2 horas)
  - Posible: leaderboard (top 10 usuarios por semana)
  - Posible: desafíos (reto de 7 días con otros)
  - Posible: referrals (invita amigos → bonus XP)
  - Entregar: [COMMUNITY_ROADMAP.md](MVP de qué implementar en fases)

**Entregables:**
```
ENGAGEMENT_OUTPUT/
├── ENGAGEMENT_AUDIT.md
├── MICROINTERACTIONS_SPEC.md
├── PUSH_STRATEGY.md
└── COMMUNITY_ROADMAP.md
```

**KPI:** Engagement score (engagement del mockup) ≥8.5/10; DAU target retención D7 ≥50%

---

### 4️⃣ **FORMACIÓN (Contenido)** (Responsable: ___)

**Validar Accesibilidad Educativa:**

- [ ] **Audit Claridad de Contenido** (2 horas)
  - ¿Botones comunican claramente su función? (Quiz vs. Sopa vs. Tema)
  - ¿Dificultad (easy/medium/hard) es evidente para usuarios?
  - ¿Explicaciones post-quiz son legibles? (tamaño fuente, contraste)
  - Entregar: [CONTENT_UX_AUDIT.md](100 observaciones de claridad)

- [ ] **Accesibilidad WCAG 2.1 AA** (3 horas)
  - Revisión: contraste colores ≥4.5:1 para texto
  - Revisión: alt text en Yuna (descripciones)
  - Revisión: navegabilidad keyboard (Tab order)
  - Entregar: [WCAG_COMPLIANCE_REPORT.md](checklist detallado)

- [ ] **Testing con Usuarios (Lucia)** (2 horas de preparación)
  - Preparar: 5-7 preguntas clave para Lucia (usability testing)
  - Ej: "¿Qué botón pulsarías primero?" "¿Es clara la racha?"
  - Registrar: observaciones de comportamiento
  - Entregar: [LUCIA_TESTING_SCRIPT.md](guion + métricas a medir)

- [ ] **Recomendaciones Contenido Futuro** (1 hora)
  - ¿Necesitamos videos tutoriales? ¿Dónde van en la UI?
  - ¿Tips entre preguntas? ¿Resúmenes?
  - Entregar: [CONTENT_STRATEGY_UI.md](cómo integrar contenido en interfaz)

**Entregables:**
```
FORMACIÓN_OUTPUT/
├── CONTENT_UX_AUDIT.md
├── WCAG_COMPLIANCE_REPORT.md
├── LUCIA_TESTING_SCRIPT.md
└── CONTENT_STRATEGY_UI.md
```

**KPI:** WCAG AA ≥95% cumplido; claridad percibida ≥9/10 (feedback Lucia)

---

## 🔄 COORDINACIÓN INTER-DEPARTAMENTOS

### **Reunión Sincronización** (Miércoles 5-Octubre, 15:00)

**Objetivo:** Alinear hallazgos y resolver conflictos

**Agenda:**
1. Marketing: Presenta branding guide + color palette
2. Informática: Integra colores en código + verifica performance
3. Engagement: Propone animaciones basadas en branding
4. Formación: Valida accesibilidad de componentes nuevos

**Salidas de la reunión:**
- ✅ Paleta de colores final (aprobada Dirección)
- ✅ Componentes React refactorizados
- ✅ Animaciones especificadas en CSS
- ✅ Checklist WCAG completado

---

## 📦 ENTREGABLES FINALES (Viernes 6-Octubre, 14:00)

**Carpeta centralizada:** `YUNA_UI_V2_FINAL/`

```
YUNA_UI_V2_FINAL/
├── MARKETING/
│   ├── YUNA_BRANDING_GUIDE.md
│   ├── DESIGN_SYSTEM_COMPONENTS.md
│   └── YUNA_PLACEMENT_GUIDE.md
├── TECH/
│   ├── app/ (React components)
│   ├── public/yuna/ (optimizado)
│   ├── RESPONSIVE_QA_REPORT.md
│   └── LIGHTHOUSE_REPORT.json
├── ENGAGEMENT/
│   ├── MICROINTERACTIONS_SPEC.md
│   ├── PUSH_STRATEGY.md
│   └── COMMUNITY_ROADMAP.md
├── FORMACIÓN/
│   ├── WCAG_COMPLIANCE_REPORT.md
│   ├── LUCIA_TESTING_SCRIPT.md
│   └── CONTENT_STRATEGY_UI.md
└── YUNA_MOBILE_MOCKUP_FINAL.html (demo interactivo)
```

---

## 🚀 TIMELINE

| Hora | Tarea | Responsable |
|------|-------|-------------|
| Hoy 4-OCT, 18:00 | Lectura de este memo | Todos |
| Mañana 5-OCT, 09:00 | Investigación individual | Cada depto |
| Mañana 5-OCT, 15:00 | Reunión síncrona | Todos |
| Mañana 5-OCT, 16:30 | Iteración final | Todos |
| Viernes 6-OCT, 10:00 | Deploy a staging | Informática |
| Viernes 6-OCT, 14:00 | Lucia testing comienza | Formación + Dirección |

---

## ✅ CRITERIOS DE ACEPTACIÓN

La UI v2 será considerada **LISTA** cuando:

- ✅ **Marketing:** Paleta de colores coherente, Yuna integrada sutilmente, 8/10+ premium casual
- ✅ **Informática:** Lighthouse ≥90, responsive <600ms, 0 bugs críticos
- ✅ **Engagement:** Streaks visible, animaciones motivadoras, push strategy definida
- ✅ **Formación:** WCAG AA ≥95%, claridad 9/10, testing script de Lucia preparado

---

## 🎯 NOTA ESTRATÉGICA

Este proyecto demuestra cómo una **pequeña UI** requiere **coordinación de toda la empresa**:

- **Marketing** asegura que Yuna sea marca, no solo mascota
- **Informática** asegura que funcione rápido y sea accesible técnicamente
- **Engagement** asegura que la gente NO abandone (streaks, rewards)
- **Formación** asegura que el usuario aprenda bien (accesibilidad educativa)

**Resultado:** Una app que NO es bonita por ser bonita, sino porque cada departamento contribuye su expertise.

---

## 📞 ESCALACIÓN

**Riesgos (si aparecen):**
- 🟡 Conflicto branding vs. performance → Dirección (24h)
- 🔴 Bug crítico encontrado → Call urgente
- 🟢 Halazgo positivo, propuesta de feature → Slack a #ops

**Punto de contacto:** Dirección (Jose)

---

**Memo enviado:** 4-Octubre-2026, 18:15  
**Firma digital:** Dirección General  
**Estado:** Activo - Todos en acción

---

## 📎 ANEXOS

- [Mockup interactivo actual](YUNA_MOBILE_MOCKUP.html)
- [Branding guidelines Lucia Study App (v1)](si existe)
- [Design system Duolingo (referencia competencia)](público)
