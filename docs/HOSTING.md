# Hosting (GitHub Pages)

The site is deployed via GitHub Actions to **GitHub Pages** on the default `*.github.io` URL (free; no custom domain).

## One-time setup

1. **Enable GitHub Pages**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

2. After the first push to `main` or `agent-rewrite`, the workflow runs and publishes the site. Your live URL will be:
   - **`https://<your-username>.github.io/atpanyuniverse-web/`**
   and is shown in **Settings → Pages** and in the **Actions** run.

## Workflow

- **File:** `.github/workflows/pages.yml`
- **Triggers:** Push to `main` or `agent-rewrite`, or manual **Run workflow**.
- **Deployed:** `index.html`, `style.css`, `script.js`, and assets (images, video). No CNAME — site is served only at the default GitHub Pages URL.
