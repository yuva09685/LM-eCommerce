# Task: 100-002 Add rate limiter using Redis
id: 100-002
owner: yuvi
status: todo
priority: medium
path: /apps/gateway/src/middleware/rateLimiter.ts
description:
  - short: Implement IP-based rate limiting using Redis counters.
  - steps: |
      1. Install ioredis and implement middleware that increments `rate:{ip}` key with expiry window.
      2. If count exceeds limit return 429.
      3. Add configuration env variables for rate limit.
      4. Commit.
acceptance_criteria:
  - Repeated requests from same IP are limited.
notes:
  - Use redis INCR with expiry for atomic increments.
