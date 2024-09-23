import { env } from '@/infra/env';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	schema: './src/infra/db/drizzle/schema/index.ts',
	out: './.migrations',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	dialect: 'postgresql',
});
