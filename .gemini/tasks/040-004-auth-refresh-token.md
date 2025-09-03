# Task: 040-004 Implement refresh token endpoint
id: 040-004
owner: yuvi
status: todo
priority: medium
path: /services/auth/src/auth.controller.ts
description:
  - short: Endpoint POST /auth/refresh to exchange refresh token for a new access token.
  - steps: |
      1. Create route POST /auth/refresh that accepts { refresh_token }.
      2. Validate token against stored hashed refresh token (or Redis store).
      3. If valid, issue new access token.
      4. Rotate refresh token if desired (optional).
      5. Commit.
acceptance_criteria:
  - Exchange works: new access token returned and previous refresh token invalidated if rotating.
notes:
  - Store refresh tokens with TTL and allow revocation.
