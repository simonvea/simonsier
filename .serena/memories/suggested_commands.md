# Suggested Commands

## Development
- `npm run serve` — start dev server with hot reload (http://localhost:8080)
- `npm run build` — build site to `_site/`
- `npm run build:prod` — production build with `ELEVENTY_PRODUCTION=true` (enables HTML minification)
- `npm run debug` — run with full debug output

## Deployment
- Deployed via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`
- Rsyncs `_site/` to a VPS over SSH (secrets: `VPS_SSH_KEY`, `VPS_USER`, `VPS_HOST`)
- No AWS/CloudFront involved — fully migrated to VPS

## No linting/testing commands configured
- No test framework present
- No ESLint/Prettier config found
- Code style is informal; follow existing patterns
