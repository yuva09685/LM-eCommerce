# Task: 030-010 Publish a test `order.created` event (end-to-end smoke)
id: 030-010
owner: yuvi
status: todo
priority: high
path: /packages/messaging/examples/testPublish.ts
description:
  - short: Verify messaging adapter can publish and a test consumer receives message
  - steps: |
      1. Create file packages/messaging/examples/testPublish.ts
      2. Import rabbitmqAdapter from packages/messaging and connect using RABBITMQ_URL from infra/.env
      3. Publish an event: {event_version:"1.0", event_name:"order.created", occurred_at: new Date().toISOString(), payload:{order_id:"test-1"}, idempotency_key:"test-1"}
      4. Create a simple consumer script packages/messaging/examples/testConsume.ts that subscribes to queue `test.queue` and logs message.
      5. Run `node packages/messaging/examples/testPublish.js` and `node packages/messaging/examples/testConsume.js` in separate terminals to validate.
acceptance_criteria:
  - Consumer logs the published event.
notes:
  - Use npm scripts to run these scripts for convenience.
