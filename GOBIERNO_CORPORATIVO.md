# ⚖️ GOBIERNO CORPORATIVO & TOMA DE DECISIONES

**Cómo funcionan los 8 departamentos juntos**  
**Autoridad, Responsabilidad, Escalación de Riesgos**

---

## 🎯 PRINCIPIOS FUNDAMENTALES

### 1. AUTONOMÍA DENTRO DE GUARDARRAÍLES

Cada departamento **toma decisiones propias** dentro de su presupuesto y área, pero:
- ✅ Respeta las decisiones de Dirección
- ✅ Informa de riesgos INMEDIATAMENTE
- ✅ Coordina con otros departamentos
- ✅ Da datos, no intuiciones

**Ejemplo**: Marketing puede gastar €100 en Google Ads sin aprobación.  
**Pero**: Si gasta €500, requiere aprobación de Finanzas y aviso a Dirección.

### 2. DECISIONES CENTRALIZADAS EN DIRECCIÓN

Dirección José toma:
- Pivots de estrategia
- Cambios de pricing
- Expansión a nuevos mercados
- Shutdown de features
- Cambios organizacionales

**Base**: Data de todos los departamentos, NO intuición.

### 3. JURÍDICO SUPERVISA TODO

Jurídico puede frenar cualquier iniciativa si hay **riesgo legal**, sin necesidad de aprobación de Dirección.

**Ejemplo**: Jurídico: "No podemos usar este contenido de la academia X sin permiso"  
→ Feature se pausa hasta resolver.

---

## 📊 MATRIZ DE AUTORIDAD

| Decisión | Autoridad | Reporte a | Condición |
|----------|-----------|-----------|-----------|
| Cambio pricing | Dirección | Finanzas datos | >€500/mes impacto |
| Nuevo feature | Producto | Dirección | Si <2 semanas dev |
| Pausa feature | Jurídico | Dirección | Si riesgo legal |
| Inversión <€100 | Cada depto | Finanzas | Dentro presupuesto |
| Inversión >€200 | Finanzas | Dirección | Requiere votación |
| Hire/Fire | Dirección | RRHH (future) | Quórum si >3 personas |
| Comunicado público | Marketing | Dirección | Review 24h antes |
| Pivotabinario | Dirección | Consejeros (future) | No hay conflictos |

---

## 🔄 FLUJOS DE DECISIÓN

### A. Decisión RÁPIDA (< 24 horas)

```
Problema:        BUG EN RACHA
        ↓
Detectado:       Engagement notifica
        ↓
Escalación:      Producto investiga (2h)
        ↓
Solución:        Fix + deploy (4h)
        ↓
Comunicación:    Email a usuarios afectados (24h)
        ↓
Post-mortem:     ¿Qué falló? (Viernes)
```

### B. Decisión MEDIA (2-7 días)

```
Idea:            "Agregar coaching IA"
        ↓
Proponente:      Engagement (retención ↑)
        ↓
Stakeholders:    Producto (desarrollo), Finanzas (coste), IP (legality)
        ↓
Datos:           Engagement: +15% conversión potencial
                 Producto: 20h desarrollo
                 Finanzas: €300 (API IA)
                 IP: ✅ Legal
        ↓
Dirección:       ✅ "Sí, lo hacemos en Fase 2"
        ↓
Ejecución:       Producto planifica sprint, presupuesto aprobado
```

### C. Decisión ESTRATÉGICA (2-4 semanas)

```
Pregunta:        "¿Expandimos a Italia?"
        ↓
Investigación:   IP/Research analiza mercado (1 semana)
                 - Tamaño mercado: €500M
                 - Competencia: 3 apps (OpositaTest similar)
                 - Legislación: educación descentralizada
                 - CAC: estimado 2x más caro
        ↓
Consulta:        Todos los departamentos opinan (3 días)
                 - Producto: "6 meses de desarrollo"
                 - Marketing: "Oportunidad"
                 - Finanzas: "Requiere €50k inversión"
                 - Jurídico: "Nuevas regulaciones a revisar"
        ↓
Decisión:        Dirección con data, toma decisión
                 "Posponer a 2027 cuando seamos más fuertes"
        ↓
Plan B:          "Exploremos primero Portugal (mercado 2x menor, misma lengua)"
        ↓
Ejecución:       IP lidera, Marketing apoya con pequeño presupuesto
```

---

## ⚠️ ESCALACIÓN DE RIESGOS

### RIESGO VERDE (Bajo) → No escalar
- Cambio UI menor
- Feature pequeño en roadmap
- Presupuesto dentro del 5% del plan
- Sin impacto legal

**Acción**: Departamento resuelve, avisa en reunión semanal.

### RIESGO AMARILLO (Medio) → Escalar a Dirección
- Cambio estratégico pequeño
- Presupuesto +20% del plan
- Riesgo legal menor
- Impacta >1 departamento

**Acción**: Reunión urgente, Dirección decide en 24h.

### RIESGO ROJO (Alto) → Escalar INMEDIATAMENTE
- Data breach o vulnerabilidad
- Cambio estratégico masivo
- Presupuesto +50% del plan
- Riesgo legal crítico
- Competidor ataque masivo

**Acción**: Call urgente, decisión ASAP, comunicación a usuarios/stakeholders.

---

## 📞 ESTRUCTURA DE COMUNICACIÓN

### CANALES FORMALES

**Slack (Tiempo real)**
```
#general: Anuncios empresa
#engineering: Producto & Ops
#marketing: Marketing & Redes
#content: Contenido
#finance: Finanzas
#urgent: Escalaciones críticas
```

**Reuniones Síncronas**
```
Lunes 10:00 AM:  Weekly standup (todos, 1h)
Martes 15:00:    Marketing deep dive (si needed)
Miércoles 14:00: Product review (si needed)
Viernes 16:00:   Post-mortem (bugs/issues)
```

**Documentación**
```
Google Docs: Decisiones estratégicas
Google Sheets: KPIs & metrics
GitHub: Features/bugs técnicos
Notion: Documentación central
```

### ESCALACIÓN DIRECTA

Cuando es URGENTE (riesgo rojo):
- Mencion directa a José en Slack
- Call de voz/video
- Mensaje de texto si muy urgente
- Call con todos involucrados

---

## 🎖️ RESPONSABILIDAD Y ACCOUNTABILITY

### CADA DEPARTAMENTO ES RESPONSABLE DE:

**Producto & Ops**
- App funciona sin bugs críticos
- Deployment es seguro (testing)
- Performance <2s load time
- Escalabilidad (10x usuarios)

**Marketing**
- CAC target alcanzado
- ROI positive en cada canal
- Crecimiento de usuarios en target
- Brand consistency

**Contenido**
- 100% accuracy de respuestas
- Nuevas oposiciones cómo planeado
- Contenido actualizado legalmente
- Progresión lógica de dificultad

**IP/Research**
- Inteligencia competitiva actualizada
- Oportunidades identificadas a tiempo
- Riesgos anticipados
- Market trends monitoreados

**Finanzas**
- Presupuesto sincronizado con realidad
- Gastos <5% varianza del plan
- Proyecciones precisas (±20%)
- ROI reportado correctamente

**Engagement**
- Churn < target (10%)
- D7/D30 retention en rango
- Problemas de usuarios resueltos <2h
- NPS > 50

**Jurídico**
- 0 acciones legales
- Compliance al 100%
- Riesgos identificados antes de materializarse
- Contratos listos a tiempo

---

## 📈 MÉTRICAS DE SALUD DEPARTAMENTAL

Se revisan **SEMANALMENTE** en standup:

| Departamento | Métrica Verde | Métrica Amarilla | Métrica Roja |
|---|---|---|---|
| **Producto** | <2 bugs/semana | 3-5 bugs | >5 bugs / 1 crítico |
| **Marketing** | CAC €1-3 | CAC €3-5 | CAC >€5 |
| **Contenido** | 0 errores | 1-2 errores | >2 errores / accuracy <95% |
| **Finanzas** | Gasto ±5% | Gasto ±10% | Gasto >15% |
| **Engagement** | Churn <10% | Churn 10-12% | Churn >12% |
| **IP** | Reporte mensual | Reporte retrasado | No hay reporte |
| **Jurídico** | 0 issues | 1 issue menor | 1+ issues críticos |

Si métrica = **Rojo** → Reunión urgente de Dirección + ese departamento.

---

## 🤝 COORDINACIÓN ENTRE DEPARTAMENTOS

### A. Producto ↔ Marketing
```
Marketing: "Necesitamos ranking grupal en 2 semanas"
Producto: "Ok, 10h dev + 4h testing, costo €50 hosting"
Marketing: "Genial, lo promociono en lanzamiento"
Resultado: Feature lanzado + marketing coordin­ado
```

### B. Contenido ↔ Engagement
```
Engagement: "Usuarios abandonan en pregunta 47"
Contenido: "Está mal redactada, la reescribo"
Engagement: "Monitoreamos si sube conversion"
Resultado: +5% completion
```

### C. Finanzas ↔ Todos
```
Finanzas: "Presupuesto de Octubre exhausto en día 20"
Todos: Reducen/priorizan gastos
Resultado: Noviembre mejor planificado
```

### D. Jurídico ↔ Producto
```
Jurídico: "Este API de analytics guarda datos sin consentimiento"
Producto: "Pausamos integración, agregamos consentimiento"
Resultado: RGPD compliant
```

---

## 🏆 ALINEAMIENTO ESTRATÉGICO

Cada trimestre:

1. **Dirección** define OKRs (Objetivos & Key Results)
2. **Cada departamento** propone KRs que le atañen
3. **Revisión cruzada**: ¿Están alineados?
4. **Ejecución** con reuniones semanales
5. **Revisión mensual**: ¿Vamos en ruta?

### Ejemplo OKR Trimestre 1

```
OBJETIVO: Validar que app es adictiva (Lucia + 99 usuarios)

KEY RESULTS:
├─ Lucia: 30 días racha + 50 min/día promedio
├─ 100 usuarios totales
├─ 5+ usuarios Premium (5% conversion)
├─ D7 retention 40%+
└─ 0 issues legales

DEPARTAMENTOS RESPONSABLES:
├─ Producto: App <2s, sin bugs críticos
├─ Marketing: 99 usuarios via grupo + boca a boca
├─ Contenido: 50 preguntas I2 100% accuracy
├─ Engagement: Racha visible, notificaciones tuned
├─ Jurídico: Privacy policy publicada
└─ Finanzas: Presupuesto €700/mes no excedido
```

---

## 🚨 CRISIS MANAGEMENT

Si hay crisis (data breach, legal, mala prensa):

1. **Jurídico** asume liderazgo inmediato
2. **Dirección** autoriza respuesta
3. **Marketing** prepara comunicado
4. **Todos** en call urgente

**Protocolos pre-preparados**:
- Data breach response (en 1h)
- Legal threat response (en 2h)
- Bad press response (en 4h)
- Refund request flood (manual)

---

## 📋 CONCLUSIÓN

Este gobierno corporativo asegura:

✅ **Autonomía** → Cada uno toma decisiones rápido  
✅ **Alineamiento** → Todos tiran hacia el mismo objetivo  
✅ **Riesgo mitigado** → Jurídico supervisa, Dirección escala  
✅ **Accountability** → Cada depto responde por sus métricas  
✅ **Velocidad** → Decisiones claras, no comités lentos  
✅ **Comunicación** → Flujos definidos, no caos

**En 3 meses**: De Lucia (1 usuario) a 1,000+ usuarios, +€800/mes ingresos.

**Base**: Estructura clara, gente competente, datos, y decisiones rápidas.

---

**Documento creado: 3-oct-2026**
