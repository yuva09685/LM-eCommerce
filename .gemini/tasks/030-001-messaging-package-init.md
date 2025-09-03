# Task: 030-001 Create packages/messaging skeleton
id: 030-001
owner: yuvi
status: todo
priority: high
path: /packages/messaging
description:
  - short: Create messaging package with interface definitions.
  - steps: |
      1. mkdir -p packages/messaging/src
      2. Create packages/messaging/package.json
      3. Create src/index.ts exporting TypeScript interfaces:
         export type Message = { event_version: string; event_name: string; occurred_at: string; payload: any; idempotency_key?: string; }
         export interface IMessageBus { publish(exchange:string, routingKey:string, message:Message): Promise<void>; subscribe(queue:string, handler:(msg:Message)=>Promise<void>, options?:any): Promise<void>; }
      4. Commit.
acceptance_criteria:
  - package builds locally.
notes:
  - Keep interfaces minimal and stable.
