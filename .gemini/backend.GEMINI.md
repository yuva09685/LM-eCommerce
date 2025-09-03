# Backend GEMINI — canonical memory for backend work
project: Marketplace Backend
owner: yuvi
purpose: definitive backend plan and runtime rules for the Gemini CLI sessions
stack:
  - Node.js (18+), TypeScript
  - NestJS (HTTP microservices)
  - Postgres (schema-per-service initially)
  - Drizzle for queries & migrations
  - RabbitMQ (durable broker) + Redis (cache, idempotency)
  - Docker (dev), Kubernetes (prod)
  - Observability: OpenTelemetry, Prometheus, structured JSON logs
principles:
  - Single responsibility: each service owns its data (schema-per-service)
  - Events are source of eventual consistency; always persist before publishing
  - Idempotency for all external-facing write actions
  - Secure-by-default: TLS, least privilege for DB and broker users
  - Backward-compatible event schemas; version everything
global-rules:
  - PKs = UUID v4; money fields = integer (cents)
  - All controllers use DTOs and class-validator / zod
  - No direct DB access from frontend; go through API gateway
  - Use pgBouncer in production and in dev compose to emulate pooling
runtime-ops:
  - RabbitMQ: persistent messages, exchanges `domain.topic`, DLQ per queue
  - Redis: caching (product:, session:) and short-term idempotency keys
  - Migrations: `packages/db/migrations` with timestamped sql files; CI runs migrations in a migration job before deployments
  - CI: run unit tests, lint, build images; run smoke tests against dependent services in ephemeral docker-compose
event-contracts:
  - All events follow shape:
    {
      "event_version":"1.0",
      "event_name":"order.created",
      "occurred_at":"2025-08-26T12:00:00Z",
      "payload":{...},
      "idempotency_key":"order:uuid-v4"
    }
  - Store JSON schemas in `packages/messaging/schemas/` and validate consumers with Ajv
topology:
  - Exchanges: `domain.topic` (type topic)
  - RoutingKey patterns: `order.created`, `order.paid`, `inventory.reserved`, `notifications.email`
  - Queues per bounded consumer: `orders.command`, `inventory.reserver`, `notifications.worker` with `x-dead-letter-exchange` -> `dlx`
performance & scaling notes:
  - Use read replicas for reporting queries and scale read-only endpoints behind caching
  - Add indexes on common filter columns (seller_id, status, created_at)
  - Avoid N+1 queries — always join or batch queries at the service layer
  - Use server-side pagination (cursor-based) for heavy lists
security:
  - JWT access tokens (short-lived) + refresh tokens stored hashed in DB/Redis
  - Enforce rate limiting at gateway and critical endpoints (login, register)
  - Audit logs for sensitive actions (seller verification, refund)
observability:
  - Each service exports `/metrics` and traces (OTEL)
  - Alert rules for queue depth > threshold, DLQ > 0, DB connection spikes
gemini-cli-ops:
  - Place task files in `./.gemini/tasks/` and commit
  - Start CLI with: `gemini -c`
  - Always run `/memory refresh` at start of session
  - Use `/chat save task-id` frequently to snapshot progress
