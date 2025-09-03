# Task: 030-002 Implement rabbitmq adapter skeleton
id: 030-002
owner: yuvi
status: todo
priority: high
path: /packages/messaging/src/rabbitmqAdapter.ts
description:
  - short: Implement adapter using amqplib with publish and subscribe methods.
  - steps: |
      1. Install `amqplib` in repo (root or package).
      2. Create adapter file implementing IMessageBus. Use env RABBITMQ_URL.
      3. publish: assertExchange('domain.topic','topic', { durable: true }) and publish with persistent flag.
      4. subscribe: assertQueue(queue), bind to relevant routing keys, consume with manual ACK/NACK.
      5. Implement simple retry logic: on handler throw, requeue up to 3 times (store attempt count in message headers) then publish to `dlq.<queue>`.
      6. Add README and commit.
acceptance_criteria:
  - A local test script can publish and consume a test message.
notes:
  - Keep all connection details behind adapter.
