# Task: 080-002 Reserve stock when order.created is consumed
id: 080-002
owner: yuvi
status: todo
priority: high
path: /services/inventory/src/worker.ts
description:
  - short: Listen for order.created and decrement stock if available.
  - steps: |
      1. Subscribe to domain.topic with routingKey 'order.created' using packages/messaging.
      2. Validate event schema (packages/messaging/schemas).
      3. For each item, check product_variants.stock in a DB transaction.
      4. If all items available, decrement stock and publish inventory.reserved.
      5. If any item insufficient, publish inventory.failed and optionally publish order.cancelled (compensating).
      6. Ensure idempotency using idempotency_key stored in Redis or DB table processed_events.
acceptance_criteria:
  - Consuming order.created reduces stock once per unique idempotency_key.
notes:
  - Use transactions to avoid race conditions.
