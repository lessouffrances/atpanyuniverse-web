# Architecture Decision Records
> Auto-updated by the agent via `/sync-docs`. Do not manually reorder entries.
> Add new entries at the bottom. ADR numbers are sequential and permanent.

---

## ADR-001: Repository Structure
**Date:** 2026-03-13
**Status:** Accepted
**Context:** Chosen during project bootstrap; existing repo with static site at root.
**Decision:** Polyrepo. This repo is a single static site: root-level `index.html`, `style.css`, `script.js`, and `CNAME` for GitHub Pages. No monorepo apps/ or packages/; current files are the main app.
**Consequences:** All frontend assets live at repo root; no backend in this repo; deployment is GitHub Pages only.

---

## ADR-002: Frontend Stack
**Date:** 2026-03-13
**Status:** Accepted
**Context:** Chosen during project bootstrap; existing vanilla site.
**Decision:** Static HTML, plain CSS, vanilla JavaScript. No framework. Styling via `style.css` (CSS Modules and component lib left as future options in form).
**Consequences:** UI work stays framework-free; tooling is ESLint + Prettier for JS/CSS/HTML where applicable.

---

## ADR-003: Backend Stack
**Date:** 2026-03-13
**Status:** Accepted
**Context:** This project is a static portfolio; BOOTSTRAP_FORM lists backend "yes" but runtime/framework unspecified.
**Decision:** No backend in this repo. Site is static-only, served via GitHub Pages. Any future API or server would live in a separate repo (polyrepo).
**Consequences:** No server runtime, database, or API in atpanyuniverse-web; contact/form handling would be client-only or via external service.

---

_New ADRs added below this line by the agent_
