# Task: 080-001 Create inventory worker skeleton
id: 080-001
owner: yuvi
status: todo
priority: high
path: /services/inventory
description:
  - short: Create a worker service to handle inventory events.
  - steps: |
      1. Scaffold services/inventory (Node worker or NestJS microservice).
      2. Add dependency on packages/messaging and packages/db.
      3. Commit skeleton.
acceptance_criteria:
  - Worker starts and connects to RabbitMQ in dev.
