# Task: 050-001 Implement GET /users/:id profile
id: 050-001
owner: yuvi
status: todo
priority: medium
path: /services/users
description:
  - short: Create users service endpoint to fetch profile
  - steps: |
      1. Scaffold services/users NestJS project or module.
      2. Implement GET /users/:id that returns id, email, role, created_at.
      3. Add DB query via packages/db client.
      4. Commit.
acceptance_criteria:
  - GET returns user data for an existing user id.
