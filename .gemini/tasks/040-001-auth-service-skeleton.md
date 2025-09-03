# Task: 040-001 Scaffold services/auth NestJS project
id: 040-001
owner: yuvi
status: todo
priority: high
path: /services/auth
description:
  - short: Create NestJS app skeleton for auth service.
  - steps: |
      1. Run `npx @nestjs/cli new services/auth --package-manager npm` or create similar skeleton manually.
      2. Add package dependency to @marketplace/db (packages/db).
      3. Commit skeleton.
acceptance_criteria:
  - `npm run start` in services/auth starts Nest server.
notes:
  - Use ports documented in infra README.
