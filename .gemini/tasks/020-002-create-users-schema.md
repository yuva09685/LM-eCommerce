# Task: 020-002 Add users schema migration
id: 020-002
owner: yuvi
status: todo
priority: high
path: /packages/db/migrations/0001_create_users.sql
description:
  - short: Create users and seller_verifications tables.
  - steps: |
      1. Create file packages/db/migrations/0001_create_users.sql with SQL:
         CREATE SCHEMA IF NOT EXISTS users;
         CREATE TABLE users.users (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), email text UNIQUE, password_hash text, role text, created_at timestamptz DEFAULT now(), updated_at timestamptz);
         CREATE TABLE users.seller_verifications (id uuid PRIMARY KEY, user_id uuid REFERENCES users.users(id), documents jsonb, status text, reviewed_by uuid, reviewed_at timestamptz);
      2. Commit file.
      3. Run migration script (see packages/db/readme).
acceptance_criteria:
  - tables exist when migration run.
notes:
  - Use pgcrypto extension or uuid-ossp depending on Postgres image.
