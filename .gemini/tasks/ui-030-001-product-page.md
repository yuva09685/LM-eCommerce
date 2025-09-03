# Task: UI-030-001 Product detail page with image gallery, variants and add-to-cart
id: UI-030-001
owner: yuvi
status: todo
priority: high
path: /apps/web/app/product/[id]/page.tsx
description:
  - short: High-performance product page with server-rendered data and interactive cart button
  - steps: |
      1. Implement server component that fetches product by id and passes props to client gallery/variant selector.
      2. Create client components: ImageGallery (lightbox), VariantSelector, PriceDisplay, AddToCart (optimistic UI).
      3. Add prefetch for "similar products" links to speed navigation.
      4. Ensure images are optimized and responsive.
      5. Commit.
acceptance_criteria:
  - Product page loads server-rendered content quickly; AddToCart is interactive with minimal JS.
notes:
  - Keep gallery heavy-lifting in a client component but lazy-load non-critical scripts.
