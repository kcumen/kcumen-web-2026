# Cloudflare Workers Deployment with OpenNext

## GitHub Secrets Required

Configure these secrets in your GitHub repository settings (`Settings` > `Secrets and variables` > `Actions`):

| Secret                  | Description           | How to get                                                                                                       |
| ----------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare API Token  | [Create API Token](https://dash.cloudflare.com/profile/api-tokens) - Use a token with Workers deploy permissions |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID | Found in Cloudflare Dashboard URL: `https://dash.cloudflare.com/<ACCOUNT_ID>/`                                   |

## Environment Variables

Set these as Worker environment variables / secrets in Cloudflare:

| Variable                        | Type     | Value                                                    |
| ------------------------------- | -------- | -------------------------------------------------------- |
| `RESEND_API_KEY`                | Secret   | Your Resend API key                                      |
| `TURNSTILE_SECRET_KEY`          | Secret   | Cloudflare Turnstile secret key (from Turnstile dashboard) |
| `EMAIL_FROM`                    | Var      | Sender email — already in `wrangler.toml [vars]`         |
| `EMAIL_TO`                      | Var      | Recipient email — already in `wrangler.toml [vars]`      |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`| Var      | Turnstile site key — set in `wrangler.toml [vars]`       |

Set secrets via CLI:
```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
```

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

The contact form uses Resend through the existing server action.

### ⚠️ Critical: Use `html:` not `react:` in Cloudflare Workers

Resend's `react:` property internally calls `@react-email/render` using Node.js SSR APIs that are **not available** in Cloudflare Workers Edge runtime. This causes silent failures or errors in production even though it works locally (Node.js).

**Fix applied in `src/app/actions/sendEmail.ts`:** Pre-render the React email component to HTML using `@react-email/render` and pass `html:` to Resend instead:

```ts
import { render } from "@react-email/render";

const emailHtml = await render(ContactEmail({ ... }));

await resend.emails.send({
  html: emailHtml,  // ✅ Works in Cloudflare Workers
  // react: ContactEmail({ ... }),  // ❌ Fails in Cloudflare Workers
});
```

See: https://resend.com/docs/send-with-cloudflare-workers

### Requirements

- Keep `nodejs_compat` enabled in `wrangler.toml`
- Set `RESEND_API_KEY` as a **Cloudflare Worker secret** (not just in `[vars]`):
  ```bash
  npx wrangler secret put RESEND_API_KEY
  ```
- `EMAIL_FROM` and `EMAIL_TO` are set in `wrangler.toml` `[vars]` (non-sensitive)

## Cloudflare Turnstile (CAPTCHA)

The contact form is protected with [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) — a free, frictionless CAPTCHA alternative.

### Setup steps

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Turnstile** > **Add site**
2. Choose widget type: **Managed** (recommended — invisible for real users)
3. Add your domain: `kcumen.co`
4. Copy the **Site Key** and **Secret Key**

5. Update `wrangler.toml` `[vars]` with the real site key:
   ```toml
   NEXT_PUBLIC_TURNSTILE_SITE_KEY = "0x4AAAAAAA..."
   ```

6. Set the secret key as a Worker secret:
   ```bash
   npx wrangler secret put TURNSTILE_SECRET_KEY
   ```

### Local development

`.dev.vars` uses Cloudflare's official test keys that always pass verification:
- Site key: `1x00000000000000000000AA`
- Secret key: `1x0000000000000000000000000000000AA`

See: https://developers.cloudflare.com/turnstile/troubleshooting/testing/

## Troubleshooting

- If build fails, check Cloudflare Pages build logs
- Ensure `CLOUDFLARE_API_TOKEN` has Workers deployment permissions
- If assets or CSS do not load, verify the deploy is using Wrangler/OpenNext Worker output rather than a Pages `.next` output flow
- If email sending fails, verify `RESEND_API_KEY` is configured in Cloudflare for the deployed Worker
