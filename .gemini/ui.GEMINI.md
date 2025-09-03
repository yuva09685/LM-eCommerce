# UI / Design System GEMINI — canonical memory for UI design + engineering
project: Marketplace UI & Design System
owner: yuvi
purpose: single source for UI decisions, component library, pages, performance rules
stack:
  - Next.js (App Router) + TypeScript
  - Tailwind CSS + shadcn/ui primitives + Radix UI primitives (a11y-ready)
  - Headless components, shadcn + Lucide icons
  - Recharts or similar for charts (admin)
  - Image CDN (Vercel/Cloudflare/Cloudfront) + next/image for build-time optimization
design-principles:
  - Visual system first: tokenized spacing, colors, typography, elevation
  - Motion is purposeful: micro-interactions, no gratuitous movement
  - Accessibility-first: semantic HTML, keyboard, screen-reader labels, 4.5:1 contrast
  - Performance-first: minimize JS on critical path, use server components where possible
  - Reusability: one source of truth `packages/ui` with atomic components
font & typography:
  - Use a variable font (Inter Variable or IBM Plex Variable) loaded via preconnect and font-display: swap
  - Tokenize sizes: xs, sm, base, lg, xl, 2xl; line-height tokens
component strategy:
  - `packages/ui` contains: Button, Input, Select, Modal, Card, Table, DataGrid, Toast, Form primitives (react-hook-form + zod), Avatar, Badge, Icon
  - Use Radix for primitives (Accessible comboboxes, dialogs, popovers) and extend with shadcn styling
  - Keep components server-safe (UI parts that can be server components—use Client boundary only where necessary)
page list (priority & core flows):
  - Public:
    - `/` — landing / curated collections
    - `/search` — search + filters (server-side search + client-side filters)
    - `/product/[id]` — product detail (variants, images gallery, price, add-to-cart)
    - `/collection/[id]` — collection listing (infinite scroll or cursor pages)
    - `/cart` — cart summary
    - `/checkout` — multi-step checkout (review, address, payment)
    - `/auth/login`, `/auth/register`, `/auth/forgot`
    - `/profile` — user dashboard (orders, saved items)
  - Seller:
    - `/seller/onboard` — multi-step onboarding with file uploads (verification)
    - `/seller/products/new` — product create wizard (variants + images)
    - `/seller/products/[id]` — product edit
  - Admin:
    - `/admin` — dashboard (orders, verifications, system health)
    - `/admin/orders/[id]` — order detail + manual actions
performance rules (UI):
  - Use Next.js Server Components for data-heavy pages where SEO/fast LCP matters
  - Code-split large modules (checkout payment providers) — lazy load UI heavy parts
  - Use `next/image` (or equivalent) + AVIF/WEBP + responsive sizes
  - Avoid heavy client-side state libraries globally; prefer local state and fetch on interactions
  - Add skeleton UIs for perceived performance; show first content paint quickly
UX & polish checklist (million-dollar feel):
  - Cohesive spacing system and consistent shadow radii (2-3 levels)
  - Crisp microcopy: buttons, success, error messages; inline validation
  - Responsive grid that gracefully adapts from mobile to widescreen
  - Touch targets: ≥44px on mobile
  - Thoughtful empty states and error pages
design tokens (repo):
  - `packages/ui/tokens` holds color, spacing, radius, shadows, z-index values, typography tokens
accessibility:
  - All interactive elements keyboard focusable; dialog traps focus; images have alt
  - Use Lighthouse a11y score target: ≥90
dev-ops & testing:
  - Visual regression tests (Chromatic or Playwright snapshot)
  - Playwright for critical flows (checkout, onboarding, product create)
  - Lighthouse in CI for home, product, checkout pages with thresholds
gemini-cli-ops:
  - Add `./.gemini/tasks/ui-` prefixed microtasks to build component library and pages
  - Start tasks in CLI with `@./.gemini/tasks/110-001-scaffold-web-nextjs.md` then iterate
