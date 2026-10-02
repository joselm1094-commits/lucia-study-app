# ✅ TODO HOY - QA VALIDACIÓN (Oct 1)

**Status**: Servidor levantándose ahora  
**Servidor URL**: http://localhost:3000  
**Tiempo estimado**: 2-3 horas

---

## PASO 1: ABRIR LA APP (5 min)

```
1. Abre: http://localhost:3000
2. Debería ver dashboard con botones de colores
3. Si NO carga:
   - Espera 30 seg más
   - F5 (refresh)
   - Si sigue sin cargar → hay error en build
```

---

## PASO 2: EJECUTAR QA RÁPIDO (90 min)

### Fase 1: Performance & Stabilidad (30 min)

Sigue estos 5 tests del `PLAN_QA_DETALLADO.md`:

```
1.1 Performance: ¿<2 segundos de carga?
    □ PASA
    □ FALLA → Anotar tiempo

1.2 Zero Crashes: ¿Clica todo sin errores?
    □ PASA
    □ FALLA → Anotar qué error

1.3 Guardado Automático: ¿Persiste progreso?
    □ PASA
    □ FALLA → Se perdió data

1.4 Offline Mode: ¿Funciona sin internet?
    □ PASA
    □ FALLA → No funciona

1.5 Sincronización: ¿Se sincroniza después?
    □ PASA
    □ FALLA → Data no sincroniza
```

### Fase 2: Gamificación (20 min)

```
2.1 XP Suma: ¿XP aparece al instante?
    □ PASA
    □ FALLA → No suma o muy lento

2.2 Racha: ¿Se cuenta y muestra 🔥?
    □ PASA
    □ FALLA → No aparece racha

2.3 Misiones: ¿Se marcan completas?
    □ PASA
    □ FALLA → Sigue igual

2.4 Niveles: ¿Suben correctamente?
    □ PASA
    □ FALLA → No sube nivel

2.5 Animaciones: ¿Smooth (sin lag)?
    □ PASA
    □ FALLA → Tiene stutters
```

### Fase 3: Core Features (25 min)

```
3.1 Quiz: ¿Califica correctamente?
    □ PASA
    □ FALLA → Calificación incorrecta

3.2 Flashcards: ¿SM-2 ordena bien?
    □ PASA
    □ FALLA → Orden aleatorio

3.3 Sopa de Letras: ¿Se resuelve?
    □ PASA
    □ FALLA → Palabras no se encuentran

3.4 Tema Reader: ¿Es legible?
    □ PASA
    □ FALLA → Letra pequeña/rota

3.5 Progress: ¿Actualiza en vivo?
    □ PASA
    □ FALLA → Datos viejos
```

---

## PASO 3: TESTEO DE UX (30 min)

```
4.1 Onboarding: ¿<5 minutos a primer quiz?
    Tiempo: ___ min
    □ PASA
    □ FALLA

4.2 Mobile: ¿Botones grandes en móvil?
    DevTools → Device toolbar → iPhone 12
    □ PASA
    □ FALLA

4.3 Copywriting: ¿Sin errores ortográficos?
    Errores encontrados: ___________
    □ PASA
    □ FALLA

4.4 Datos Lucía: ¿Avatar, nombre, oposición funciona?
    □ PASA
    □ FALLA
```

---

## PASO 4: DOCUMENTAR RESULTADOS (15 min)

**Abre**: `QA_REPORTE_SEMANA1.md`

Llena cada test con:
- Status: ✅ PASA / ❌ FALLA
- Resultado: Descripción breve
- Nota: Detalles extras

---

## POSIBLES RESULTADOS

### 🟢 ESCENARIO A: TODO PASA ✅

**Si todos los tests = PASA:**
→ App lista para Lucía
→ Procede a Semana 2 (Configuración)

### 🟡 ESCENARIO B: 1-2 FALLOS

**Si 1-2 tests = FALLA:**
→ Arreglable en 1-2 horas
→ Documenta bugs específicos
→ Avísame para que les dé fix

**Bugs típicos que puedo arreglar:**
- Fuente pequeña
- Typos en textos
- Colores no visibles
- Botones muy pequeños
- Animaciones lentas

### 🔴 ESCENARIO C: 3+ FALLOS O CRASH

**Si >3 tests fallan O hay crashes:**
→ NO lanzar con Lucía todavía
→ Pausa, revisamos el código
→ Refactorización según sea necesario

---

## LOGS IMPORTANTES

**Si hay error:**

Abre DevTools (F12) → Console, busca:
- Errores rojo oscuro (breaks functionality)
- Warnings amarillos (puede ignorar la mayoría)
- Errores de red (404, 500)

Copia el error completo y comparte.

---

## TIMELINE

| Hora | Qué |
|------|-----|
| Ahora | Abre http://localhost:3000 |
| +5 min | Ejecuta Fase 1 (Perf & Stability) |
| +35 min | Ejecuta Fase 2 (Gamification) |
| +60 min | Ejecuta Fase 3 (Core Features) |
| +90 min | Testea UX |
| +120 min | Documenta resultados |
| +135 min | Reporta status |

---

## BOTONES EN DASHBOARD

Cuando abras la app, deberías ver:

```
🎯 Misiones        (rosa)
📅 Reto del Día    (naranja)
❓ Quiz Diario     (azul)
🎴 Flashcards      (verde)
🔤 Sopa de Letras  (púrpura)
📚 Leer Tema       (rojo)
📊 Mi Progreso     (rosa pálido)
```

Si NO ves estos botones → hay error en compilación.

---

## SHORTCUTS DE DEVTOOLS

```
F12               → Abre DevTools
Ctrl+Shift+R      → Hard refresh (limpia caché)
Ctrl+Shift+I      → Inspector (clickea elemento)
Ctrl+Shift+K      → Console (ve errores)
Ctrl+Shift+C      → Toggle device toolbar (móvil)
```

---

## PRÓXIMO PASO DESPUÉS DE QA

**Si TODO PASA:**
→ Vamos a Semana 2: `CHECKLIST_LANZAMIENTO_LUCIA.md`
→ Semana 2 = Configurar datos de Lucía

**Si FALLOS:**
→ Compartís errores específicos
→ Yo arreglo bugs
→ Re-testeas

---

## PREGUNTAS FRECUENTES

**P: "¿El servidor dice 'ready in Xs'?"**
A: Sí, espera a que diga "✓ Ready in X.XXs"

**P: "¿Puedo testear en móvil real?"**
A: Sí, pero primero PC (más fácil con DevTools)

**P: "¿Si falla, qué me comunicas?"**
A: El error exacto de console + screenshot

**P: "¿Cuánto tarda esto?"**
A: 2-3 horas completo (90 min QA + 30 min UX + 15 min doc)

---

*Checklist ejecutable - Comienza ahora*
