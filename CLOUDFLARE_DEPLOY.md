# Cloudflare Pages Deployment Guide

## Project Info
- **Project Name:** 2026-kcumen-co
- **URL:** https://2026-kcumen-co.pages.dev/ (o dominio custom 2026.kcumen.co)
- **Framework:** Astro
- **Branch:** main (production)

## Setup Status

### ✅ Completado Automáticamente
- [x] Adapter de Cloudflare instalado (`@astrojs/cloudflare`)
- [x] `astro.config.mjs` configurado
- [x] `wrangler.toml` creado
- [x] `.github/workflows/deploy.yml` creado
- [x] `CLOUDFLARE_API_TOKEN` configurado en GitHub

### ⏳ Pendiente Manual

#### 1. Crear Proyecto en Cloudflare Dashboard
El token no tiene permisos para crear proyectos via API. Debes crearlo manualmente:

1. Ve a: https://dash.cloudflare.com/ → Pages
2. Click **"Create a project"**
3. Selecciona **"Upload an asset"**
4. Nombre del proyecto: `2026-kcumen-co`
5. Production branch: `main`

#### 2. Obtener Account ID

1. En el dashboard de Cloudflare, selecciona cualquier dominio
2. En la barra lateral derecha verás **"Account ID"**
3. Copia ese ID (32 caracteres)

#### 3. Configurar Secret en GitHub

```bash
cd D:\Kcumen\dev\web-2026\aimug-pack\kcumen.co
gh secret set CLOUDFLARE_ACCOUNT_ID --body="tu-account-id-aqui"
```

O desde GitHub web: Settings → Secrets and variables → Actions → New repository secret

## Deploy Automático

Una vez configurado, cada push a `main` o `develop` activará el deploy automático.

### Deploy Manual (opcional)

```bash
# Build local
pnpm run build

# Deploy manual
npx wrangler pages deploy dist --project-name=2026-kcumen-co
```

## Dominio Custom (Opcional)

Para usar `2026.kcumen.co`:

1. Ve a Cloudflare Dashboard → Pages → 2026-kcumen-co → Custom domains
2. Click **"Set up a custom domain"**
3. Agrega el dominio: `2026.kcumen.co`
4. Sigue las instrucciones de DNS

## Troubleshooting

### Error: "Authentication error [code: 10000]"
El token necesita permiso `Account:Read`. Crea un nuevo token en:
https://dash.cloudflare.com/profile/api-tokens

### Error: "Project not found"
Asegúrate de haber creado el proyecto en Cloudflare Dashboard primero.

### Error: "Build failed"
Verifica que el build local funcione:
```bash
pnpm run build
```
