# Task: 090-001 Scaffold notifications service
id: 090-001
owner: yuvi
status: todo
priority: medium
path: /services/notifications
description:
  - short: Scaffold notifications service to send emails and webhooks.
  - steps: |
      1. Create services/notifications project.
      2. Add packages/messaging dependency and a ConsoleEmailProvider for dev.
      3. Commit skeleton.
acceptance_criteria:
  - service can subscribe to events and log notifications.
