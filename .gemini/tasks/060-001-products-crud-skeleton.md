# Task: 060-001 Scaffold products service and basic CRUD
id: 060-001
owner: yuvi
status: todo
priority: high
path: /services/products
description:
  - short: Create products service with endpoints for create/read/update/delete
  - steps: |
      1. Scaffold services/products NestJS project/module.
      2. Implement POST /products to create a product row in products.products.
      3. Implement GET /products/:id to return product and variants.
      4. Implement PATCH /products/:id to update title/description/status.
      5. Implement DELETE /products/:id (soft delete: set deleted_at).
      6. Commit.
acceptance_criteria:
  - Create + read endpoints working and reflect DB changes.
notes:
  - Validate seller_id ownership in create/update flows.
