# Task: 000-002 Add root scripts for common tasks
id: 000-002
owner: yuvi
path: /
status: todo
priority: medium
description:
  - short: Add npm scripts to root package.json for common tasks.
  - steps: |
      1. Edit root package.json, add scripts:
         "dev": "turbo run dev --parallel",
         "build": "turbo run build",
         "lint": "turbo run lint",
         "test": "turbo run test"
      2. Commit file.
acceptance_criteria:
  - `npm run dev` invokes turbo.
