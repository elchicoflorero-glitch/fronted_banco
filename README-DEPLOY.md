# 🏦 BancoPeru - Frontend

Aplicación web construida con Next.js 14 + React + TailwindCSS

## 🚀 Deploy en Vercel

### 1. Preparar variables de entorno
Antes de desplegar, necesitas la URL del backend de Railway.

### 2. Deploy en Vercel
1. Ir a https://vercel.com/ y crear cuenta
2. **Import Project** → Conectar con GitHub
3. Seleccionar repositorio `bancoperu-frontend`
4. **Framework Preset**: Next.js (auto-detectado)
5. **Root Directory**: `./` (raíz del repo)
6. **Variables de entorno**:
   ```
   NEXT_PUBLIC_API_URL=https://tu-backend.railway.app
   ```
7. Click en **Deploy**

### 3. Verificar Deploy
- Vercel te dará una URL: `https://bancoperu-frontend.vercel.app`
- Abrir y probar el login/registro

## 🔧 Desarrollo Local

```bash
npm install
npm run dev
```

Aplicación corriendo en: http://localhost:3000

## 📝 Variables de Entorno

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 📱 Páginas Principales

### Públicas (Sin autenticación)
- `/` - Landing page
- `/login` - Inicio de sesión
- `/register` - Registro de usuario

### Privadas (Con autenticación)
- `/dashboard` - Panel principal
- `/clients` - Gestión de clientes (ADMIN/MANAGER)
- `/accounts` - Gestión de cuentas
- `/transfers` - Realizar transferencias
- `/withdrawals` - Retiros de dinero
- `/audit-logs` - Consultar auditoría
- `/client-portal` - Portal del cliente

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar producción (local)
npm run start

# Linter
npm run lint
```

## 📦 Stack Técnico

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS 3
- **Estado**: Context API
- **HTTP Client**: Fetch API nativo
- **Validación**: Validación frontend

## 🎨 Componentes Principales

- `ClientTable` - Tabla CRUD de clientes
- `ClientForm` - Formulario crear/editar cliente
- `TransferForm` - Formulario de transferencias
- `AccountCard` - Tarjeta de cuenta bancaria
- `ToastNotification` - Notificaciones toast
- `ProtectedRoute` - HOC para rutas protegidas

## 🔐 Autenticación

- JWT almacenado en `localStorage`
- Auto-logout si token expira (24h)
- Redirección automática si no autenticado
- Interceptor HTTP para incluir token en requests

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Optimizado para tablets y móviles

## 🐛 Troubleshooting

### Error: CORS blocked
Verificar que el backend tiene configurado el dominio de Vercel en CORS:
```typescript
app.enableCors({
  origin: ['https://tu-app.vercel.app']
});
```

### Error: API_URL not defined
Verificar que `NEXT_PUBLIC_API_URL` está en variables de entorno de Vercel.

### Error: Build failed
```bash
# Limpiar cache y reinstalar
rm -rf .next node_modules
npm install
npm run build
```

## 🚀 Deploy Previews

Vercel crea un deploy preview automático para cada Pull Request con URL única:
`https://bancoperu-frontend-git-branch-user.vercel.app`

## 📊 Analytics (Opcional)

Para habilitar Vercel Analytics:
1. Ir al dashboard del proyecto en Vercel
2. Settings → Analytics → Enable
3. Instalar: `npm i @vercel/analytics`
4. Agregar en layout.tsx
