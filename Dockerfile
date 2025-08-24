# Base image
FROM node:20-slim AS base

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy pnpm workspace config
COPY pnpm-workspace.yaml ./

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the monorepo
COPY . .

# Build all apps and packages
RUN pnpm -r build

# --- Production Image ---
FROM node:20-slim AS production

# Set working directory
WORKDIR /app

# Copy from base
COPY --from=base /app /app

# Expose ports
EXPOSE 3000 3001 4000

# Start command
CMD ["pnpm", "run", "dev"]
