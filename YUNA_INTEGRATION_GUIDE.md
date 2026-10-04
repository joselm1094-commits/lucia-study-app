# 🐕 YUNA INTEGRATION GUIDE

**Guía completa de integración de Yuna en la app**

---

## 📂 Paso 1: Crear Carpeta de Assets

```bash
# En la terminal, desde raíz del proyecto:
mkdir -p public/yuna
```

---

## 📥 Paso 2: Descargar Imágenes de Gemini

Usa los PROMPTS en `PROMPTS_GEMINI_YUNA.md` para generar las imágenes en Google Gemini.

Una vez descargadas, guárdalas en `public/yuna/` con estos nombres exactos:

```
public/yuna/
├── yuna-frontend-smile.png      (Vista frontal sonriendo)
├── yuna-celebrate.png            (Celebrando)
├── yuna-confused.png             (Confundida)
├── yuna-study-mode.png           (Modo estudio con gafas)
├── yuna-applauding.png           (Aplaudiendo)
├── yuna-on-fire.png              (Racha en fuego)
├── yuna-expressions.png          (Mini expressions sheet)
├── yuna-profile.png              (Vista lateral)
└── yuna-sleeping.png             (Durmiendo)
```

---

## 🔧 Paso 3: Componente Yuna Listo

✅ **Ya creado:** `components/Yuna.tsx`

Este componente ya tiene:
- 7 tipos de expresiones diferentes
- Soporte para tamaños (small, medium, large)
- Animaciones automáticas
- Componentes especializados (YunaMini, YunaHero, YunaInteractive)

---

## 🎯 Paso 4: Usar Yuna en Componentes

### En Homepage (app/page.tsx)

Agregar en la sección de Racha:

```tsx
import { YunaHero } from '@/components/Yuna';

// En la sección de racha:
<YunaHero expression="on-fire" />
```

### En Quiz (components/Quiz.tsx)

**En respuesta correcta:**
```tsx
import { Yuna } from '@/components/Yuna';

// Cuando isCorrect:
<Yuna expression="celebrate" size="large" animated />

// Y luego applaud
<Yuna expression="applaud" size="medium" animated />
```

**En respuesta incorrecta:**
```tsx
<Yuna expression="confused" size="medium" animated />
```

**En modo estudio:**
```tsx
<Yuna expression="study" size="medium" />
```

### En Notificaciones

```tsx
import { YunaMini } from '@/components/Yuna';

// Push notification:
<YunaMini expression="applaud" />
```

### En Misiones/Achievements

```tsx
import { Yuna } from '@/components/Yuna';

// Achievement unlock:
<Yuna expression="celebrate" size="large" animated />
```

---

## 📝 Ejemplos de Uso Completo

### Ejemplo 1: Homepage con Yuna

```tsx
'use client';
import { YunaHero } from '@/components/Yuna';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Racha Section */}
      <div className="card-elevated text-center">
        <YunaHero expression="on-fire" />
        
        <p className="text-5xl font-black text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-2">
          {studyStreak}
        </p>
        <p className="text-slate-600">días en racha constante</p>
      </div>
    </div>
  );
}
```

### Ejemplo 2: Quiz con Yuna Interactiva

```tsx
'use client';
import { Yuna, YunaInteractive } from '@/components/Yuna';
import { useState } from 'react';

export default function Quiz() {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (index: number) => {
    const correct = index === question.correctIndex;
    setIsCorrect(correct);
    setAnswered(true);
  };

  return (
    <div>
      {/* Yuna reacciona */}
      {answered && (
        <div className="mb-6 flex justify-center">
          <Yuna 
            expression={isCorrect ? "celebrate" : "confused"}
            size="large"
            animated
          />
        </div>
      )}

      {/* Resto del quiz */}
      {answered && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p>{question.explanation}</p>
        </div>
      )}

      {answered && (
        <button onClick={handleNext}>
          Siguiente →
        </button>
      )}
    </div>
  );
}
```

### Ejemplo 3: Yuna en Logros

```tsx
'use client';
import { Yuna } from '@/components/Yuna';

export function AchievementUnlock({ achievement }: { achievement: string }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center animate-fade-in">
      <div className="card-elevated text-center">
        <Yuna expression="celebrate" size="large" animated />
        
        <h2 className="text-2xl font-black mt-4">
          ¡Logro Desbloqueado!
        </h2>
        <p className="text-slate-600 mt-2">{achievement}</p>
      </div>
    </div>
  );
}
```

---

## 🎬 Expresiones Disponibles

| Expresión | Uso |
|-----------|-----|
| `smile` | Inicio, saludos, neutral |
| `celebrate` | Respuesta correcta, logros |
| `confused` | Respuesta incorrecta, ayuda |
| `study` | Modo estudio, concentración |
| `applaud` | Congratulaciones, apoyo |
| `on-fire` | Racha alta, motivación |
| `sleep` | Descanso, fin de sesión |
| `profile` | Perfil del usuario |

---

## 🎨 Tamaños Disponibles

| Tamaño | Uso |
|--------|-----|
| `small` (80x80) | Iconos, notificaciones, inline |
| `medium` (150x150) | Quiz, explicaciones, UI |
| `large` (300x300) | Hero sections, celebraciones |

---

## 🎯 Componentes Especializados

### YunaMini
Para elementos pequeños:
```tsx
<YunaMini expression="applaud" />
```

### YunaHero
Para secciones principales:
```tsx
<YunaHero expression="on-fire" />
```

### YunaInteractive
Reacciona automáticamente:
```tsx
<YunaInteractive 
  isCorrect={isCorrect}
  isStudying={isStudying}
  hasStreak={streak > 5}
  isCelebrating={showCelebration}
/>
```

---

## 📋 Checklist de Integración

- [ ] Carpeta `public/yuna/` creada
- [ ] 9 imágenes de Yuna descargadas y nombradas correctamente
- [ ] Componente `Yuna.tsx` listo (✓ ya hecho)
- [ ] Yuna integrada en Homepage
- [ ] Yuna reacciona en Quiz (correcto/incorrecto)
- [ ] Yuna aparece en celebraciones
- [ ] Yuna en notificaciones
- [ ] Yuna en logros
- [ ] Testear en móvil

---

## 🚀 Próximos Pasos

1. **Genera las imágenes** en Gemini usando los PROMPTS
2. **Guárdalas** en `public/yuna/`
3. **Confirma** que tengas los 9 archivos
4. **Avísame** y yo integro en toda la app

Todo lo demás ya está listo ✓

---

## 💡 Tips Técnicos

### Next.js Image Component
El componente Yuna usa `next/image` para:
- ✅ Lazy loading automático
- ✅ Optimización de imágenes
- ✅ Carga progresiva
- ✅ Soporte responsive

### Animaciones
Automáticas para cada expresión:
- smile: fade in
- celebrate: bounce
- confused: slide down
- study: fade in
- applaud: scale in
- on-fire: glow
- sleep: fade in

### Accesibilidad
- Alt text automático
- Decorative images marked properly
- No afecta layout (fixed dimensions)

---

## 🐛 Troubleshooting

### "Imágenes no se cargan"
```
1. Verifica que la carpeta public/yuna/ exista
2. Verifica que los nombres sean exactos
3. Reinicia el servidor (npm run dev)
```

### "Imágenes distorsionadas"
```
1. Asegúrate que sean PNG
2. Que tengan fondo transparente
3. Que sean al menos 512x512px
```

### "Animaciones no funcionan"
```
1. Verifica que animated={true} esté en props
2. Revisa la consola del navegador
3. Recarga la página (F5)
```

---

## 📞 Soporte

Si algo no funciona, avísame con:
- Nombre del archivo que falla
- Error exacto en consola
- Screenshot

¡Yuna pronto estará en toda la app! 🎉
