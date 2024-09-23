import { sql } from 'drizzle-orm';
import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { varchar } from 'drizzle-orm/pg-core';
import { categories } from './category.schema';

export const contacts = pgTable('contacts', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: varchar('name', { length: 255 }).notNull(),
	phone: varchar('phone', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	categoryId: uuid('category_id')
		.references(() => categories.id, { onDelete: 'cascade' })
		.notNull(),
	createdAt: timestamp('created_at', { withTimezone: true })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true })
		.$onUpdate(() => new Date())
		.default(sql`null`),
});

export type ContactModel = typeof contacts.$inferSelect;
export type NewContactModel = typeof contacts.$inferInsert;
