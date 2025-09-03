# Task: 020-003 Add products schema migration
id: 020-003
owner: yuvi
status: todo
priority: high
path: /packages/db/migrations/0002_create_products.sql
description:
  - short: Create products schema and tables.
  - steps: |
      1. Create schema products and tables: products, product_variants, product_collections.
      2. Columns per GEMINI.md spec (id uuid, seller_id, title, description, currency, published_at, status, created_at).
      3. Add indices on seller_id and status.
      4. Commit and run migration.
acceptance_criteria:
  - tables present and indexed.
