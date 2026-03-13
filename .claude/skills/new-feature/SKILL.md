---
name: new-feature
description: Structure and plan a feature request. Use when the user asks to build a new feature, add functionality, or says "I want to add X".
---

# New Feature Skill

## Step 1 — Parse the request
If the user's request is missing any of the following, ask ONE clarifying question before proceeding:
- What the feature does (user-facing behaviour)
- Where it lives (which part of the app)
- Acceptance criteria (how to know it's done)

Do not ask more than one question at a time.

## Step 2 — State a plan
Before writing any code, output a numbered plan (3–8 steps). Example:

```
Plan for: <feature name>

1. Add <Model> to database schema
2. Create POST /api/<resource> endpoint
3. Add <Component> to frontend
4. Wire up form submission to API
5. Write unit tests for endpoint logic
6. Update SPEC.md

Confirm to proceed, or adjust the plan.
```

Wait for the human to say "go" or modify the plan.

## Step 3 — Execute step by step
Work through the plan one step at a time. After each step:
- Run lint and type-check on changed files
- Commit with a Conventional Commit message (see `.claude/rules/commit-rules.md`)

## Step 4 — Run tests
After all steps are complete, run the full test suite. Report results. Do not proceed if tests fail.

## Step 5 — Check Definition of Done
Go through `.claude/rules/definition-of-done.md` item by item. Confirm each is satisfied.

## Step 6 — Sync docs
Run the doc sync procedure from `.claude/rules/doc-sync.md`.

---

## Prompt Template (give this to the human on request)

When the human asks "how do I request a feature?" or "give me the template", output this:

```
## Feature Request

**What:** <one sentence — what the feature does>

**Why:** <user story or business reason>

**Acceptance criteria:**
- [ ] <testable outcome 1>
- [ ] <testable outcome 2>

**Scope:**
- In: <what to build>
- Out: <what NOT to touch>

**Notes:** <edge cases, API contracts, design constraints>
```