# Task: UI-010-001 Create design tokens and Tailwind config
id: UI-010-001
owner: yuvi
status: todo
priority: high
path: /packages/ui/tokens/index.ts and /apps/web/tailwind.config.js
description:
  - short: Tokenize colors, spacing, radius, shadows and connect to Tailwind
  - steps: |
      1. Create packages/ui/tokens/index.ts exporting JS/TS tokens: colors, spacing, radii, shadows, fontSizes.
      2. Add apps/web/tailwind.config.js that reads tokens (via require) and maps them to theme.extend.
      3. Add base CSS file using @tailwind base; import variable font via @font-face or next/font.
      4. Commit.
acceptance_criteria:
  - `npm run dev` for apps/web loads and tokens are usable in Tailwind classes.
notes:
  - Keep spacing scale consistent (4px base, multiples).
