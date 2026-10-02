# 🧪 PLAN QA DETALLADO - VALIDACIÓN SEMANA 1

**Objetivo**: Verificar que app está 100% lista para Lucía antes del 5 de octubre

---

## PARTE 1: VERIFICACIÓN TÉCNICA (30 min)

### 1.1 Performance & Carga

```
TEST: ¿Carga en <2 segundos?

Pasos:
1. Abrir DevTools (F12)
2. Ir a Network tab
3. Hacer hard refresh (Ctrl+Shift+R)
4. Anotar tiempo total de carga (en la esquina)
5. Anotar tiempo del primer paint

Éxito: <2 segundos en PC, <3 segundos en móvil 4G
Fallo: >2 segundos = optimizar imágenes/código
```

### 1.2 Zero Crashes

```
TEST: ¿App se cuelga en 30 minutos de uso?

Pasos:
1. Abrir la app
2. Hacer click en cada botón (Quiz, Flashcards, Wordsearch, etc)
3. Completar una misión (ej: Palabra del día)
4. Cambiar de sección varias veces
5. Hacer scroll en temas
6. Esperar 5 minutos sin hacer nada

Éxito: Sin errores en consola (F12 → Console)
Fallo: Cualquier error rojo = BUG
```

### 1.3 Guardado Automático

```
TEST: ¿El progreso se guarda sin perder datos?

Pasos:
1. Abrir app
2. Hacer un quiz (completar 5 preguntas)
3. Anotar: Nivel, XP, Racha
4. F5 (refresh de página)
5. Verificar: ¿Los datos están igual?

Éxito: Datos idénticos después de refresh
Fallo: Algún dato cambió = localStorage no funciona
```

### 1.4 Offline Mode (PWA)

```
TEST: ¿Funciona sin internet?

Pasos:
1. Abrir DevTools (F12) → Network
2. Cambiar a "Offline" en dropdown
3. Intentar:
   - Hacer quiz
   - Completar flashcards
   - Acceder a misiones
4. Apuntar qué funciona y qué no
5. Poner online nuevamente
6. Verificar sincronización

Éxito: Core features funcionan offline
Fallo: App no responde offline = problema grave
```

### 1.5 Sincronización (Offline → Online)

```
TEST: ¿Se sincronizan datos cuando vuelve internet?

Pasos:
1. Offline mode
2. Completar un quiz (apuntar resultado)
3. Volver a online
4. Refresh (F5)
5. ¿El quiz completado aparece en el dashboard?

Éxito: Datos sincronizados correctamente
Fallo: Datos perdidos = BUG crítico
```

---

## PARTE 2: GAMIFICACIÓN (20 min)

### 2.1 XP Suma al Instante

```
TEST: ¿XP aparece inmediatamente?

Pasos:
1. Ver dashboard (apuntar XP actual)
2. Completar quiz (3 preguntas)
3. Observar: ¿XP aumenta antes de cerrar quiz?
4. Anotar la suma

Éxito: XP suma en tiempo real, con animación
Fallo: XP no suma o suma lentamente = UX mala
```

### 2.2 Racha Funciona

```
TEST: ¿La racha se cuenta y se muestra?

Pasos:
1. Ver dashboard (apuntar "Racha: X días")
2. Completar 1 misión diaria
3. ¿Aparece "🔥 Racha comenzada" o aumenta en 1?
4. Mañana: ¿Racha aumenta a 2 días?

Éxito: Racha cuenta correctamente, muestra 🔥 emoji
Fallo: Racha no aparece o no cuenta = BUG
```

### 2.3 Misiones Marcan Completadas

```
TEST: ¿Las misiones se marcan como hechas?

Pasos:
1. Abrir Misiones
2. Ver misión "Palabra del Día"
3. Hacer click (debería mostrar la palabra)
4. Cerrar
5. ¿Aparece ✅ o cambió de color?

Éxito: Misión marca como ✅ completada
Fallo: Sigue igual = bug de estado
```

### 2.4 Niveles Suben Correctamente

```
TEST: ¿Subir de nivel funciona sin errores?

Pasos:
1. Apuntar nivel actual + XP actual
2. Calcular: XP para siguiente nivel
3. Completar misiones hasta alcanzar siguiente nivel
4. ¿Aparece notificación "¡Subiste a Nivel X!"?
5. Dashboard muestra nuevo nivel

Éxito: Nuevo nivel aparece con notificación
Fallo: Nivel no actualiza = bug en progreso
```

### 2.5 Animaciones Fluidas

```
TEST: ¿Las animaciones son smoothes (no lag)?

Pasos:
1. Abrir DevTools → Performance
2. Hacer un quiz completo
3. Ver animación de XP
4. Ver animación de level up
5. Anotar: ¿Hay stutters (picos)?

Éxito: 60fps constante (ni un pico)
Fallo: Stutters o lag = optimizar animaciones
```

---

## PARTE 3: FUNCIONALIDADES CORE (25 min)

### 3.1 Quiz Califica Correctamente

```
TEST: ¿El quiz da puntos solo si aciertas?

Pasos:
1. Hacer quiz de 3 preguntas
2. Primera: Aciertas
3. Segunda: Fallas (elige opción incorrecta deliberadamente)
4. Tercera: Aciertas
5. Apuntar resultado (debería ser 2/3 = 66%)

Éxito: Porcentaje correcto, XP corresponde
Fallo: Calificación incorrecta = bug de lógica
```

### 3.2 Flashcards SM-2 Funciona

```
TEST: ¿El algoritmo de repetición espaciada funciona?

Pasos:
1. Abrir Flashcards
2. Hacer 10 cards
3. Marcar: "Fácil", "Normal", "Difícil"
4. Mañana: ¿"Difícil" aparece primero? ¿"Fácil" aparece después?

Éxito: Orden basado en dificultad = SM-2 funciona
Fallo: Orden aleatorio = no funciona SM-2
```

### 3.3 Sopa de Letras Funciona

```
TEST: ¿Se pueden encontrar y resolver todas las palabras?

Pasos:
1. Abrir Sopa de Letras
2. Hacer click en primera palabra (horizontal, vertical, diagonal)
3. Resolver 5 palabras
4. ¿Aparecen marcadas/coloreadas?
5. ¿Muestra "Completo" cuando todas se encuentren?

Éxito: Todas las palabras resolubles, UI clara
Fallo: Palabras imposibles de encontrar = bug
```

### 3.4 Tema Reader Es Legible

```
TEST: ¿Se puede leer el tema sin problemas?

Pasos:
1. Abrir "Leer Tema"
2. Scroll arriba/abajo de la página
3. Anotar: Tamaño fuente, espaciado, contraste
4. Leer 2-3 párrafos

Éxito: Texto claro, fácil de leer, sin scrolls horizontales
Fallo: Letra muy pequeña, poco contraste, layout roto
```

### 3.5 Progress Dashboard Actualiza

```
TEST: ¿Las estadísticas se actualizan en tiempo real?

Pasos:
1. Abrir "Mi Progreso"
2. Anotar: Nivel, XP, Racha, % por tema
3. Hacer 1 quiz (ej: 100% en Derecho Penal)
4. Refresh (F5)
5. ¿"Derecho Penal" ahora muestra 100%?

Éxito: Estadísticas actualizadas correctamente
Fallo: Datos viejos = no se guarda estado
```

---

## PARTE 4: UX & DISEÑO (15 min)

### 4.1 Onboarding Rápido

```
TEST: ¿Primer quiz en <5 minutos?

Pasos:
1. Limpiar localStorage (DevTools → Application → Clear)
2. Refresh (F5)
3. Cronometrar desde signup hasta primer quiz completo
4. Anotar tiempo

Éxito: <5 minutos, flujo claro
Fallo: >5 minutos = demasiadas pantallas
```

### 4.2 Botones Mobile-Friendly

```
TEST: ¿Botones son grandes en móvil?

Pasos:
1. Abrir DevTools (F12)
2. Toggle device toolbar (móvil)
3. Cambiar a iPhone 12 (375x812)
4. Hacer click en cada botón
5. ¿Todos son clickeables sin zoom?

Éxito: Botones ≥48px, sin zoom requerido
Fallo: Botones pequeños, difíciles de pulsar
```

### 4.3 Colores Accesibles

```
TEST: ¿El contraste es suficiente?

Pasos:
1. Usar https://webaim.org/resources/contrastchecker/
2. Tomar colores del dashboard (ej: texto blanco sobre fondo)
3. Verificar ratio de contraste
4. Anotar si pasa o falla

Éxito: Ratio ≥4.5:1 (legible)
Fallo: Ratio <4.5:1 = cambiar colores
```

### 4.4 Copywriting Claro

```
TEST: ¿Los textos son claros y sin errores?

Pasos:
1. Leer todos los textos del dashboard
2. Leer instrucciones de cada juego
3. Leer mensajes de error (si los hay)
4. Buscar: Faltas ortográficas, mensajes confusos

Éxito: Texto claro, sin errores, tono amigable
Fallo: Errores ortográficos = arreglar antes de Lucía
```

---

## PARTE 5: DATOS DE LUCÍA (10 min)

### 5.1 Avatar Customizable

```
TEST: ¿Hay al menos 4 opciones de avatar?

Pasos:
1. Ir a onboarding (limpiar localStorage)
2. Elegir avatar
3. Anotar: ¿Cuántas opciones hay?
4. Elegir cada una, ¿cambia en dashboard?

Éxito: ≥4 opciones, se refleja en dashboard
Fallo: <4 opciones o no se refleja = mejorar
```

### 5.2 Nombre Se Guarda

```
TEST: ¿El nombre es persistente?

Pasos:
1. Onboarding: Escribir "Lucía"
2. Anotar dónde aparece (dashboard, misiones)
3. Refresh (F5)
4. ¿"Lucía" sigue ahí?

Éxito: Nombre aparece y se guarda
Fallo: Nombre desaparece = bug de persistencia
```

### 5.3 Oposición Seleccionable

```
TEST: ¿Puedo elegir I2?

Pasos:
1. Onboarding: Elegir oposición
2. ¿Aparece "I2" en dropdown?
3. Elegirla
4. ¿Se refleja en el tema principal?

Éxito: I2 disponible, se refleja en la app
Fallo: I2 no existe o no aparece
```

### 5.4 Seguridad (localStorage)

```
TEST: ¿No hay datos sensibles en texto plano?

Pasos:
1. DevTools → Application → LocalStorage
2. Buscar: ¿Hay contraseñas, emails, tokens?
3. Debería haber solo: avatar, nombre, nivel, xp, racha

Éxito: Solo datos no-sensibles en localStorage
Fallo: Email o contraseña visible = riesgo de seguridad
```

---

## RESULTADOS ESPERADOS

### ✅ PASA (App lista para Lucía)

Deberías tener un ✅ en:
- Performance <2s
- Zero crashes
- Guardado automático
- Offline funciona
- XP suma al instante
- Racha visible
- Misiones marcan
- Niveles suben
- Quiz califica bien
- Flashcards SM-2 funciona
- Sopa de letras funciona
- Theme reader legible
- Progress actualiza
- Onboarding <5 min
- Botones mobile-friendly
- Copywriting claro
- Avatar funciona
- Nombre se guarda
- Oposición I2 disponible

### ⚠️ CASI (Pequeños ajustes)

Si tienes 1-2 ⚠️, puedes arreglarlo en 1-2 horas.

### ❌ FALLA (No lanzar)

Si tienes un ❌ (especialmente en "Zero crashes", "Guardado automático", "XP suma"):
→ **NO lanzar**. Arreglar primero.

---

## TIMELINE

**Oct 1 (Hoy)**: Instalar npm, pasar QA básico
**Oct 2**: Arreglar cualquier bug encontrado
**Oct 3-4**: Re-testear, validación final
**Oct 5**: LANZAMIENTO CON LUCÍA ✅

---

*Plan QA detallado - Ejecutar hoy*
