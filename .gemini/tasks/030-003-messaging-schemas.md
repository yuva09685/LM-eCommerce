# Task: 030-003 Add messaging schemas directory
id: 030-003
owner: yuvi
status: todo
priority: medium
path: /packages/messaging/schemas
description:
  - short: Create JSON schemas for events (order.created, inventory.reserved)
  - steps: |
      1. mkdir -p packages/messaging/schemas
      2. Create order.created.json schema with required fields (order_id, buyer_id, items, total_cents, currency, idempotency_key).
      3. Create inventory.reserved.json schema.
      4. Commit.
acceptance_criteria:
  - Schema files present and used by example publisher/consumer.
notes:
  - Use Ajv for validation in consumers.
