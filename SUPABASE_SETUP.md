# Configuración Supabase

## Estado Actual
- ✅ Supabase init completado
- ✅ Migration SQL creada: `create_questions_table.sql`
- ✅ Variables locales en `.env.local`
- ⏳ Proyecto remoto (pendiente)

## Próximos Pasos

### 1. Crear Proyecto Remoto en Supabase

1. Ve a: https://supabase.com/dashboard/new
2. Crea proyecto con nombre: `lucia-study-app`
3. Selecciona región: `eu-west-1` (Europa)
4. Espera a que se cree (3-5 minutos)

### 2. Obtener Credenciales

En el dashboard del proyecto:
1. Ve a: **Settings** → **API**
2. Copia:
   - `Project URL` → Esta es tu `SUPABASE_URL`
   - `anon public` → Esta es tu `SUPABASE_ANON_KEY`

### 3. Actualizar `.env.local`

Reemplaza en `.env.local`:
```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
```

### 4. Push de la Migration a Remoto

```powershell
supabase link --project-ref xxxxx
supabase db push
```

### 5. Agregar GitHub Secrets

En tu repo GitHub → Settings → Secrets:
- `SUPABASE_URL`: Tu URL
- `SUPABASE_KEY`: Tu anon key

---

## Tabla Creada: `questions`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | bigint | PK autoincrement |
| question | text | Texto de la pregunta |
| options | text[] | Array de opciones [A, B, C, D] |
| correct_index | int | Índice de respuesta correcta (0-3) |
| explanation | text | Explicación de la respuesta |
| difficulty | text | easy \| medium \| hard |
| topic | text | Tema de la pregunta |
| oposicion | text | Tipo de oposición |
| created_at | timestamp | Fecha de creación |
| updated_at | timestamp | Última actualización |

---

## Seguridad (RLS)
- ✅ Público puede leer preguntas
- ✅ Solo autenticados pueden insertar
- ✅ Índices para performance

---

**Una vez que completes los pasos 1-3, dime y yo actualizo todo automáticamente.**
