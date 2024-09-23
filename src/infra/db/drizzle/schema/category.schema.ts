import { sql } from 'drizzle-orm';
import { timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: varchar('name', { length: 255 }).notNull(),
	createdAt: timestamp('created_at', { withTimezone: true })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true })
		.$onUpdateFn(() => new Date())
		.default(sql`NULL`),
});

export type CategoryModel = typeof categories.$inferSelect;
export type NewCategoryModel = typeof categories.$inferInsert;
