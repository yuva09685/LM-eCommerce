# Task: 050-002 Implement seller verification endpoints
id: 050-002
owner: yuvi
status: todo
priority: high
path: /services/users/src/seller.controller.ts
description:
  - short: Endpoints: POST /seller/verify (submit docs), GET /seller/verify/:id (admin review)
  - steps: |
      1. Add POST /seller/verify accepting multipart/form-data for documents (use multer).
      2. Store document metadata in users.seller_verifications.documents JSONB and upload file to S3-compatible storage or local /uploads for dev.
      3. Add GET /seller/verify/:id for admins to view and update status (approved/rejected).
      4. Commit.
acceptance_criteria:
  - Upload writes DB row and file stored locally in dev.
notes:
  - Keep docs as metadata (filename, s3_key), not file blobs in DB.
