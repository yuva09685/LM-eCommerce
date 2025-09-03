# Task: UI-020-001 Build Home page shell with hero & collections
id: UI-020-001
owner: yuvi
status: todo
priority: high
path: /apps/web/app/page.tsx
description:
  - short: Implement home page shell (server component) that fetches collections
  - steps: |
      1. Create server component at apps/web/app/page.tsx that fetches curated collections via gateway endpoint /collections (SSR).
      2. Render hero section, grid of collection cards (use packages/ui Card component).
      3. Add skeleton loading UI for client components that will hydrate later.
      4. Commit.
acceptance_criteria:
  - Home page renders quickly on first paint and shows curated collections.
notes:
  - Use Next.js image for hero background; preload critical images.
