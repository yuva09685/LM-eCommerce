# Task: 010-001 Create infra folder and README
id: 010-001
owner: yuvi
status: todo
priority: high
path: /infra
description:
  - short: Create infra directory and README with run instructions.
  - steps: |
      1. mkdir infra && touch infra/README.md
      2. Write short README: how to run docker compose and env variables.
      3. Commit.
acceptance_criteria:
  - infra/README.md exists and describes `docker compose -f infra/docker-compose.dev.yml up`.
