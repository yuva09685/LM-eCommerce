# Task: 070-010 Implement minimal POST /orders with DB insert (one-step)
id: 070-010
owner: yuvi
status: todo
priority: high
path: /services/orders/src/orders.controller.ts
description:
  - short: Minimal endpoint that inserts order and returns id
  - steps: |
      1. Add DTO CreateOrderDto with buyer_id, items [{variant_id, qty}], currency.
      2. Implement POST /orders that:
         - validates DTO
         - calculates total by querying product_variants (prices)
         - inserts into orders.orders and order_items in a single transaction
         - returns 201 { order_id, total_cents }
      3. Add test file services/orders/test/orders.http with a sample POST request.
      4. Commit.
acceptance_criteria:
  - POST /orders returns 201 and DB rows exist after running migration.
notes:
  - Do not publish events in this microtask — publish in next microtask once DB insertion is verified.
