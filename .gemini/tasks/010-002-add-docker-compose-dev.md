# Task: 010-002 Add docker-compose.dev.yml with Postgres, Redis, RabbitMQ, pgBouncer
id: 010-002
owner: yuvi
status: todo
priority: high
path: /infra/docker-compose.dev.yml
description:
  - short: Add compose file for local dev dependencies.
  - steps: |
      1. Create file infra/docker-compose.dev.yml with services:
         - postgres: image postgres:15, env POSTGRES_PASSWORD=postgres, mounts pgdata
         - pgbouncer: image edoburu/pgbouncer, configured to pool to postgres
         - rabbitmq: image rabbitmq:3-management, ports 5672 and 15672
         - redis: image redis:7
      2. Add infra/.env.example with DB/Rabbit/Redis creds.
      3. Commit files.
acceptance_criteria:
  - `docker compose -f infra/docker-compose.dev.yml up` starts all containers.
notes:
  - Use named volume for Postgres data.
