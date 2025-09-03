# Task: 110-001 Scaffold apps/web (Next.js)
id: 110-001
owner: yuvi
status: todo
priority: high
path: /apps/web
description:
  - short: Create Next.js app with TypeScript and App Router
  - steps: |
      1. `npx create-next-app@latest apps/web --ts --app` or create equivalent structure.
      2. Add packages/ui as local dependency for shared components.
      3. Create page `/product/[id]/page.tsx` that fetches product via gateway.
      4. Commit.
acceptance_criteria:
  - Product page renders product data via fetch from gateway.
