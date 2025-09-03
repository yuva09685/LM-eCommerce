# Task: UI-010-002 Install and configure shadcn/ui + Radix primitives
id: UI-010-002
owner: yuvi
status: todo
priority: high
path: /packages/ui and /apps/web
description:
  - short: Setup shadcn boilerplate and Radix dependency
  - steps: |
      1. Add dependencies: @radix-ui/react-<primitives>, shadcn/ui (or repo pattern), lucide-react
      2. In packages/ui, create component wrappers using Radix + Tailwind (Button, Dialog, Tabs).
      3. Export components from packages/ui/index.ts to be imported by apps/web.
      4. Commit.
acceptance_criteria:
  - A sample page imports Button from packages/ui and renders correctly.
notes:
  - Ensure you use server-client boundaries in Next.js App Router: keep only interactive components client components.
