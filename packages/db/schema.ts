
import { pgTable, uuid, text, real, timestamp } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: real('price').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});
