# Task: 110-002 Scaffold admin app with login
id: 110-002
owner: yuvi
status: todo
priority: medium
path: /apps/admin
description:
  - short: Create admin Next.js app and login route
  - steps: |
      1. `npx create-next-app@latest apps/admin --ts --app`
      2. Implement `/login` that accepts admin credentials and calls gateway auth.
      3. Create `/dashboard` page that shows list of recent orders fetched from gateway.
      4. Commit.
acceptance_criteria:
  - Admin can login and see dashboard (mock data allowed).
notes:
  - Use cookie-based auth for admin in browser.
