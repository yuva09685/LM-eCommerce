# Task: 020-001 Create packages/db skeleton (drizzle client)
id: 020-001
owner: yuvi
status: todo
priority: high
path: /packages/db
description:
  - short: Create DB package with Drizzle client scaffold.
  - steps: |
      1. mkdir -p packages/db/src
      2. Create packages/db/package.json (name: @marketplace/db) with scripts: migrate, test
      3. Create src/index.ts exporting a function `getDbClient()` that reads DATABASE_URL from env and returns a drizzle client.
      4. Create packages/db/migrations/README.md with migration instructions.
      5. Commit.
acceptance_criteria:
  - `node -e "require('./packages/db').getDbClient()"` does not throw (after npm install).
notes:
  - Keep migration files in SQL or JS, timestamped.
