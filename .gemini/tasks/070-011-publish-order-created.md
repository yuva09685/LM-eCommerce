# Task: 070-011 After order inserted, publish order.created event
id: 070-011
owner: yuvi
status: todo
priority: high
path: /services/orders/src/orders.service.ts
description:
  - short: Use packages/messaging to publish `order.created` after commit
  - steps: |
      1. In orders.service, after successful transaction commit, call messaging.publish('domain.topic','order.created', {order_id, buyer_id, items, total_cents, idempotency_key})
      2. Add acceptance test: spin up rabbitmq and consumer script to see event.
      3. Commit.
acceptance_criteria:
  - Event appears in consumer logs after creating order.
notes:
  - Confirm event published only after successful DB commit.
