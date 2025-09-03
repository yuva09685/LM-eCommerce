# Task: 070-002 Implement POST /orders (create order)
id: 070-002
owner: yuvi
status: todo
priority: high
path: /services/orders/src/orders.controller.ts
description:
  - short: Create order, items and publish order.created event.
  - steps: |
      1. Create DTO for create order request with buyer_id, items [{variant_id, qty}], currency, optional idempotency_key.
      2. Validate request, query product_variants prices from DB, calculate total_cents.
      3. Begin DB transaction: insert into orders.orders and order_items rows. Set status = pending.
      4. After commit, call packages/messaging.publish('domain.topic','order.created', {order_id, buyer_id, items, total_cents, idempotency_key}).
      5. Return 201 with order_id and idempotency_key.
      6. Add test .http file.
acceptance_criteria:
  - Order rows exist and event published (test consumer prints payload).
notes:
  - Ensure publish occurs after DB commit to avoid ghost events.
