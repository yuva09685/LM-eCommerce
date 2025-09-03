# Task: 080-010 Inventory worker: reserve stock and publish inventory.reserved
id: 080-010
owner: yuvi
status: todo
priority: high
path: /services/inventory/src/worker.ts
description:
  - short: Consume order.created and reserve stock if available
  - steps: |
      1. Subscribe to routingKey 'order.created' via packages/messaging.
      2. Validate event payload schema using Ajv and packages/messaging/schemas/order.created.json
      3. For each item, check product_variants.stock; if enough, decrement inside a DB transaction and mark reserved; else publish inventory.failed.
      4. Publish `inventory.reserved` event containing order_id, reserved_items.
      5. Implement idempotency using Redis key `processed:{idempotency_key}` with TTL 24h. If key exists, ignore duplicate.
      6. Commit code and test locally.
acceptance_criteria:
  - Stock decreases once per unique order idempotency_key and inventory.reserved published.
notes:
  - Worker should ack messages on success and nack to requeue on recoverable errors.
