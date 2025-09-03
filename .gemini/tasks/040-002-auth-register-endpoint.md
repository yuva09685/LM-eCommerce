# Task: 040-002 Implement POST /auth/register
id: 040-002
owner: yuvi
status: todo
priority: high
path: /services/auth/src/auth.controller.ts
description:
  - short: Implement register controller, DTO, and DB insert.
  - steps: |
      1. Create DTO `RegisterDto { email: string; password: string }` using class-validator.
      2. Create controller route POST /auth/register that:
         - validates DTO
         - hashes password with bcrypt
         - inserts into users.users table via packages/db client
         - returns 201 with { id, email }
      3. Add services/auth/test/auth.http with example request.
      4. Commit.
acceptance_criteria:
  - POST returns 201 and row present in users.users.
notes:
  - Use transactions only if more than one table insertion.
