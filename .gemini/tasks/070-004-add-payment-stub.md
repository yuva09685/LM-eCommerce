# Task: 070-004 Add a simple payment provider stub
id: 070-004
owner: yuvi
status: todo
priority: medium
path: /services/payments (or packages/payments)
description:
  - short: Provide a Payments interface with a stub for dev.
  - steps: |
      1. Create packages/payments with interface IPaymentProvider { charge(order): Promise<{status, provider_id}> }.
      2. Implement ConsolePaymentProvider that returns success after 500ms.
      3. Integrate into orders flow: after order.created publish, call charge; if success, publish order.paid event and update order status to paid.
      4. Commit.
acceptance_criteria:
  - Orders can be moved from pending to paid via stub and order.paid event published.
notes:
  - Replace stub with real provider later (Stripe, etc).
