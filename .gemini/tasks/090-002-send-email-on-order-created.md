# Task: 090-002 Send email when order.created arrives
id: 090-002
owner: yuvi
status: todo
priority: medium
path: /services/notifications/src/handlers/orderCreated.ts
description:
  - short: Subscribe to order.created and send an email to buyer and seller (console stub).
  - steps: |
      1. Subscribe to 'order.created' via packages/messaging.
      2. Render email template in services/notifications/templates/order-created.mustache.
      3. Call ConsoleEmailProvider.send(to, subject, body) that logs to console in dev.
      4. Commit.
acceptance_criteria:
  - When order.created is published, console shows email payloads.
notes:
  - Add retries for failures.
