# Task: 130-002 Add infra/.env.example and secrets instructions
id: 130-002
owner: yuvi
status: todo
priority: high
path: /infra/.env.example
description:
  - short: Document environment variables required and how to set secrets.
  - steps: |
      1. Create infra/.env.example listing DB_URL, RABBITMQ_URL, REDIS_URL, JWT_SECRET, etc.
      2. Create infra/README.md with instructions to use cloud secret managers in prod.
      3. Add .gitignore to exclude .env files.
      4. Commit.
acceptance_criteria:
  - No actual secrets in repo, .env.example present.
notes:
  - Encourage usage of secret manager for prod.
