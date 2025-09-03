# Task: 120-001 Add GitHub Actions CI workflow
id: 120-001
owner: yuvi
status: todo
priority: high
path: /.github/workflows/ci.yml
description:
  - short: Create CI workflow to run lint, tests, build
  - steps: |
      1. Create .github/workflows/ci.yml with jobs: lint, test, build.
      2. Use actions/checkout and node setup.
      3. Cache node modules and turbo cache.
      4. Commit workflow file.
acceptance_criteria:
  - Pushing branch triggers workflow.
