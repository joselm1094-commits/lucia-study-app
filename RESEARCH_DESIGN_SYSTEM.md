# 🔬 YUNA - Design System Research & Implementation

**Investigación Profunda: Top 1 Learning App Design**  
**Fecha:** 2026-10-04 14:15  
**Objetivo:** Interfaz Duolingo-level + Psicología de Engagement

---

## 📊 FASE 1: INVESTIGACIÓN COMPETITIVA

### 1. DUOLINGO - El Estándar de Oro

#### Psicología de Engagement
- **Streaks (Rachas):** Toque rojo = urgencia/FOMO. Reset daily = compulsión
- **Variable Rewards:** No siempre ganas, a veces fallas → dopamine hit inconsistente
- **Progress Bars:** Visual momentum. Llenar barra = satisfacción
- **Mascota:** Duo (búho) = personalidad, accountability, emotional connection
- **Celebraciones:** Confetti, sound effects, animations tras ganar

#### Paleta de Colores Duolingo
```
Primary: #58CC02 (Verde vibrante - growth/learning)
Secondary: #1CB0F6 (Azul - confianza/calma)
Accent: #FF4B4B (Rojo - urgencia/racha)
Neutral: #FFFFFF, #F5F5F5 (backgrounds)
Text: #333333 (contraste alto)
```

**Psicología:**
- Verde = crecimiento, aprendizaje, naturales (plants, growth)
- Azul = confianza, seguridad, calma
- Rojo = urgencia, FOMO, racha (pérdida)

#### Micro-interactions Duolingo
1. **Button Hover:** Scale 1.05 + shadow
2. **Racha Counter:** Bounce animation on increment
3. **Correct Answer:** Confetti + glow + sound
4. **Wrong Answer:** Shake + gentle bounce back
5. **Progress Fill:** Linear animation 0.6s → satisfying
6. **Transitions:** All 0.3s cubic-bezier(0.4, 0, 0.2, 1)

---

### 2. MEMRISE - Variable Rewards

**Key:** Los usuarios no saben cuándo van a ganar. Esto dispara dopamine.
- Preguntas difficulty variable
- Bonus coins aleatorios (15% de probabilidad)
- Leaderboards mini (rankings cortos)
- Achievements sorpresa

**Aplicable a YUNA:** Occasional bonus XP (5-10% random)

---

### 3. ANKI - Minimalista pero Obsesivo

**Key:** Interfaz limpia + repetición espaciada + estadísticas
- Color blanco/gris = sin distracción
- Cards grandes = focus
- Progress simple = claridad

**Contrapunto:** Poco psicológicamente atractivo para nuevos usuarios

---

### 4. QUIZLET - Social + Competencia

**Key:** Leaderboards, live competitions, friend challenges
- Avatares coloridos
- Competencia real-time
- Share achievements en redes

**Aplicable a YUNA:** Ahora no, pero future feature

---

## 🧠 FASE 2: PSICOLOGÍA DE GAMIFICACIÓN

### Variable Rewards (VR)
**Más poderoso que rewards consistentes:**
- **Ratio:** 80% correcto → 90% XP, 20% correcto → 50% XP aleatoriamente
- **Timing:** VR cada 5-8 preguntas (no predecible)
- **Effect:** Dopamine spike > anticipation > compulsión

### Streaks Mechanics
**FOMO + Loss Aversion combinados:**
- Racha visible = show user progress
- Racha en peligro = notificación urgente
- Racha lost = guilt → retry
- **Timing:** Resetea a medianoche (timezone del usuario)

### Progress Visibility
**Psychological Safety:**
- Progress bar siempre visible
- Pequeños wins = mini-celebrations
- "You're X% through today's lesson"

### Accomplishment & Mastery
**Competence (Self-determination theory):**
- Difficulty levels (Easy/Medium/Hard)
- Unlock new content tras X puntos
- Badges para milestones

### Social Proof
**Future:**
- "3,502 people studied Constitución today"
- Leaderboards

---

## 🎨 FASE 3: DISEÑO VISUAL PROPUESTO

### Paleta de Colores YUNA

```
PRIMARY BRAND:
┌─────────────────────────────────┐
│ #6366F1 (Indigo) - Principal    │  ← Growth, trust, premium
│ #8B5CF6 (Purple) - Secondary    │  ← Creativity, achievement
│ #EC4899 (Pink) - Accent/Fire    │  ← Energy, racha urgency
└─────────────────────────────────┘

SEMANTICS:
✅ Success: #10B981 (Emerald)    - Correct answers, achievements
❌ Error:   #EF4444 (Red)        - Wrong, racha at risk
⚠️ Warning: #F59E0B (Amber)      - Notifications
ℹ️ Info:    #3B82F6 (Blue)       - Tips, explanations

NEUTRALS:
Background: #F8FAFC (Slate-50)   - Clean, light
Surface:    #FFFFFF             - Cards, modals
Text Dark:  #1E293B (Slate-900) - High contrast
Text Light: #64748B (Slate-500) - Secondary
Border:     #E2E8F0 (Slate-200) - Subtle divisions

GRADIENTS:
┌────────────────────────────────────┐
│ Indigo → Purple: Premium feeling   │
│ Purple → Pink: Energy + growth     │
│ Emerald → Teal: Success/calm       │
└────────────────────────────────────┘
```

### Typography

```
Font Stack: 
  - System: -apple-system, BlinkMacSystemFont, 'Segoe UI'
  - Google: 'Inter' (modern, high legibility, gaming-friendly)

Scale (mobile-first):
  - H1: 2.5rem (40px) - Bold 800 - Title
  - H2: 1.875rem (30px) - Bold 700 - Section header
  - H3: 1.5rem (24px) - Semibold 600 - Card title
  - Body: 1rem (16px) - Regular 400 - Text content
  - Small: 0.875rem (14px) - Regular 400 - Meta data
  - Tiny: 0.75rem (12px) - Medium 500 - Labels
```

---

## ⚡ FASE 4: MICRO-INTERACTIONS SPEC

### 1. Button Interactions
```css
/* Default */
scale: 1.0, opacity: 1, box-shadow: 0 2px 8px rgba(99,102,241,0.1)

/* Hover */
scale: 1.05, box-shadow: 0 8px 16px rgba(99,102,241,0.25)

/* Active/Press */
scale: 0.98, box-shadow: 0 2px 4px rgba(99,102,241,0.15)

/* Transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) */
```

### 2. Correct Answer Animation
```
Timeline (0.6s total):
├─ 0ms: Scale 1.0, opacity 1
├─ 100ms: Scale 1.1 (celebration start)
├─ 200ms: Confetti spawn
├─ 400ms: Glow fade
├─ 600ms: Settle to next state
└─ Sound: ✓ (soft, satisfying)
```

### 3. Wrong Answer Shake
```
Timeline (0.4s):
├─ 0ms: translateX(0)
├─ 50ms: translateX(-8px)
├─ 100ms: translateX(8px)
├─ 150ms: translateX(-6px)
├─ 200ms: translateX(4px)
├─ 250ms: translateX(-2px)
├─ 300ms: translateX(0)
└─ Sound: ✗ (gentle buzz)
```

### 4. Progress Bar Fill
```
Timeline (0.8s):
├─ 0ms: width 0%
├─ 800ms: width target%
├─ Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
└─ Glow: box-shadow pulse during fill
```

### 5. Racha Counter Increment
```
Timeline (0.6s):
├─ 0ms: scale 1.0, opacity 1
├─ 100ms: scale 1.2 (bounce)
├─ 200ms: scale 1.0
└─ 🔥 emoji bounce separately
```

### 6. Page Transitions
```
Exit animation (150ms):
├─ opacity: 1 → 0.7
├─ scale: 1 → 0.98
└─ slideUp: 0px → -20px

Enter animation (300ms):
├─ opacity: 0 → 1
├─ scale: 0.98 → 1
├─ slideDown: 20px → 0px
└─ cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## 🏗️ FASE 5: LAYOUT & COMPONENT DESIGN

### Homepage Layout (Mobile-First)

```
┌──────────────────────────────────┐
│  [YUNA - Estudio Inteligente]   │ ← Branding + clean
├──────────────────────────────────┤
│                                  │
│        🔥 RACHA ACTUAL 🔥         │  ← Large, prominent
│                                  │
│            7 DÍAS               │  ← Bold number
│        en racha constante        │  ← Supporting text (small)
│                                  │
├──────────────────────────────────┤
│                                  │
│   ┌────────────────────────────┐ │
│   │   📊 XP HOY: 150 / 500     │ │  ← Progress card
│   │   ████████░░ 30%           │ │
│   └────────────────────────────┘ │
│                                  │
├──────────────────────────────────┤
│                                  │
│     ┌──────────────────────┐    │
│     │                      │    │
│     │   🎯 ESTUDIAR HOY    │    │  ← CTA button (large)
│     │                      │    │
│     └──────────────────────┘    │
│                                  │
├──────────────────────────────────┤
│                                  │
│  [📊 Mi Progreso] [🎯 Misiones]  │  ← Secondary buttons
│                                  │
└──────────────────────────────────┘
```

### Quiz Layout

```
┌──────────────────────────────────┐
│  ← Back | Quiz: Constitución    │
├──────────────────────────────────┤
│                                  │
│  Pregunta 3 de 10                │  ← Progress indicator
│  ████████░░░░░░░░░░ 30%         │
│                                  │
├──────────────────────────────────┤
│                                  │
│  ¿Cuántos artículos tiene       │  ← Question (clear)
│  la Constitución Española?       │
│                                  │
├──────────────────────────────────┤
│                                  │
│  ┌────────────────────────────┐  │
│  │ ○ 150                      │  │  ← Option (interactive)
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │ ○ 169                      │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │ ○ 185                      │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │ ○ 200                      │  │
│  └────────────────────────────┘  │
│                                  │
└──────────────────────────────────┘

[On correct answer]
┌──────────────────────────────────┐
│  ✅ ¡CORRECTO!                   │  ← Celebration
│                                  │
│  La CE de 1978 tiene 169...      │  ← Explanation
│                                  │
│  ┌────────────────────────────┐  │
│  │   Siguiente Pregunta → +10 │  │  ← Progress + reward
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

---

## 🎬 FASE 6: ANIMATION TIMINGS (CSS Variables)

```css
:root {
  /* Durations */
  --transition-fast: 0.15s;
  --transition-base: 0.3s;
  --transition-slow: 0.5s;
  --transition-celebration: 0.8s;
  
  /* Easing functions */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out-cubic: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Colors (primary brand) */
  --primary: #6366F1;
  --primary-dark: #4F46E5;
  --accent: #EC4899;
  --success: #10B981;
  --error: #EF4444;
  --warning: #F59E0B;
}
```

---

## 🎯 FASE 7: PSICOLOGÍA APLICADA

### Hook Loop (Nir Eyal Framework)

```
1. TRIGGER (Externo)
   └─ Notificación 8:00 AM: "¡Buenos días! Tu racha en peligro 🔥"

2. ACTION (Comportamiento más fácil)
   └─ Click notificación → App abre → Quiz visible
   └─ Reducida fricción = 1 click = estudio

3. VARIABLE REWARD (Motivación)
   ├─ Racha +1 (visual/dopamine)
   ├─ XP variable (80-100 random)
   ├─ Occasional bonus (5% chance +50XP)
   └─ Celebración confetti

4. INVESTMENT (Compromiso futuro)
   └─ Racha visible → "si no estudio mañana la pierdo"
   └─ Milestones desbloqueados → quiere llegar a siguiente

→ Cycle repeats next day
```

### FOMO + Loss Aversion

- **Racha en Rojo:** Si no estudiaste hoy, racha counter vira rojo
- **Notificación 23:50:** "Última hora para mantener tu racha 🔥"
- **Streak Reset Visual:** Confetti negativa si pierdes racha (motivation to not lose)

### Mastery Progression

- **Easy Questions:** Build confidence
- **Medium Questions:** Challenge zone (Csikszentmihalyi flow)
- **Hard Questions:** Mastery pursuit

---

## 📝 IMPLEMENTACIÓN EN CÓDIGO

### Components to Build

1. **Hero Section (Racha + XP)**
   - Animated counter
   - Streak fire animation
   - Progress circles

2. **Quiz Card System**
   - Smooth transitions
   - Radio button custom style
   - Explanation reveal animation

3. **Celebration Component**
   - Confetti canvas
   - Sound effects
   - Glow effects

4. **Progress Bar Component**
   - Animated fill
   - Milestone markers
   - Micro-interactions

### CSS/Animation Priorities

```
Tier 1 (MUST HAVE):
├─ Button hover/active states
├─ Correct answer celebration
├─ Progress bar animation
└─ Racha counter animation

Tier 2 (SHOULD HAVE):
├─ Page transitions
├─ Shake animation (wrong)
├─ Pulse/glow effects
└─ Smooth scrolling

Tier 3 (NICE TO HAVE):
├─ Particle effects
├─ Advanced gestures
└─ Lottie animations
```

---

## ✅ SUCCESS CRITERIA

- [ ] Paleta de colores aplicada en todas partes
- [ ] Cero botones superpuestos
- [ ] Todas las animaciones < 300ms
- [ ] Mobile-first responsive (100% 375px-1920px)
- [ ] Accessibility WCAG AA (contrast > 4.5:1)
- [ ] 60fps smoothness (no jank)
- [ ] Psicología de gamificación evidente
- [ ] Interfaz comparable a Duolingo
- [ ] Zero layout shifts (CLS < 0.1)

---

## 🚀 NEXT STEP

**→ Implementar en código ahora**

Tiempo estimado: 2-3 horas
Fecha límite: Mañana 8:00 AM para Lucia testing

**LET'S GO!** 🔥
