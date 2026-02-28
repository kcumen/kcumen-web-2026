# Cloudflare Pages Deployment

## Setup

### 1. Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
3. Authorize GitHub and select `kcumen/kcumen-web-2026`
4. Configure:
   - **Project name**: `kcumen-web-2026`
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Output directory**: `dist`

### 2. Set Environment Variables

In Cloudflare Pages settings, add:
- `NODE_VERSION`: `20`

### 3. Configure Secrets

Add these secrets to GitHub repository:
- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID

#### Creating Cloudflare API Token

1. Go to [Cloudflare Profile](https://dash.cloudflare.com/profile)
2. Click **API Tokens** > **Create Custom Token**
3. Use template "Edit Cloudflare Workers" or create with permissions:
   - `Zone:Read`
   - `Account:Workers:Edit`
   - `Account:Workers Routes:Edit`
   - `Account:Pages:Edit`

#### Finding Account ID

In Cloudflare dashboard, click your profile icon > Overview > Account ID

### 4. Deploy

Push to `main` branch or manually trigger from Cloudflare dashboard.

## URLs

- **Production**: https://kcumen-web-2026.pages.dev
- **Preview**: Automatically generated for PRs

## Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## CI/CD

The workflow (`.github/workflows/deploy.yml`) runs:
1. Install dependencies
2. Lint (if configured)
3. Run tests
4. Build
5. Deploy to Cloudflare Pages (on `main` branch only)
