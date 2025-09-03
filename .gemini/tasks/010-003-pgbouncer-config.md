# Task: 010-003 Add pgBouncer config
id: 010-003
owner: yuvi
status: todo
priority: medium
path: /infra/pgbouncer
description:
  - short: Provide pgBouncer config and example auth file.
  - steps: |
      1. Create infra/pgbouncer/userlist.txt with credentials (example).
      2. Create infra/pgbouncer/pgbouncer.ini with pooling settings:
         - max_client_conn=1000
         - default_pool_size=20
      3. Ensure compose references these files as volumes.
      4. Commit.
acceptance_criteria:
  - pgbouncer connects and proxies to Postgres in dev.
