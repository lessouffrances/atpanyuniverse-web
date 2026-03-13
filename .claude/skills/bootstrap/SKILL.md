---
name: bootstrap
description: Scaffold a new project from BOOTSTRAP_FORM.md. Use when the user says "bootstrap the project", "set up the project", or runs /bootstrap for the first time.
---

# Bootstrap Skill

## Step 1 — Validate the form
Read `.claude/BOOTSTRAP_FORM.md`. Check that these fields are filled (not `~`):
- Project name
- Structure (monorepo / polyrepo / single-app)
- Frontend: yes/no (and framework if yes)
- Backend: yes/no (and runtime if yes)

If any required field is missing, list them and stop. Do not guess or use defaults without asking.

## Step 2 — Generate directory structure
Based on the filled form:

**monorepo:**
```
apps/
  web/       ← if frontend: yes
  api/       ← if backend: yes
packages/    ← if monorepo has shared code
```

**single-app (frontend only):**
```
src/
public/
```

**single-app (backend only):**
```
src/
tests/
```

## Step 3 — Generate config files
Create starter config files matching the chosen stack. Examples:
- `package.json` / `pyproject.toml` with correct deps
- `tsconfig.json` if TypeScript
- `.eslintrc` / `biome.json` if linter chosen
- `.env.example` with placeholder keys
- `Dockerfile` + `docker-compose.yml` if containerize: yes
- `.github/workflows/ci.yml` if CI/CD: GitHub Actions

## Step 4 — Generate SPEC.md
Create `SPEC.md` using this template:

```markdown
# Project Spec: <Project Name>

_Last updated: <date>_

## Overview
<Short description from BOOTSTRAP_FORM.md>

## Tech Stack
<Summarise frontend, backend, infra from BOOTSTRAP_FORM.md>

## Features
_Fill this in as development progresses._

- [ ] <First feature>

## Changelog
| Date | Commit | Change |
|------|--------|--------|
| <date> | — | Initial scaffold |
```

## Step 5 — Generate docs/DECISIONS.md
Log the initial tech choices using ADR format (see `.claude/rules/doc-sync.md`).
Start with ADR-001 for the repo structure choice, ADR-002 for frontend stack, ADR-003 for backend stack.

## Step 6 — Init git and commit
```bash
git init
git add .
git commit -m "chore: initial project scaffold"
```

## Step 7 — Print summary
List what was created and tell the human what to do next:
1. Fill in `SPEC.md` with their first features
2. Run `/new-feature` when ready to build something