CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"price" real NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
