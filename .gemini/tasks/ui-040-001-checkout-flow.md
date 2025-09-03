# Task: UI-040-001 Multi-step checkout flow (review, address, payment)
id: UI-040-001
owner: yuvi
status: todo
priority: high
path: /apps/web/app/checkout
description:
  - short: Implement secure, fast checkout using server actions where possible
  - steps: |
      1. Implement server components for the review step (read-only) and address step (save server action).
      2. Implement client component for payment provider integration (lazy-loaded).
      3. Add validation, inline errors and progress indicator.
      4. Commit.
acceptance_criteria:
  - Users can complete checkout in dev using payments stub and see order created.
notes:
  - Use API routes only for payment sensitive flows; enforce CSRF and Idempotency.
