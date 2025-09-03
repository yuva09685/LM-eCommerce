# Task: 000-001 Bootstrap monorepo (turborepo + workspaces)
id: 000-001
owner: yuvi
status: todo
priority: high
path: /
description:
  - short: Initialize repository with turborepo and base configs.
  - steps: |
      1. If repo not initialized: run `git init`.
      2. Create `package.json` with:
         {
           "private": true,
           "workspaces": ["apps/*","services/*","packages/*"]
         }
      3. Run `npm install -D turbo`.
      4. Add `turbo.json` with basic pipelines: build, lint, test.
      5. Create `packages/config/tsconfig.base.json`, `.eslintrc.cjs`, `.prettierrc`.
      6. Commit with `git add . && git commit -m "chore: monorepo bootstrap"`.
acceptance_criteria:
  - `npx turbo run lint` runs without config errors.
notes:
  - Keep `tsconfig` strict.
