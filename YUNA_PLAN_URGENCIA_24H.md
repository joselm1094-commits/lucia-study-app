# 🚨 PLAN DE URGENCIA YUNA UI — 24 HORAS

**Situación:** Domingo 4-Octubre 15:20. Lucia prueba MAÑANA 10:00 AM  
**Objetivo:** App FUNCIONAL, SIN ERRORES, lista para que Lucia estudie su oposición  
**Deadline DURO:** Lunes 5-Octubre 9:30 AM (30 min antes de Lucia)  
**Prioridad:** 🔴🔴🔴 CRÍTICA (no es "bonito", es "FUNCIONA")

---

## ⚡ FILOSOFÍA URGENCIA

```
NO PERFECCIÓN, SÍ FUNCIONAL
├─ ❌ Animaciones complejas (luego)
├─ ✅ Botones que no fallan
├─ ❌ Gradientes perfectos (luego)
├─ ✅ Interfaz legible
├─ ❌ Decorativos ilustraciones (luego)
├─ ✅ Quiz funciona 100%
├─ ❌ Colores premium (luego)
└─ ✅ Lucia puede estudiar ahora
```

---

## 📊 PRIORIDADES (ORDEN EXACTO)

### **BLOQUE 1: FUNCIONALIDAD CRÍTICA (HOY hasta 22:00)**
**Status:** ⏳ EN ACCIÓN  
**Responsable:** Informática

- [ ] **Home funciona**
  - ✅ Botón "ESTUDIAR HOY" lleva a Quiz
  - ✅ Stats (XP, Nivel) se muestran
  - ✅ Racha se ve (número + emoji)
  - ✅ NO errores en consola

- [ ] **Quiz funciona 100%**
  - ✅ Carga pregunta 1
  - ✅ Las 4 opciones son clickables
  - ✅ Al clickar respuesta correcta → se marca
  - ✅ Al clickar respuesta incorrecta → se marca
  - ✅ Botón "Siguiente" funciona
  - ✅ Llega a pregunta 10 sin fallar
  - ✅ Score final se calcula
  - ✅ NO errores en consola

- [ ] **Navegación funciona**
  - ✅ Bottom nav (Home, Quiz, Sopa, Logros)
  - ✅ Cambiar pantalla sin fallos
  - ✅ NO errores de routing

- [ ] **Imagenes/Assets**
  - ✅ Lucia descargó PNG de Yuna? (9 imágenes)
  - ✅ Están en `public/yuna/` con nombres exactos
  - ✅ Yuna aparece en Home sin errores
  - ✅ NO "imagen no cargada"

- [ ] **Deploy a Vercel**
  - ✅ Build sin errores (`npm run build`)
  - ✅ App vive en: https://lucia-study-app.vercel.app (o tu dominio)
  - ✅ Se abre sin fallos
  - ✅ NO 404 errors
  - ✅ Quiz funciona igual que local

**Entregables:**
- ✅ App corriendo en Vercel
- ✅ Link funcional para Lucia
- ✅ NO errores críticos

**KPI:** 0 bugs que impidan estudiar

---

### **BLOQUE 2: ACCESIBILIDAD BÁSICA (HOY 22:00 - MAÑANA 7:00)**
**Status:** ⏳ EN ACCIÓN  
**Responsable:** Formación

- [ ] **Texto legible**
  - ✅ Todas las preguntas se leen fácilmente
  - ✅ Tipografía ≥14px en móvil
  - ✅ Contraste suficiente (blanco en azul OK)

- [ ] **Botones funcionales en móvil**
  - ✅ Botones ≥44px (fácil tocar)
  - ✅ Espaciado entre botones (sin fallar click)
  - ✅ NO scroll horizontal (todo en un viewport)

- [ ] **Yuna no distrae**
  - ✅ Yuna en Home ✅ (motivador)
  - ✅ Yuna no aparece en cada pregunta (distrae)
  - ✅ Solo donde suma valor

**Entregables:**
- ✅ Testing con simulación de Lucia en móvil
- ✅ Notas de claridad
- ✅ Screenshot de cada pantalla

**KPI:** Lucia entiende qué hacer sin tutorial

---

### **BLOQUE 3: PULIDO BÁSICO (MAÑANA 7:00 - 9:00)**
**Status:** ⏳ EN ACCIÓN  
**Responsable:** Marketing + Engagement

- [ ] **Colores coherentes**
  - ✅ Botón principal: gradiente indigo→purple (consistente)
  - ✅ Respuesta correcta: verde
  - ✅ Respuesta incorrecta: rojo
  - ✅ NO colores random

- [ ] **Animaciones no fallan**
  - ✅ Respuesta correcta: fade a verde (200ms)
  - ✅ Respuesta incorrecta: no falla
  - ✅ NO animaciones que cuestan >1s

- [ ] **Push notification (si está lista)**
  - ✅ Buenos días a las 8:00 (OPCIONAL si funciona)
  - ✅ Si NO funciona → descativa temporalmente

**Entregables:**
- ✅ App se ve "premium casual" (no amateur)
- ✅ Sin bugs visuales

**KPI:** Lucia dice "se ve profesional"

---

## ⏰ CRONOGRAMA EXACTO

### **HOY DOMINGO 4-OCTUBRE**

| Hora | Tarea | Responsable | Status |
|------|-------|---|---|
| **15:20** | Plan creado | Dirección | ✅ |
| **15:30-16:30** | Validar Yuna PNGs descargadas | Informática | ⏳ |
| **16:30-18:00** | Integrar Yuna.tsx en Home | Informática | ⏳ |
| **18:00-19:30** | Quiz funciona 100% (testing) | Informática | ⏳ |
| **19:30-20:30** | Verificar deploy a Vercel | Informática | ⏳ |
| **20:30-21:00** | Testing rápido (Home + 3 quiz) | Formación | ⏳ |
| **21:00-22:00** | Ajustes rápidos (si fallos) | Informática | ⏳ |
| **22:00-22:30** | Build final para deploy | Informática | ⏳ |
| **22:30+** | Dormir (tú y equipo) | Todos | ⏳ |

---

### **MAÑANA LUNES 5-OCTUBRE**

| Hora | Tarea | Responsable | Status |
|------|-------|---|---|
| **07:00** | Wake-up + café | Dirección | ⏳ |
| **07:00-08:00** | Verificar app Vercel (está viva?) | Informática | ⏳ |
| **08:00-08:30** | Testing rápido simulando Lucia | Formación | ⏳ |
| **08:30-09:00** | Ajustes ÚLTIMOS (si hay bug) | Informática | ⏳ |
| **09:00-09:30** | Link listo para enviar a Lucia | Dirección | ⏳ |
| **10:00** | **LUCIA PRUEBA** 🎯 | Lucia | ⏳ |

---

## 🎯 WHAT TO DO RIGHT NOW (Ahora mismo)

**INSTRUCCIÓN 1: Verificar Yuna PNGs (15:30 - 16:30)**

Jose/Informática:
```bash
# ¿Están descargadas las 9 imágenes?
ls ~/Downloads | grep yuna

# Debería ver:
# yuna-frontend-smile.png (o jpg)
# yuna-celebrate.png
# yuna-confused.png
# yuna-study-mode.png
# yuna-applauding.png
# yuna-on-fire.png
# yuna-expressions.png
# yuna-profile.png
# yuna-sleeping.png

# Si están, moverlas a public/yuna/:
mkdir -p public/yuna
mv ~/Downloads/yuna-*.png public/yuna/
mv ~/Downloads/yuna-*.jpg public/yuna/
```

Si NO están descargadas:
- ⏰ 15 MINUTOS para descargar en Gemini (fast process)
- Abre: https://gemini.google.com
- Ve a ImageGen
- Copia primer PROMPT de `PROMPTS_GEMINI_YUNA.md`
- Genera 9 imágenes rápido (machaca los botones)

---

**INSTRUCCIÓN 2: Hacer que Yuna aparezca en Home (16:30 - 18:00)**

Informática:
```bash
cd lucia-study-app
npm run dev

# Abre localhost:3000
# Verifica:
# ✅ Yuna aparece en racha (tamaño mediano)
# ✅ NO errores en consola (F12)
# ✅ Botón "ESTUDIAR HOY" funciona

# Si hay error "imagen no cargada":
# - Verifica nombres exactos en public/yuna/
# - Reinicia servidor (Ctrl+C, npm run dev)
```

---

**INSTRUCCIÓN 3: Testing Quiz (18:00 - 19:30)**

```bash
# Abierto en localhost:3000
# Pulsa: ESTUDIAR HOY
# Ahora:
✅ Verifica pregunta 1 aparece
✅ Pulsa "25 años" (respuesta correcta)
✅ Debe volverse VERDE
✅ Pulsa "Siguiente"
✅ Pregunta 2 aparece
✅ Repite hasta pregunta 10
✅ Final score aparece

❌ Si falla en cualquier punto:
  - Abre DevTools (F12)
  - Busca error en Console
  - Avísame (copy/paste error exacto)
```

---

**INSTRUCCIÓN 4: Deploy a Vercel (19:30 - 20:30)**

```bash
# En terminal:
cd lucia-study-app

# Verificar build sin errores:
npm run build

# Si no hay errores:
git add .
git commit -m "YUNA ready for Lucia testing"
git push origin main

# Vercel se despliega automático
# Espera 2-3 minutos
# Abre: https://lucia-study-app.vercel.app
# Verifica:
✅ Home carga
✅ Yuna aparece
✅ Botón "ESTUDIAR HOY" funciona
✅ Quiz carga preguntas
✅ NO errores de 404
```

---

**INSTRUCCIÓN 5: Testing Final (20:30 - 21:00)**

Formación (tú o alguien):
```
Abre la app en móvil (no desktop):
✅ ¿Se ve bien en iPhone?
✅ ¿Puedo clickear botones fácilmente?
✅ ¿Entiendo qué hacer?
✅ ¿Las preguntas se leen?
✅ ¿Respuestas correctas se ven verdes?

Si algo no funciona:
→ Avísale a Informática (30 min para arreglar)
```

---

## 🔴 REGLA DE ORO: SI ALGO FALLA

**NO:** "Dejalo, ya lo arreglamos mañana"  
**SÍ:** "¿Qué falta? Arreglemos ahora mismo"

**Prioridad 1:** ¿Quiz funciona? SÍ/NO
- SI → Puedo dormir
- NO → Arreglar YA

**Prioridad 2:** ¿Deploy funciona?
- SI → Puedo dormir
- NO → Arreglar YA

**Prioridad 3:** ¿Se ve bonito?
- SI → Bonito, gracias
- NO → Importa CERO (mañana lo pulimos)

---

## 📊 TESTING CHECKLIST (Mañana 8:00 AM)

Antes de que Lucia abra la app:

```
CHECKLIST PRE-LUCIA (30 MINUTOS)
├─ [ ] App live en Vercel ✅
├─ [ ] Link: https://lucia-study-app.vercel.app ✅
├─ [ ] Home se abre sin 404 ✅
├─ [ ] Botón "ESTUDIAR HOY" funciona ✅
├─ [ ] Quiz carga pregunta 1 ✅
├─ [ ] Puedo clickear respuesta ✅
├─ [ ] Respuesta se marca (verde/rojo) ✅
├─ [ ] "Siguiente" lleva a pregunta 2 ✅
├─ [ ] Pregunta 10 lleva a score final ✅
├─ [ ] NO errores de 404 ✅
├─ [ ] NO errores en consola ✅
├─ [ ] Yuna visible en Home ✅
├─ [ ] Texto legible en móvil ✅
└─ [ ] Link listo para enviar a Lucia ✅

SI ALGUNO ES ❌:
→ 30 MINUTOS PARA ARREGLAR
→ Si no se puede arreglar rápido:
   Desactiva esa feature temporalmente
```

---

## 🎯 LO QUE LUCIA VA A VER MAÑANA

```
10:00 AM - Lucia abre link

PANTALLA 1: HOME
┌─────────────────────────┐
│     LOGO YUNA           │
├─────────────────────────┤
│                         │
│   [YUNA EN HOME]        │ ← Si falla, sin problema
│      RACHA: 7           │ ← CRÍTICO que funcione
│                         │
├─────────────────────────┤
│  XP HOY: 150  NIVEL: 4  │ ← CRÍTICO que funcione
├─────────────────────────┤
│  [ESTUDIAR HOY]         │ ← CRÍTICO que funcione
└─────────────────────────┘

10:01 AM - Lucia toca "ESTUDIAR HOY"

PANTALLA 2: QUIZ
┌─────────────────────────┐
│ Pregunta 3 de 10  30%   │
├─────────────────────────┤
│ ¿Cuál es la edad...?    │ ← CRÍTICO que funcione
├─────────────────────────┤
│ □ 25 años               │ ← CRÍTICO que clickee
│ □ 18 años               │
│ □ 21 años               │
│ □ 30 años               │
└─────────────────────────┘

10:05 AM - Lucia hace Quiz 10 preguntas

PANTALLA 3: SCORE FINAL
┌─────────────────────────┐
│ ¡Quiz Completado!       │
│ Puntuación: 80%         │ ← CRÍTICO que calcule
│ XP Ganado: +80          │
└─────────────────────────┘

✅ Lucia está estudiando.
✅ App funciona.
✅ NO hay errores.
✅ ÉXITO.
```

---

## 🚨 CASOS DE EMERGENCIA

### **Si algo falla mañana a las 9:45**

**Plan A (5 min fix):**
```
¿Es un CSS error?
✅ Arreglalo in-place

¿Es un JS error?
✅ Arreglalo quick (no refactorizar)

¿Es un deploy error?
✅ Re-deploy a Vercel (2 min)
```

**Plan B (si no se puede arreglar):**
```
Opción 1: Desactiva esa feature temporalmente
- Lucia estudia el quiz (lo importante)
- Logros/Sopa van mañana

Opción 2: Usa versión local
- Lucia accede a PC de Jose
- http://localhost:3000
- Quiz funciona

Opción 3: CAMBIO DE PLAN
- Lucia empieza mañana 11:00 (no 10:00)
- Te da 1 hora extra para arreglarlo
```

---

## 📞 RESPONSABLES URGENCIA

**Informática (Tech):**
- ✅ App funciona
- ✅ Deploy OK
- ✅ 0 errores críticos
- 📞 Si falla algo: avísame YA

**Formación (User Testing):**
- ✅ ¿Se entiende?
- ✅ ¿Funciona el flujo?
- 📞 Si confunde algo: avísame YA

**Dirección (Jose):**
- ✅ Coordina equipo
- ✅ Toma decisiones rápido
- ✅ Maneja cambios de plan
- 📞 Punto de contacto principal

---

## ✅ DEFINICIÓN DE "LISTO"

YUNA está **LISTA PARA LUCIA** cuando:

✅ App vive en Vercel (link funcional)  
✅ Home se abre  
✅ Botón "ESTUDIAR HOY" funciona  
✅ Quiz carga preguntas  
✅ Puedo responder 10 preguntas  
✅ Score final se calcula  
✅ NO errores de 404  
✅ NO errores en consola  
✅ Texto legible en móvil  
✅ Lucia puede estudiar su oposición SIN BLOQUES  

---

## 🎯 PUNTO DE VISTA: LUCIA

Lucia NO le importa:
- ❌ Si Yuna es "perfecto"
- ❌ Si las animaciones son suaves
- ❌ Si los colores son exactos
- ❌ Si hay decorativos ilustraciones

Lucia SÍ le importa:
- ✅ ¿Funciona?
- ✅ ¿Puedo estudiar?
- ✅ ¿Las preguntas son claras?
- ✅ ¿El app no falla a mitad de quiz?

**Nuestra misión: Lucia puede estudiar.**

---

## 📊 MÉTRICA FINAL

**Éxito = Lucia estudia 1 hora sin errores mañana 10-11 AM**

No es "¿Se ve bonito?" sino "¿Lucia puede hacer su trabajo?"

---

**Plan vigente:** Hoy (4-Oct) hasta Lunes (5-Oct) 10:00 AM  
**Responsable:** Equipo completo (especialmente Informática + Lucia)  
**Punto de contacto:** Jose (Dirección)  
**Situación:** 🚨 CRÍTICA pero MANEJABLE
