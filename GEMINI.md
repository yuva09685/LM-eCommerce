## 1. Project Core Identity

* **Project Name:** E-Commerce Platform
* **Core Mission:** Build a scalable, full-stack, multi-vendor e-commerce website.
* **Key Feature:** Any user can become a retailer or a wholesaler, creating a dynamic marketplace with a seller verification process.
* **Target Architecture:** A professional-grade, microservices-based system designed for high traffic.

## 2. Guiding Principles (The Four Pillars)

All generated code and architectural decisions must align with these principles:

1.  **Scalability:** Design for growth. Solutions must be horizontally scalable.
2.  **Maintainability:** Code must be clean, modular, well-documented, and organized within the monorepo structure.
3.  **Performance:** Prioritize speed and responsiveness. Utilize caching, efficient database queries, and modern frontend practices.
4.  **Security:** Implement security best practices for authentication, data storage, and transactions.

## 3. The Technology Stack (Non-Negotiable)

Use **only** the technologies specified below. Do not introduce any other libraries or frameworks without explicit instruction.

* **Monorepo Tool:** **Turborepo**
* **Frontend Framework:** **Next.js** with React
* **UI Components:** **Shadcn UI** and **Radix UI**. Do not use other component libraries like Material-UI or Bootstrap.
* **Backend Framework:** **NestJS** (for the microservices architecture)
* **Database:** **PostgreSQL**
* **ORM:** **Drizzle ORM** (Type-safe SQL-like queries are required)
* **Containerization:** **Docker**

## 4. Architecture & Structure Mandates

### Monorepo Structure

Strictly follow this directory structure. All new code must be placed in the appropriate package or application.

/
├── apps/
│   ├── web/          # Next.js customer and seller-facing app
│   ├── admin/        # Next.js super-admin dashboard app
│   └── gateway/      # API Gateway
│
├── services/
│   ├── auth/         # Auth microservice
│   ├── users/        # Users microservice
│   ├── products/     # Products microservice
│   ├── orders/       # Orders microservice
│   ├── reviews/      # [UPDATED] Reviews and ratings microservice
│   └── notifications/# [UPDATED] Notifications microservice (Email, etc.)
│
├── packages/
│   ├── db/           # Drizzle ORM schema, client, and migrations
│   ├── ui/           # Shared Shadcn UI components
│   └── config/       # Shared ESLint, TypeScript configs

### Backend Architecture

* The backend **must** be implemented as a set of independent **microservices** using NestJS.
* Do not create a monolithic backend.
* All external communication to the backend must go through the **API Gateway**.

## 5. Database & Schema Rules

* The database is **PostgreSQL**.
* All database interactions must go through **Drizzle ORM**.
* Use `uuid` for primary keys where applicable.
* The schema must be consistent with the established blueprint. Key tables include:
    * `users` (with role and verification status)
    * `seller_verifications` **[UPDATED]** (for document submission)
    * `products` (with support for variants, options) **[UPDATED]**
    * `collections` & `product_collections`
    * `reviews`
    * `orders` & `order_items`
    * `shipments`
    * `wishlist` & `wishlist_items`
    * `notifications` **[UPDATED]**

## 6. Frontend Development Directives

* The frontend is a **Next.js** application using the App Router.
* All UI components must be built using **Shadcn UI**. Create reusable components in `packages/ui`.
* **API Integration:** All API calls must be handled using a centralized **axios** instance.
* **[UPDATED] User Experience:** The application should prioritize a clean, intuitive, and user-friendly interface to build trust and encourage engagement.
* Implement all specified pages, including:
    * Home, Collections, Product Details
    * Cart, Wishlist, Track Order
    * Profile, Login, Register
    * Multi-step Checkout Flow
    * **[UPDATED]** Seller Onboarding/Verification Flow
    * Admin Dashboard (Products, Orders, Users, Verifications Management)

## 7. Code Generation Standards & Best Practices

* **Language:** All code must be written in **TypeScript**.
* **API Style:** All APIs developed in NestJS must be **RESTful**.
* **[UPDATED] DTOs:** Every `create` and `update` operation in controllers must use Data Transfer Objects (DTOs) for payload validation and type safety.
* **Code Quality:** Generate clean, readable, and well-commented code.
* **Error Handling:** Implement robust error handling in both the frontend and backend.
* **SOLID Principles:** All backend (NestJS) code must strictly adhere to SOLID principles.
* **Best Practices:** Follow established industry best practices for each technology.

## 8. Testing & Validation Standards

* **API Testing:** Every API endpoint in the NestJS microservices must be accompanied by a corresponding request definition in a **REST Client** file (`.http` or `.rest`).
* **End-to-End (E2E) Testing:** The frontend applications must have comprehensive E2E test cases written using **Playwright**.

9. [HIGHLIGHT] The Capstone Feature: Platform-to-Brand Launchpad
This is the most critical, high-impact feature planned for the platform. It is slated for the final phase of development and is designed to be our ultimate unique selling proposition, ensuring long-term retailer growth and loyalty.

Overview: Empowering Retailers to Become Brands
Our platform's ultimate goal is not just to host sellers, but to act as an incubator for future brands. This feature provides a direct pathway for successful retailers to launch their own fully independent e-commerce websites, powered by our technology but under their complete control.

Key Components:

On-Demand Independent Websites: Successful retailers on our platform can formally request a new, standalone website for their brand.

Guaranteed Zero-Loss Data Migration: We will execute a seamless and complete migration of all their critical business data, including their full product catalog, order history, customer database, and all product reviews.

Full Data Portability Engine: We will offer a robust import/export tool. This allows retailers to easily pull product data from other platforms to join our marketplace or export their data to move elsewhere, reinforcing our commitment to data ownership.

Revenue Privacy and Brand Autonomy: This feature gives our most successful partners the privacy and control they need to scale their business into a recognized, independent brand, separate from the main marketplace.