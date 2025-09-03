# Task: 100-001 Scaffold API gateway (NestJS)
id: 100-001
owner: yuvi
status: todo
priority: high
path: /apps/gateway
description:
  - short: Create gateway service to centralize auth and routing
  - steps: |
      1. Scaffold apps/gateway with NestJS.
      2. Create middleware to check JWTs for protected routes.
      3. Add basic proxy controller to forward requests to services via localhost ports.
      4. Commit.
acceptance_criteria:
  - Protected route returns 401 without token.
