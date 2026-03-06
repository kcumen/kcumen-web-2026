# Cloudflare Workers Deployment with OpenNext

## GitHub Secrets Required

Configure these secrets in your GitHub repository settings (`Settings` > `Secrets and variables` > `Actions`):

| Secret                  | Description           | How to get                                                                                                       |
| ----------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare API Token  | [Create API Token](https://dash.cloudflare.com/profile/api-tokens) - Use a token with Workers deploy permissions |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID | Found in Cloudflare Dashboard URL: `https://dash.cloudflare.com/<ACCOUNT_ID>/`                                   |

## Environment Variables

Set these as Worker environment variables / secrets in Cloudflare:

| Variable         | Value                                        |
| ---------------- | -------------------------------------------- |
| `RESEND_API_KEY` | Your Resend API key                          |
| `EMAIL_FROM`     | Sender email (e.g., `onboarding@resend.dev`) |
| `EMAIL_TO`       | Recipient email (e.g., `hello@kcumen.co`)    |

## Deployment Strategy

This project is deployed as a **Cloudflare Worker** using **OpenNext**, not as a classic Cloudflare Pages static site.

- Build command: `npm run build:cf`
- Deploy command: `npx wrangler deploy`
- Worker entrypoint: `.open-next/worker.js`
- Static assets directory: `.open-next/assets`

## First Deployment

1. Push these changes to GitHub
2. Ensure the GitHub Actions workflow has these secrets configured:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. In Cloudflare, configure Worker env vars/secrets:
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `EMAIL_TO`
4. Push to `main` to trigger deployment

## Notes about static assets and CSS

- OpenNext generates the Worker bundle plus static assets under `.open-next/assets`
- Wrangler uploads these assets during `deploy`
- CSS files under `_next/static/...` and files from `public/` are served from that asset directory
- To avoid asset mismatches, use `opennextjs-cloudflare build` directly instead of running `next build` separately before it

## Resend compatibility

The contact form can continue using Resend through the existing server action.

Requirements:

- Keep `nodejs_compat` enabled in `wrangler.toml`
- Set `RESEND_API_KEY` in Cloudflare
- Keep `EMAIL_FROM` and `EMAIL_TO` configured

## Troubleshooting

- If build fails, check Cloudflare Pages build logs
- Ensure `CLOUDFLARE_API_TOKEN` has Workers deployment permissions
- If assets or CSS do not load, verify the deploy is using Wrangler/OpenNext Worker output rather than a Pages `.next` output flow
- If email sending fails, verify `RESEND_API_KEY` is configured in Cloudflare for the deployed Worker
