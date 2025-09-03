# Task: 060-003 Add Redis cache for product details
id: 060-003
owner: yuvi
status: todo
priority: medium
path: /services/products/src/cache.ts
description:
  - short: Cache product details in Redis and invalidate on updates
  - steps: |
      1. Add Redis client to the service (use env REDIS_URL).
      2. On GET /products/:id, check Redis key `product:{id}`; if present return JSON; else fetch DB and set key with TTL 60s.
      3. On product update (PATCH) or variant stock change, delete `product:{id}` key to invalidate cache.
      4. Commit.
acceptance_criteria:
  - After GET, a Redis key exists; after update, key is removed.
notes:
  - Use JSON.stringify/parse for storage.
