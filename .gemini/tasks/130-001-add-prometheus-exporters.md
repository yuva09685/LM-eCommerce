# Task: 130-001 Add Prometheus exporter endpoints to services
id: 130-001
owner: yuvi
status: todo
priority: medium
path: /infra/monitoring
description:
  - short: Instrument services with /metrics endpoints using prom-client.
  - steps: |
      1. Install prom-client in backend services.
      2. Expose GET /metrics returning Prometheus metrics.
      3. Add infra/prometheus.yml to scrape services and RabbitMQ exporter.
      4. Commit.
acceptance_criteria:
  - /metrics returns counters.
