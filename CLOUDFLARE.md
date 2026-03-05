# Cloudflare Pages Deployment

## GitHub Secrets Required

Configure these secrets in your GitHub repository settings (`Settings` > `Secrets and variables` > `Actions`):

| Secret                  | Description           | How to get                                                                                                  |
| ----------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare API Token  | [Create API Token](https://dash.cloudflare.com/profile/api-tokens) - Use "Edit Cloudflare Workers" template |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID | Found in Cloudflare Dashboard URL: `https://dash.cloudflare.com/<ACCOUNT_ID>/`                              |

## Environment Variables

Set these in Cloudflare Pages dashboard (`Settings` > `Environment variables`):

| Variable         | Value                                        |
| ---------------- | -------------------------------------------- |
| `RESEND_API_KEY` | Your Resend API key                          |
| `EMAIL_FROM`     | Sender email (e.g., `onboarding@resend.dev`) |
| `EMAIL_TO`       | Recipient email (e.g., `hello@kcumen.co`)    |

## First Deployment

1. Push these changes to GitHub
2. Go to Cloudflare Dashboard > Pages > Connect to Git
3. Select the repository `kcumen/kcumen-web-2026`
4. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
5. Add environment variables in Cloudflare settings

## Troubleshooting

- If build fails, check Cloudflare Pages build logs
- Ensure `CLOUDFLARE_API_TOKEN` has "Workers" and "Pages" permissions
- For Next.js full features on Cloudflare, consider using `@opennext/cloudflare` adapter
