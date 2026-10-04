# 📋 ORDEN DE DIRECCIÓN: MEJORA UI YUNA v2.0

**Fecha:** Domingo 4-Octubre 2026, 16:20  
**De:** Dirección General (Jose)  
**Deadline:** Lunes 5-Octubre 9:00 AM  
**Prioridad:** 🔴 CRÍTICA  
**Status:** ⏳ ACCIÓN INMEDIATA  

---

## 🎯 OBJETIVO GENERAL

Lucia prueba **MAÑANA 10:00 AM**. La app funciona (✅ confirmado). Ahora:
- **Lucia puede estudiar SIN ERRORES** ✅
- **Lucia QUIERE VOLVER A ESTUDIAR** ← Esto es lo que vamos a lograr

Es decir: no es "que funcione", es "que ENGANCH**E**".

---

## 👥 DEPARTAMENTOS INVOLUCRADOS

- ✅ **Marketing + Branding** → Responsable: _____
- ✅ **Engagement & Community** → Responsable: _____
- ✅ **Formación** → Responsable: _____
- ⚠️ **Informática** → Consulta (implementación técnica)

---

## 📊 TAREAS POR DEPARTAMENTO

### **MARKETING + BRANDING**

**Misión:** La UI debe PARECER "premium casual desenfadado" (no amateur).

**Tareas (URGENTES):**

- [ ] **Validar paleta de colores** (30 min)
  - Current: Indigo (#6366F1) + Purple (#8B5CF6) + Pink (#EC4899)
  - Pregunta: ¿Estos colores se ven "premium casual" o "muy corporativo"?
  - Decisión: ¿Mantener o ajustar?
  - **Entrega:** 1 línea en Slack (mantener/cambiar)

- [ ] **Revisar colocación de Yuna** (30 min)
  - Current: Yuna NO aparece en Home (falta integración)
  - Pregunta: ¿Dónde debería aparecer Yuna sin saturar?
  - Propuesta: Home (pequeño, lado racha), Quiz (celebración), Logros (aplaudiendo)
  - **Entrega:** `YUNA_PLACEMENT_v2.md` (ubicaciones exactas)

- [ ] **Validar tone of voice** (20 min)
  - Current: Explicaciones pedagógicas + emojis en celebraciones
  - Pregunta: ¿Siente "amiga inteligente" o "profesora seria"?
  - **Entrega:** Adjetivos finales (ej: "amiga, motivadora, seria, segura")

**Entregable final:** Validación de 3 elementos (paleta, Yuna, tone)

**KPI:** Lucia dice "se ve profesional" (feedback verbal mañana)

---

### **ENGAGEMENT & COMMUNITY**

**Misión:** Mecánicas de gamificación VISIBLES. Lua debe sentir que "avanza".

**Tareas (URGENTES):**

- [ ] **Validar racha es obviamente motivadora** (20 min)
  - Current: Racha visible, número grande (7), emoji 🔥
  - Pregunta: ¿Se ve como "logro importante" o como "simple número"?
  - Propuesta: Tal vez agregar "días en racha constante" en pequeño
  - **Entrega:** Feedback en Slack (está bien / necesita cambio)

- [ ] **Validar feedback de respuestas** (20 min)
  - Current: Correcta = verde, Incorrecta = rojo, + explicación
  - Pregunta: ¿Lucia SIENTE que "acertó" o solo ve un color?
  - Propuesta: Tal vez agregar emoji ✅/❌, sonido suave (opcional)
  - **Entrega:** Propuesta de micro-interactions

- [ ] **Validar momentum entre preguntas** (20 min)
  - Current: Pregunta → Responde → Explicación → Siguiente
  - Pregunta: ¿Es ágil? ¿Mantiene el ritmo o se siente lento?
  - **Entrega:** Feedback en Slack

**Entregable final:** Reporte de "¿qué mantiene a Lucia estudiando?"

**KPI:** Lucia completa 10 preguntas sin abandonar (retención = engagement ok)

---

### **FORMACIÓN (CONTENIDO)**

**Misión:** Lucia entiende TODO sin preguntar. Accesibilidad 100%.

**Tareas (URGENTES):**

- [ ] **Testear claridad de instrucciones** (30 min)
  - Current: "ESTUDIAR HOY" → Abre modal con 4 opciones → Click "Quiz"
  - Pregunta: ¿Es obvio? ¿O Lucia se pierde?
  - **Propuesta:** Tal vez simplificar a 1-click directo a Quiz
  - **Entrega:** Feedback + propuesta de mejora

- [ ] **Validar legibilidad de preguntas** (20 min)
  - Current: Texto negro sobre fondo blanco, tamaño ~16px
  - Pregunta: ¿Se lee fácilmente en móvil? ¿Hay suficiente contraste?
  - **Entrega:** Screenshot + feedback

- [ ] **Testear flow completo** (30 min)
  - Simula ser Lucia (usuario nuevo, no sabe la app)
  - Abre app → ¿Qué haces?
  - Continúa hasta completar 3 preguntas
  - Documenta: dónde se confunde, qué es obvio, dónde fallan
  - **Entrega:** `LUCIA_TESTING_OBSERVATION.md` (3 preguntas simuladas)

**Entregable final:** Reporte de "¿está lista para usuario real?"

**KPI:** Lucia entiende qué hacer sin tutorial (claridad 100%)

---

### **INFORMÁTICA** (Consulta, no tarea urgente)

**Solo si hay fallo:**
- ❌ Si Lucia reporta lag/error mañana → Arreglás urgente
- ✅ Si todo funciona → Esperas feedback post-testing

**Pero prepara:**
- [ ] Servidor local listo mañana 9:00 AM (`npm run dev` corriendo)
- [ ] Link localhost accesible desde navegador
- [ ] DevTools abierto (para debug si es necesario)

---

## 🔄 COORDINACIÓN

**Reunión síncrona:** NO (urgencia, trabajan en paralelo)

**Comunicación:**
- Marketing → Slack #ui-yuna (decisiones de color/Yuna)
- Engagement → Slack #ui-yuna (mecánicas de gamificación)
- Formación → Slack #ui-yuna (testing observations)
- Todos → Responden en 20 min máximo (es URGENTE)

**Conflictos:**
- Marketing propone "Yuna grande en Home"
- Engagement dice "distrae del Quiz"
- **Dirección decide:** Yuna pequeño, lado derecho (no interfiere)

---

## ✅ CRITERIOS DE ACEPTACIÓN

Orden se cierra cuando:

- ✅ Marketing validó: paleta OK, Yuna placement OK, tone OK
- ✅ Engagement validó: racha es motivadora, feedback es claro, ritmo es ágil
- ✅ Formación validó: Lucia entenderá qué hacer, accesibilidad OK
- ✅ Informática confirmó: servidor listo para mañana 9:00 AM
- ✅ Dirección autorizó cambios (si los hay)

---

## 📱 TESTING FINAL MAÑANA 8:00 AM

Con todos los feedbacks de hoy, aplicar cambios RÁPIDAMENTE:

1. **08:00** - Equipo completo online
2. **08:00-08:20** - Aplicar cambios (si los hay)
3. **08:20-08:40** - Testing rápido (Home + 5 Quiz)
4. **08:40-09:00** - Ajustes finales
5. **09:00** - **SERVIDOR LISTO PARA LUCIA**

---

## 🎯 EL GRAN CUADRO

**Hoy 16:20:** Departamentos validan UI  
**Hoy 22:00:** Cambios aplicados (si es necesario)  
**Mañana 08:00:** Testing final  
**Mañana 10:00:** **LUCIA PRUEBA**  
**Mañana 11:00:** Lucia está estudiando su oposición 🎯

---

## 📞 ESCALACIÓN

**Si alguien dice:**
- "No tengo tiempo" → Dirección asigna recurso
- "Necesito más gente" → Dirección autoriza horas extra
- "Es imposible" → Dirección toma decisión (simplifica requerimiento)

**Punto de contacto:** Jose (Dirección)

---

**Orden válida hasta:** Lunes 5-Octubre 9:00 AM  
**Responsable:** Cada jefe de depto (en su área)  
**Aprobado por:** Jose, Dirección General
