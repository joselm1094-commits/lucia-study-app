# ✅ CHECKLIST: ANTES DE QUE LUCÍA EMPIECE

**Fecha objetivo**: 5 de octubre 2026  
**Status**: En construcción  
**Owner**: José

---

## SEMANA 1: VALIDACIÓN TÉCNICA (Oct 1-5)

### Errores Cero (QA)

```
APP CORE
□ ¿Carga en <2s? (probar en móvil 4G real)
□ ¿Zero crashes en 30 min de uso?
□ ¿Guardado automático de progreso?
□ ¿Funciona 100% offline?
□ ¿Sincronización cuando vuelve internet?
□ ¿Los 5 temas cargan sin errores?

GAMIFICACIÓN
□ ¿XP se suman al instante?
□ ¿Racha se cuenta correctamente?
□ ¿Misiones se marcan completadas?
□ ¿Niveles suben sin bugs?
□ ¿Animaciones no son pesadas (60fps)?

FUNCIONALIDADES CRÍTICAS
□ ¿Quiz califica correctamente?
□ ¿Flashcards SM-2 funciona?
□ ¿Sopa de letras se resuelve?
□ ¿Tema reader scrollea bien?
□ ¿Progress se actualiza en tiempo real?

DATOS LUCÍA
□ ¿Avatar customizable (al menos 4 opciones)?
□ ¿Nombre se guarda correctamente?
□ ¿Oposición (I2) se puede cambiar?
□ ¿Nada confidencial en browser (solo localStorage)?
```

**Si ALGO no funciona**: NO lanzas a Lucía.

### UX Pulida

```
ONBOARDING
□ <5 minutos hasta primer quiz
□ No pedir permisos raros
□ Tutorial simple (2-3 pasos máximo)
□ Primer "aha moment" claro: Ver XP subir

INTERFAZ
□ Botones grandes (mobile-friendly)
□ Colores coherentes (seguir Tailwind)
□ Fuentes legibles (no textos chiquitos)
□ No loading spinners molestos (fluido)

COPYWRITING
□ Sin errores ortográficos
□ Tone: Amigable + motivante (no bossy)
□ Frases cortas (línea máximo 2 líneas)
□ Emojis apropiados (pero no excesivo)
```

---

## SEMANA 2: CONFIGURACIÓN (Oct 6-12)

### Setup Datos Lucía

```
PERFIL
□ Nombre: Lucía
□ Oposición: I2 Tributaria
□ Fecha examen: [Preguntar a Lucía]
□ Disponibilidad diaria: 45-60 min
□ Avatar: [Elegir con ella]
□ Email: [Sincronizar con su gmail]
```

### Preparación Óptica

```
NOTIFICACIONES
□ Horarios de notificaciones fijados
  └─ 08:00 (Morning boost)
  └─ 20:00 (Evening challenge)
  └─ Viernes 19:00 (Weekend event)

□ Textos de notificaciones personalizados
  └─ "Buenos días, Lucía" (no genérico)
  └─ Mencionar su racha actual
  └─ Motivar sin presionar

DASHBOARD
□ Mostrar: Nivel, XP, Racha, Puntos hoy
□ Colores llamativos pero no agresivos
□ Barras de progreso visibles
□ Contador regresivo a siguiente nivel
```

### Testing Manual

```
SIMULAR DÍA COMPLETO
□ Mañana: Word of day, notificación
□ Tarde: Quiz, ver XP sumar
□ Noche: Flashcards, completar racha
□ Verificar: ¿Todo es satisfactorio?

SIMULAR ABANDONO
□ No abrir app 24h
□ ¿Notificación adecuada? (recuperar racha)
□ ¿Es motivante o agresiva?

SIMULAR SESIÓN LARGA
□ Lucía hace 60 min seguidos
□ ¿Se cansa? (sugerir descanso)
□ ¿Interfaz mantiene atención?
```

---

## SEMANA 3: DOCUMENTACIÓN (Oct 13-19)

### Guía para Lucía

```
PRIMEROS PASOS
□ "¿Cómo empezar?" (1 página max)
□ "¿Qué son los XP?" (explicación simple)
□ "¿Cómo subo de nivel?" (4 pasos)
□ "¿Qué es la racha?" (por qué importa)

FAQ COMÚN
□ "Perdí mi racha, ¿qué hago?"
□ "No me carga la app"
□ "¿Cómo cambio de oposición?"
□ "¿Qué tema debo estudiar primero?"

CONTACTO
□ Tu número/WhatsApp (para dudas urgentes)
□ Email de soporte
□ Grupo privado de 3 (José + Lucía + Alejandro)
```

### Métricas Base

```
CREAR DASHBOARD PRIVADO
□ Daily: Lucía's stats (nivel, XP, racha)
□ Weekly: Resumen progreso
□ Alertas: Si algo raro (no abre app 24h, etc)
□ Exportar a: Google Sheets (para trackear)

METRICS A TRACKEAR
□ DAU (¿Abre diariamente?)
□ Session length (¿Cuánto tiempo usa?)
□ Feature usage (¿Quiz o Flashcards primero?)
□ Completions (¿Termina misiones?)
□ Churn risk (¿Riesgo de abandono?)
```

---

## SEMANA 4: LANZAMIENTO (Oct 20-26)

### Conversación con Lucía

```
REUNIÓN PRESENCIAL O VIDEOLLAMADA
□ Mostrar app en funcionamiento (demo vivo)
□ Explicar cómo funciona (sin abrumar)
□ Qué esperas: "60 días, Nivel 7+, aprobación"
□ Expectativa: "30-45 min/día"
□ Decir: "Tú eres conejillo de indias, OK?"

INSTRUCCIONES CLARAS
□ Instalar en PC: http://localhost:3000
□ Instalar en móvil: Agregar a pantalla de inicio (PWA)
□ Primer día: Solo hacer "Palabra del día"
□ Segundo día: Agregar quiz rápido
□ Tercera día: Completo (misiones + flashcards)

EXPECTATIVA
□ "Algunos días estará bonito"
□ "Algunos días encontrarás bugs"
□ "Reporta TODO lo que no funcione o confunda"
□ "Tu feedback es oro puro"
```

### Monitoring Diario (Semanas 1-2)

```
DÍA 1 (Oct 21)
□ ¿Lucía abrió la app?
□ ¿Llegó a primer quiz?
□ ¿Entendió las instrucciones?
└─ Si no: Llamada de ajuste

DÍAS 2-7
□ ¿Abre diariamente?
□ ¿Qué feature usa más?
□ ¿Reporta bugs?
□ ¿Está enganchada o aburrida?
└─ Diariamente: Mensaje motivador

SEMANA 2
□ ¿Ha completado racha de 7 días?
□ ¿Ha llegado a Nivel 2?
□ ¿Qué falta? (feature request)
□ ¿Qué confunde? (UX feedback)
└─ Iteración rápida: Arreglar bugs
```

---

## MÉTRICAS DIANA: LUCÍA (Octubre-Noviembre)

### Success Criteria

```
RETENCIÓN
□ Usa app 50+ días de 60 (83% days active)
□ Sessions: 45-60 min/día (tu expectativa)
□ Churn: 0 (ni siquiera piensa en abandonar)

ENGAGEMENT
□ Racha: 30+ días (mínimo 50+ días)
□ Nivel alcanzado: Mínimo Nivel 5, ideal Nivel 7
□ Misiones completadas: 95%+

APRENDIZAJE
□ % promedio en quizzes: 80%+
□ Retención en temas: 70%+ (flashcards)
□ Predictor IA: "Aprobación 75%+"

NPS (Net Promoter Score)
□ "¿Recomendarías esta app?"
□ Target: 60+ (excelente)
□ Feedback cualitativo: ¿Qué cambiarías?
```

### Red Flags (Si pasa esto = action)

```
🚩 Si abre solo 3 días/semana → Llamada: ¿Qué falta?
🚩 Si usa <20 min/sesión → App es muy corta o aburre
🚩 Si reporta 3+ bugs → Fix urgente ASAP
🚩 Si dice "Es aburrido" → Variar misiones
🚩 Si baja su engagement semana 3 → Problema serio
```

---

## CHECKLIST FINAL (Día 1)

### Mañana del Lanzamiento

```
□ App en PC: npm run dev (testear)
□ App en móvil: PWA agregada a pantalla
□ Notificaciones: Testear en vivo
□ Backup: Base de datos de Lucía
□ Monitor: Dashboard privado en Google Sheets
□ Contacto: WhatsApp grupo José+Lucía+Alejandro
□ Energía: Tú listo para dar soporte rápido
```

### Emoción

```
NO: "Lucía, mira, hice una app de estudio aburrida"
SÍ: "Lucía, creé un JUEGO donde subes de nivel 
    estudiando para tu oposición. Juguemos?"
```

---

## DESPUÉS: FASES ALEJANDRO + GRUPO

### Semana 5-8 (Lucía + Alejandro)

```
□ Alejandro usa app (Policía Local)
□ Comparar progreso Lucía vs Alejandro
□ Grupo privado: Rankings, mensajes diarios
□ Feedback: ¿Qué falta para comunidad?
```

### Semana 9-12 (Grupo Completo)

```
□ Grupo de Alejandro (20-30 personas)
□ Ranking grupal público
□ Eventos sincronos (quizzes en vivo)
□ Viralidad: ¿Se esparcen referencias?
```

---

*Checklist vivo - Actualizar diariamente en octubre*
