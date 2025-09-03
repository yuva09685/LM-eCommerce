# Task: 030-004 Add rabbitmq topology setup script
id: 030-004
owner: yuvi
status: todo
priority: high
path: /infra/scripts/setup-rabbitmq.sh
description:
  - short: Shell script to populate exchanges and queues for local dev.
  - steps: |
      1. Create infra/scripts/setup-rabbitmq.sh that uses rabbitmqadmin or curl to management API to create:
         - exchange domain.topic (type topic)
         - queues: orders.inventory-reserver, notifications.email, dlq.* for each queue
         - bindings for routing keys like order.created -> orders.inventory-reserver
      2. Make script executable.
      3. Commit.
acceptance_criteria:
  - Running script creates topology in local RabbitMQ.
notes:
  - Include credentials reference to infra/.env.example.
