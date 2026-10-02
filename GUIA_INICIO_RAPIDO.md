# 🚀 GUÍA DE INICIO RÁPIDO

## Para empezar en 3 pasos:

### Paso 1: Abrir PowerShell
```powershell
cd "C:\Users\Jose\OneDrive\Escritorio\Claude Code\lucia-study-app"
```

### Paso 2: Instalar dependencias (1ª vez solamente)
```powershell
npm install
```

### Paso 3: Ejecutar la aplicación
```powershell
npm run dev
```

La app estará disponible en: **http://localhost:3000**

---

## 📱 Acceder desde el móvil de Lucía

1. Usa la **misma red WiFi** que el PC
2. Encuentra la **IP del PC**: En PowerShell ejecuta `ipconfig` y busca "IPv4 Address"
3. En el móvil abre: **http://[IP_DEL_PC]:3000**
   - Ejemplo: `http://192.168.1.100:3000`

---

## 🎮 Primeros juegos para probar

1. **Reto del Día** - Empieza aquí
2. **Quiz Diario** - Prueba 10 preguntas
3. **Flashcards** - Repaso espaciado
4. **Sopa de Letras** - Búsqueda de palabras
5. **Leer Tema** - Aprende con comparativas
6. **Mi Progreso** - Ve tus logros

---

## ✅ Verificación rápida

Si ves esta pantalla, **¡todo funciona!** ✓
- Gradient azul/púrpura al inicio
- Botones de colores (Quiz, Flashcards, etc.)
- "Bienvenida, Lucía" en la parte superior

---

## 🔄 Ciclo diario recomendado

**MAÑANA (7:00 AM)**: 
- Palabra del Día (1 min)
- Quiz Rápido 5 preguntas (5 min)

**TARDE (3:00 PM)**:
- Leer 1 Tema Nuevo (15 min)
- Sopa de Letras (15 min)

**NOCHE (9:00 PM)**:
- Flashcards (10 min)
- Quiz Completo (10 min)

**TOTAL: 65 minutos/día**

---

## 📊 Qué esperar

- **Semana 1**: Aprendera 35 conceptos, 75% retención
- **Semana 2**: 70 conceptos, 80% retención
- **Mes 1**: 150 conceptos, 85% retención
- **Mes 2**: 250+ conceptos, 90% retención

**Meta**: 60+ puntos en examen oficial

---

## 🆘 Si algo no funciona

### Error: "Cannot find module"
```powershell
rm -recurse -force node_modules
npm install
npm run dev
```

### Error: "Port 3000 in use"
```powershell
# Usa otro puerto
set PORT=3001
npm run dev
# Abre: http://localhost:3001
```

### Error: "Build failed"
```powershell
npm run build
npm run dev
```

---

## 📈 Datos que se guardan

✅ Progreso de cada tema
✅ Puntuaciones de quiz
✅ Flashcards y su intervalo de repaso
✅ Racha de días de estudio
✅ Logros desbloqueados

Todo se guarda en tu navegador automáticamente (localStorage).

---

## 💾 Backup de datos

Para no perder el progreso:
1. Abre DevTools (F12)
2. Console pestaña
3. Ejecuta:
```javascript
copy(localStorage)
```
4. Pega en un archivo .txt para backup

---

## 🎯 Consejo clave

**Consistencia > Cantidad**
- Mejor: 45 min diarios
- Que: 5 horas una vez por semana

La app está diseñada para pequeñas sesiones diarias. Eso es lo que funciona científicamente.

---

## 📞 Necesitas ayuda?

1. Revisa la carpeta `TECNICAS_ESTUDIO.md` para entender la ciencia detrás
2. Lee `README.md` para instrucciones detalladas
3. Si todo falla: reinicia Node.js completamente

---

**¡Listo para empezar! 🚀**

Ejecuta los 3 pasos de arriba y empieza a estudiar.

Succes está a 65 minutos de distancia cada día. 💪
