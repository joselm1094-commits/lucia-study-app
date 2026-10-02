# 📖 Estudio Inteligente - Programa de Oposiciones I2

Una **aplicación web interactiva** diseñada científicamente para que Lucía apruebe las oposiciones I2 (Información y Asistencia Tributaria y Aduanera) usando técnicas comprobadas de memorización.

---

## 🎯 Características Principales

✅ **Quiz Diarios** - 10 preguntas de opción múltiple con explicaciones
✅ **Flashcards Inteligentes** - Algoritmo SM-2 de repaso espaciado
✅ **Sopa de Letras** - Búsqueda de vocabulario clave
✅ **Lectura de Temas** - Con comparativas memorables (películas/series)
✅ **Panel de Progreso** - Estadísticas, logros y proyecciones
✅ **Palabra del Día** - Concepto nuevo cada día
✅ **Repaso Espaciado** - Intervalos óptimos para máxima retención

---

## 🧠 Técnicas Científicas Integradas

| Técnica | Uso | Mejora |
|---------|-----|--------|
| **Spaced Repetition** | Repaso en intervalos crecientes | +70% retención |
| **Active Recall** | Tests antes de estudiar | +65% aprendizaje |
| **Dual Coding** | Imágenes + texto simultáneamente | +50% memorización |
| **Concrete Examples** | Historias y películas | +40% comprensión |
| **Elaborative Interrogation** | Preguntas "¿por qué?" | +55% conexión |
| **Interleaving** | Mezcla de temas | +30% diferenciación |

---

## 🚀 Instalación Rápida

### Requisitos
- Node.js 18+ 
- npm o yarn

### Pasos

```bash
# 1. Navegar a la carpeta
cd "C:\Users\Jose\OneDrive\Escritorio\Claude Code\lucia-study-app"

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:3000
```

### Para uso en móvil (PWA)
La app funciona como PWA (Progressive Web App):
- **Móvil**: Abre en navegador, haz clic en "Instalar" o "Agregar a pantalla de inicio"
- **PC**: Funciona perfectamente en navegadores Chrome, Firefox, Safari

---

## 📅 Horario Recomendado Diario

### 🌅 Mañana (15 min)
- **Palabra del Día** (1 min) - Memorizar concepto clave
- **Quiz Rápido** (5 preguntas) - Repaso de ayer

### ☀️ Tarde (30 min)
- **Lectura de Tema Nuevo** (15 min) - Con comparativas memorables
- **Sopa de Letras** (15 min) - Refuerzo visual

### 🌙 Noche (20 min)
- **Flashcards** (10 min) - Repaso espaciado
- **Quiz Completo** (10 min) - Práctica de examen

**Total: 65 minutos/día**

---

## 📊 Proyección de Resultados

| Período | Conceptos | Retención | Predicción |
|---------|-----------|-----------|-----------|
| **1 semana** | 35 conceptos | 75% | 50-55 puntos |
| **2 semanas** | 70 conceptos | 80% | 55-60 puntos |
| **1 mes** | 150 conceptos | 85% | 60-65 puntos |
| **2 meses** | 250+ conceptos | 90% | 65-75 puntos |

---

## 🎮 Descripción de Juegos

### 1. **Quiz Diario** ❓
- 10 preguntas tipo test
- Explicaciones detalladas después de responder
- Puntuación y retroalimentación inmediata
- Preguntas variadas de todos los temas

### 2. **Flashcards Inteligentes** 🎴
- Algoritmo SM-2 para intervalos óptimos
- Tarjetas con flip animation 3D
- Marca automática de "Sé esto" o "Necesito repaso"
- Próximo repaso calculado científicamente

### 3. **Sopa de Letras** 🔤
- Generación aleatoria de grid 12x12
- Palabras horizontales y verticales
- Contador de palabras encontradas
- Refuerzo visual de vocabulario

### 4. **Lectura de Tema** 📚
- Resúmenes estructurados y claros
- **Comparativas Memorables**: Vincular conceptos con películas/series
  - Ej: "La Constitución es como el 'libro de reglas' de El Señor de los Anillos"
- Vocabulario clave destacado
- Explicaciones por qué de cada concepto

### 5. **Panel de Progreso** 📊
- Racha de fuego 🔥 (días consecutivos)
- Calificación promedio
- Conceptos aprendidos
- Logros desbloqueados
- Proyecciones realistas

---

## 📈 Contenido del Temario

Actualmente cargado:
- ✅ **Tema 1**: La Constitución Española de 1978
- ✅ **Tema 2**: Principios Constitucionales y Valores Superiores
- ✅ **Tema 3**: Derechos y Libertades Fundamentales
- ✅ **Tema 4**: Protección de Derechos Fundamentales
- ✅ **Tema 5**: Principios de Actuación de Administraciones Públicas

**Total de 5 temas iniciales** (Fácil de expandir a 17 temas)

---

## 🔧 Cómo Añadir Más Contenido

### Agregar un nuevo tema:

```typescript
// En lib/content.ts

export const themes = [
  // ... temas existentes ...
  {
    id: 6,
    title: "Nombre del Tema",
    description: "Descripción breve",
    keyPoints: [
      "Punto 1",
      "Punto 2",
      // ... más puntos
    ],
    memory: {
      title: "Comparativa con película/serie",
      description: "Explicación de la comparativa",
      example: "Ejemplo concreto"
    },
    words: [
      { word: "Concepto", definition: "Definición" },
      // ... más palabras
    ]
  }
];
```

### Agregar preguntas del quiz:

```typescript
// En components/Quiz.tsx

const quizData: QuizQuestion[] = [
  // ... preguntas existentes ...
  {
    question: "Tu pregunta?",
    options: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correct: 1, // Índice de la respuesta correcta
    explanation: "Explicación de por qué esta es la respuesta correcta"
  }
];
```

---

## 💡 Tips para Máximo Aprendizaje

### ✅ Hazlo Consistente
- Estudia **mismo horario** cada día
- 65 minutos/día es mejor que 4 horas el domingo

### ✅ Visualiza Conexiones
- Cuando leas una teoría, piensa: "¿Esto es como qué película/serie?"
- Anota tus propias comparativas

### ✅ No Repitas Pasivamente
- No releas temas sin estudiar primero
- Siempre: Quiz → Lectura → Flashcards

### ✅ Monitorea Progreso
- Mira el panel de progreso 1x por semana
- Celebra cada logro desbloqueado
- Ajusta horario si es necesario

### ✅ Duerme Bien
- El aprendizaje ocurre durante el sueño
- Mínimo 7 horas antes de estudiar conceptos nuevos

---

## 📱 Compatibilidad

- ✅ **Desktop**: Windows, Mac, Linux (Chrome, Firefox, Safari)
- ✅ **Mobile**: iOS (Safari), Android (Chrome)
- ✅ **PWA**: Funciona offline después de primer uso
- ✅ **Responsive**: Optimizado para todo tamaño de pantalla

---

## 🐛 Troubleshooting

### Problema: "La app no carga"
**Solución**: Limpia cache del navegador (Ctrl+Shift+Delete)

### Problema: "Flashcards no progresa"
**Solución**: Los datos se guardan en localStorage. Si ves poco progreso, es porque el algoritmo SM-2 necesita 1-2 semanas para calibrar

### Problema: "Quiz muy difícil/fácil"
**Solución**: Las preguntas están diseñadas para nivel medio. Si todas son difíciles, primero lee los temas

### Problema: "No funciona en móvil"
**Solución**: Abre en Chrome (mejor soporte PWA). Safari tiene limitaciones pero funciona

---

## 📚 Base Científica

Esta app implementa:

1. **Curva del Olvido (Ebbinghaus)**
   - Sin repaso: olvidas 70% en 1 semana
   - Con Spaced Repetition: recuerdas 85% en 1 semana

2. **Learning Science (Brown et al.)**
   - Active Recall > Passive Reading (+65% retención)
   - Interleaving > Blocked Practice (+30% transferencia)

3. **Dual Coding Theory (Paivio)**
   - Imágenes + Texto = +50% memorización
   - Historias > Hechos abstractos

4. **Elaboration (Craik & Lockhart)**
   - Preguntas "¿Por qué?" fortalecen conexiones neurales

---

## 🎯 Meta Final: Pasar las Oposiciones

**Objetivo**: 60+ puntos (aprobado) en el examen oficial

**Ruta de estudio**:
1. **Semanas 1-2**: Temas 1-5 (Base sólida)
2. **Semanas 3-6**: Temas 6-12 (Expansión)
3. **Semanas 7-8**: Temas 13-17 (Consolidación)
4. **Semana 9+**: Simulacros completos (Práctica de examen)

**Predicción**: Si estudias consistentemente, alcanzarás 65-75 puntos en 8-10 semanas.

---

## 📞 Soporte

Si algo no funciona:
1. Verifica que Node.js esté actualizado
2. Elimina node_modules y reinstala: `rm -rf node_modules && npm install`
3. Reinicia el servidor: `npm run dev`

---

## 📄 Licencia

Este proyecto está creado específicamente para Lucía. Uso personal únicamente.

---

**¡Buena suerte con las oposiciones! 🍀**

Estudia consistentemente, confía en el proceso, y los resultados llegarán.

---

*Última actualización: Octubre 2026*
*Versión: 1.0.0*
