# Task: 120-002 Add Playwright project and one E2E test
id: 120-002
owner: yuvi
status: todo
priority: medium
path: /e2e
description:
  - short: Setup Playwright and add a checkout flow test
  - steps: |
      1. `npx playwright init` in e2e folder.
      2. Create test `checkout.spec.ts` that navigates to product page, adds to cart, and goes to checkout (use stubs/mocks).
      3. Add CI step to run playwright tests.
      4. Commit.
acceptance_criteria:
  - Playwright test runs locally.
notes:
  - Use mocked API endpoints for stable tests in CI unless preview env available.
