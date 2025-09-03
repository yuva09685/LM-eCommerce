# Task: 040-003 Implement POST /auth/login with JWT
id: 040-003
owner: yuvi
status: todo
priority: high
path: /services/auth/src/auth.service.ts
description:
  - short: Implement login that returns access and refresh tokens.
  - steps: |
      1. Create DTO LoginDto { email, password }.
      2. Verify user exists and bcrypt.compare password.
      3. On success, sign JWT access token (short lived) and refresh token (longer, stored hashed in DB or Redis).
      4. Return tokens in response.
      5. Add .http tests for a login flow.
      6. Commit.
acceptance_criteria:
  - POST /auth/login returns tokens and validateable by gateway.
notes:
  - Keep secrets in infra/.env. Use HS256 for now.
