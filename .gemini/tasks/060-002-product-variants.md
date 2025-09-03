# Task: 060-002 Implement product variants create endpoint
id: 060-002
owner: yuvi
status: todo
priority: medium
path: /services/products/src/variants.controller.ts
description:
  - short: Add endpoint to create product variants with SKU, price, stock, attributes
  - steps: |
      1. POST /products/:id/variants accepts sku, price_cents, stock, attributes (JSON).
      2. Insert into products.product_variants.
      3. Commit.
acceptance_criteria:
  - Variant appears in DB and GET /products/:id returns variant.
notes:
  - Ensure SKU uniqueness or handle conflicts.
