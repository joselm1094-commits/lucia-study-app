# 🔌 APIs & AUTOMATIZACIÓN 24/7

**Máquina funcionando automáticamente, sin intervención humana**  
**Errores detectados y resueltos al instante**

---

## 🏗️ ARQUITECTURA AUTOMATIZADA

```
Cloud (Vercel) → GitHub Actions (schedulers) → APIs → Database/Services
                                              ↓
                                           Slack alerts
                                           (si hay error)
```

---

## 1️⃣ DIRECTORIO DE APIs POR FUNCIÓN

### A. CONTENIDO (Actualización automática temario)

#### BOE.es Monitoring
```
API: BOE.es RSS Feed (GRATIS)
URL: https://www.boe.es/rss/boe.xml
Función: Monitorear cambios legales
Frecuencia: DIARIA (00:30 AM)
Parsear: Búsqueda por palabra clave (policía, tributario, etc.)
Acción: Si cambio legal detectado:
  1. Slack alert a Jurídico
  2. Tag en Contenido: "URGENTE - Revisar BOE"
  3. Flag: "Temario potencialmente outdated"
```

**Implementación**:
```javascript
// GitHub Actions: .github/workflows/boe-monitor.yml
name: BOE Daily Monitor
on:
  schedule:
    - cron: '30 0 * * *'  # 00:30 UTC cada día

jobs:
  monitor:
    runs-on: ubuntu-latest
    steps:
      - name: Fetch BOE RSS
        run: |
          curl https://www.boe.es/rss/boe.xml | grep -i "policía\|tributario" > changes.txt
      - name: If changes found, alert
        if: hashFiles('changes.txt') != ''
        run: |
          curl -X POST $SLACK_WEBHOOK \
            -H 'Content-type: application/json' \
            -d '{"text":"🚨 Cambio legal detectado en BOE. Revisar temario."}'
        env:
          SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
```

**Costo**: €0 (GitHub Actions gratis)

---

#### Gemini API - Generación de preguntas
```
API: Google Gemini (Tier gratuito generoso)
Función: Generar 10 preguntas tipo test diarias
Frecuencia: CADA MADRUGADA (02:00 AM)
Input: "Tema: Artículos 1-10 Ley Policía Local"
Output: JSON con 10 preguntas + respuestas correctas
Destino: Database Supabase

Parámetros:
- Temperatura: 0.7 (creativo pero coherente)
- Max tokens: 2,000
- Formato: JSON estandarizado
```

**Implementación**:
```javascript
// GitHub Actions + Node.js Cloud Function
const {GoogleGenerativeAI} = require("@google/generative-ai");
const supabase = require('@supabase/supabase-js');

async function generateQuestions() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({model: "gemini-pro"});
  
  const topic = getTodaysTopic(); // "Ley Policía Local - Artículos 1-10"
  
  const prompt = `Genera 10 preguntas tipo test sobre: ${topic}
  Formato JSON:
  [
    {
      "id": 1,
      "question": "¿Cuál es el artículo X?",
      "options": ["A", "B", "C", "D"],
      "correct": "A",
      "explanation": "Porque..."
    }
  ]`;
  
  const result = await model.generateContent(prompt);
  const questions = JSON.parse(result.response.text());
  
  // Guardar en Supabase
  await supabase.from('questions').insert(questions);
  
  console.log("✅ 10 preguntas generadas");
}

// Ejecutar todos los días a las 02:00
```

**Costo**: €0 (Gemini gratis hasta X tokens/mes)

---

### B. USUARIOS & RETENCIÓN (Notificaciones automáticas)

#### OneSignal - Push Notifications
```
API: OneSignal (GRATIS hasta 10k seguidores)
Función: Notificaciones automáticas de racha
Frecuencia: 2x/día (8:00 AM + 23:50 PM)

SLOT 1 (08:00 AM):
├─ Trigger: Usuario tiene racha > 0 días
├─ Mensaje: "Buenos días {name}. Tu racha: {streak} 🔥"
├─ Target: Only users with streak > 0
└─ Expected open rate: 25-30%

SLOT 2 (23:50 PM):
├─ Trigger: Usuario tiene racha > 3 días
├─ Mensaje: "⚠️ Última hora para mantener racha de {streak} días"
├─ Target: Only users with streak > 3
└─ Expected open rate: 60-70%
```

**Implementación**:
```javascript
// Supabase Scheduled Function (cron)
// runs 08:00 y 23:50 UTC

const oneSignal = require('onesignal-node');

async function sendNotifications() {
  const client = new oneSignal.Client({
    userAuthKey: process.env.ONESIGNAL_API_KEY,
    app: { appAuthKey: process.env.ONESIGNAL_APP_KEY, appId: process.env.ONESIGNAL_APP_ID }
  });
  
  // Get users with streak > 0
  const users = await supabase
    .from('users')
    .select('onesignal_id, username, current_streak')
    .gt('current_streak', 0);
  
  const notification = new oneSignal.Notification({
    contents: {
      en: `Buenos días ${users.username}. Tu racha: ${users.current_streak} 🔥`
    },
    include_external_user_ids: [users.onesignal_id]
  });
  
  await client.createNotification(notification);
  console.log("✅ Notificaciones enviadas");
}
```

**Costo**: €0 (hasta 10k)

---

### C. DATOS & SEGUIMIENTO (Analytics automático)

#### Posthog Analytics (self-hosted)
```
API: Posthog (GRATIS open source)
Función: Tracking automático de eventos
Eventos clave:
  - quiz_started, quiz_completed, quiz_failed
  - streak_maintained, streak_broken
  - premium_converted
  - app_opened, session_closed

Análisis automático:
  - Daily: DAU, session length, retention D1/D7/D30
  - Weekly: Churn, feature usage, conversion funnels
  - Monthly: Cohort analysis, trends
```

**Implementación**:
```javascript
// Supabase + Posthog client SDK
import posthog from 'posthog-js';

// Auto-track
posthog.init('API_KEY', {
  api_host: 'https://your-posthog.com'
});

// En cada acción de usuario
posthog.capture('quiz_completed', {
  quiz_id: quizId,
  time_taken: seconds,
  correct_answers: correctCount,
  streak_before: streakBefore,
  streak_after: streakAfter
});

// Dashboard automático: /analytics (genera reportes diarios)
```

**Costo**: €0 (self-hosted)

---

### D. MONETIZACIÓN (Pagos automáticos)

#### Stripe Webhooks
```
API: Stripe (Pagos, 2.2% + €0.30)
Función: Procesar pagos Premium
Webhooks automáticos:
  - charge.succeeded: Usuario paga, activa Premium
  - charge.failed: Reintentar en 3 días
  - customer.subscription.deleted: Cancelar Premium

Acciones automáticas:
  1. charge.succeeded → Database: set is_premium=true
  2. Slack: "💰 Nueva suscripción: {name} - {amount}"
  3. MRR actualizado en tiempo real
  4. Email de bienvenida a Premium (automático)
```

**Implementación**:
```javascript
// Webhook endpoint en Vercel
export default async function handler(req, res) {
  const sig = req.headers['stripe-signature'];
  const event = stripe.webhooks.constructEvent(
    req.body, sig, process.env.STRIPE_WEBHOOK_SECRET
  );

  if (event.type === 'charge.succeeded') {
    const charge = event.data.object;
    
    // Update database
    await supabase
      .from('users')
      .update({ is_premium: true, premium_until: addMonths(new Date(), 1) })
      .eq('stripe_customer_id', charge.customer);
    
    // Update MRR
    await updateMRR();
    
    // Slack alert
    await slack.sendMessage(`💰 ${charge.customer} suscrito - ${charge.amount/100}€`);
  }
  
  res.json({received: true});
}
```

**Costo**: 2.2% + €0.30 por transacción (paga solo si hay ingresos)

---

## 2️⃣ MONITOREO LEGAL & COMPLIANCE (Automático)

### BOE.es Scraping + Análisis
```
Función: Detectar cambios legales que afecten el negocio

Buscar automáticamente:
- Cambios en leyes de oposiciones
- Cambios en reglamentación RGPD/datos
- Cambios en regulación educativa
- Cambios en impuestos (IVA, IS)

Frecuencia: DIARIA (00:30 AM)
Acción: Si cambio detectado:
  1. Slack alert urgente a Jurídico
  2. Crear ticket en GitHub (label: "LEGAL-URGENT")
  3. Bloquear feature relacionada (si necesario)
```

**Implementación**:
```javascript
// GitHub Actions: .github/workflows/legal-monitor.yml
name: Legal Compliance Monitor
on:
  schedule:
    - cron: '30 0 * * *'

jobs:
  monitor:
    runs-on: ubuntu-latest
    steps:
      - name: Check BOE changes
        run: |
          curl https://www.boe.es/rss/boe.xml | \
          grep -i -E "policía|oposición|tributario|aduanas|rgpd|protección datos" > legal_changes.txt
          
          if [ -s legal_changes.txt ]; then
            echo "🚨 Cambio legal detectado"
            curl -X POST $SLACK_WEBHOOK \
              -d '{"text":"🚨 URGENTE: Cambio legal en BOE. Revisar inmediatamente.","attachments":[{"text":"'$(cat legal_changes.txt)'"}]}'
          fi
```

**Costo**: €0

---

### RGPD Compliance Checker
```
Función: Verificar que app cumple RGPD (automático)

Checklist automático diario:
- ✅ Privacy policy presente y accesible
- ✅ Términos de servicio presentes
- ✅ Cookie consent working (si aplica)
- ✅ User data encryption in transit (HTTPS only)
- ✅ User deletion working (DPIA compliance)
- ✅ No datos personales en logs
- ✅ Analytics consent obtained

Si alguno falla: Slack alert + bloquear deploys
```

**Implementación**:
```javascript
// Supabase Function: runs daily at 06:00 AM
async function rgpdComplianceCheck() {
  const checks = {
    privacy_policy: await checkExists('/privacy'),
    terms_of_service: await checkExists('/terms'),
    https_only: await checkHttpsOnly(),
    data_encryption: await checkDataEncryption(),
    user_deletion: await testUserDeletion(),
    no_pii_in_logs: await checkLogsForPII(),
  };
  
  const failed = Object.entries(checks).filter(([k, v]) => !v);
  
  if (failed.length > 0) {
    await slack.send(`⚠️ RGPD Check failed: ${failed.map(f => f[0]).join(', ')}`);
    // Bloquear deploys hasta resolver
    process.exit(1);
  }
}
```

**Costo**: €0

---

## 3️⃣ ERROR DETECTION & AUTO-FIX

### Sentry Error Tracking
```
API: Sentry (GRATIS plan)
Función: Detectar errores automáticamente

Cada error genera:
1. Slack alert (severity based)
2. GitHub issue (auto-created)
3. Email a desarrollador (si crítico)

Errores críticos (BLOQUEADORES):
- App crash
- Database connection failed
- Payment processing failed
- Authentication broken

Errores menores:
- Broken image links
- Slow API response
- Invalid user input
```

**Implementación**:
```javascript
// Next.js + Sentry
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Capture errors
try {
  riskyOperation();
} catch (error) {
  Sentry.captureException(error, {
    severity: 'critical',
    tags: {
      module: 'quiz',
      user_id: userId
    }
  });
}
```

**Costo**: €0 (free plan)

---

### Health Checks (Automático)
```
Función: Verificar que app está "viva" cada 5 minutos

Monitorea:
- API response time (<2s OK, >5s ALERT)
- Database connectivity
- Payment processor status
- Email service status
- Auth service status

Si algo falla:
1. Retry automáticamente (3x)
2. Si sigue fallando → Slack URGENT
3. Si Payment falla → Bloquear signups
```

**Implementación**:
```javascript
// Vercel Cron: every 5 minutes
export async function healthCheck(req, res) {
  const checks = {
    api: await ping('https://api.lucia-app.com/health', 5000),
    db: await checkDatabase(),
    stripe: await stripe.balance.retrieve(),
    sendgrid: await sgMail.validate('test@example.com'),
  };
  
  for (const [service, ok] of Object.entries(checks)) {
    if (!ok) {
      await slack.critical(`🚨 ${service} DOWN`);
      
      if (service === 'payment') {
        // Bloquear nuevas suscripciones
        await disablePaymentProcessing();
      }
    }
  }
  
  res.json(checks);
}
```

**Costo**: €0 (Vercel cron gratis)

---

## 4️⃣ CALENDARIOS DE AUTOMATIZACIÓN

### DIARIAMENTE

```
00:30 AM:  BOE.es monitoring + legal changes detection
02:00 AM:  Gemini IA generates 10 new questions
03:00 AM:  Database backup (Supabase auto)
04:00 AM:  RGPD compliance check
06:00 AM:  Analytics report generated
08:00 AM:  OneSignal morning notification (racha reminder)
12:00 PM:  Health check (every hour)
23:50 PM:  OneSignal late-night notification (last chance racha)
```

### SEMANALMENTE

```
Monday 00:00:  Weekly analytics report (Slack)
Wednesday 14:00: Stripe reconciliation check
Friday 17:00:  Competitor analysis (auto-scrape OpositaTest, GoKoan)
```

### MENSUALMENTE

```
Day 1, 08:00 AM:  Monthly financial report (ingresos, gastos, MRR)
Day 15, 10:00 AM: Refresh all API credentials (rotation security)
End of month:     Generate invoice for B2B customers (automático)
```

---

## 5️⃣ ERRORES COMUNES & AUTO-FIX

### Error: Quiz pregunta sin responder

```
Trigger: User leaves quiz without answering
Automático:
1. Sentry logs: "quiz_abandoned"
2. 24h después: Email reminder "Completaste 7/10 preguntas"
3. If >50% users abandon at Question 47 → Flag para Contenido
4. Contenido revisa: "¿Pregunta mal redactada?"
5. Si SÍ → Reescribir + deploy automático
```

---

### Error: Stripe payment failed

```
Trigger: charge.failed webhook
Automático:
1. Sentry logs error (retry count)
2. Slack alert: "Payment failed for {customer}"
3. Retry automático en 24h
4. Si falla 3x → Cancel subscription + email "¿Problema de pago?"
5. Si user se va → Slack: "⚠️ Churned due to payment issue"
```

---

### Error: Racha no se sincroniza

```
Trigger: User competa quiz pero racha no sube
Automático:
1. Sentry alert + GitHub issue creado
2. Slack: "🚨 Racha sync broken"
3. Database integrity check automático
4. Si bug encontrado: Auto-rollback last deploy
5. Developer notificado: Fix en 1h o bloquear deploys
```

---

## 6️⃣ SEGURIDAD & PROTECCIÓN

### Secret Management
```
Todas las API keys en:
- GitHub Secrets (para CI/CD)
- Environment variables (Vercel)
- Supabase Vault (para runtime)

Rotación automática (cada 30 días):
- Stripe API key
- OneSignal key
- Gemini key
- Supabase key
```

### DDoS & Rate Limiting
```
API Rate Limiting automático:
- 100 requests/minute por IP
- 1000 requests/day por usuario
- 50 quiz completados/día máximo por usuario (anti-gaming)

Si alguien intenta ataque:
1. IP bloqueada automáticamente
2. Slack alert
3. Attack logged para análisis
```

### Data Protection
```
- Encriptación en tránsito: TLS 1.3 forzado
- Encriptación en reposo: Supabase Postgres encryption
- No datos sensitivos en logs
- GDPR: Users pueden descargar/borrar datos (endpoint automático)
```

---

## 7️⃣ INTEGRACIÓN FINAL (TODO JUNTO)

```
GitHub repo → GitHub Actions (schedulers)
                    ↓
        ┌───────────┼───────────┐
        ↓           ↓           ↓
   Gemini IA    BOE.es    Compliance
   (preguntas)  (leyes)    (RGPD)
        ↓           ↓           ↓
        └───────────┼───────────┘
                    ↓
            Supabase Database
                    ↓
   ┌────────┬──────┴──────┬────────┐
   ↓        ↓             ↓        ↓
 Stripe  OneSignal    Sentry   Analytics
(pagos)  (notif)     (errors)  (reporting)
   ↓        ↓             ↓        ↓
   └────────┼─────────────┼────────┘
            ↓
      Slack Alerts
      (everything monitored)
```

---

## 8️⃣ COSTO TOTAL AUTOMATIZACIÓN

| Herramienta | Costo | Función |
|-------------|-------|---------|
| GitHub Actions | €0 | Schedulers |
| Vercel Cron | €0 | Health checks |
| Supabase | €0-20 | Database + functions |
| OneSignal | €0 | Notifications (free tier) |
| Sentry | €0 | Error tracking |
| Stripe | 2.2% | Payments |
| Posthog | €0 | Analytics |
| Gemini API | €0-3 | IA generations |
| **TOTAL** | **€0-23/mes** | |

**Conclusión**: TODO automatizado, monitoreado y protegido por **€0-23/mes**.

---

**Documento creado: 3-oct-2026**  
**Última actualización: 3-oct-2026**
