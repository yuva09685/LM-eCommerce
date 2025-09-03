# Task: 000-003 Add pre-commit hooks (lint, format)
id: 000-003
owner: yuvi
path: /
status: todo
priority: medium
description:
  - short: Install husky and add pre-commit hook for linting
  - steps: |
      1. Run `npm install -D husky lint-staged`.
      2. Add to package.json:
         "husky": {...}, "lint-staged": {...}
      3. `npx husky install` then `npx husky add .husky/pre-commit "npx lint-staged"`.
      4. Commit.
acceptance_criteria:
  - Pre-commit runs and blocks bad commits locally.
notes:
  - lint-staged should run eslint --fix and prettier --write.
