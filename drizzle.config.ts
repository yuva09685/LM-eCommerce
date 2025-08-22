
import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
  schema: './packages/db/schema.ts',
  out: './packages/db/drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
