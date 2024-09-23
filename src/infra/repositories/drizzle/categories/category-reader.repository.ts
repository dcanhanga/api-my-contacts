import type { UUID } from 'node:crypto';
import { eq, sql } from 'drizzle-orm';

import type {
	GetCategoriesDto,
	ICategory,
	ICategoryReaderRepository,
} from '@/domain';
import { db } from '@/infra/db/drizzle';
import { CategoryMapper } from '@/infra/db/drizzle/data-mapper';
import { categories } from '@/infra/db/drizzle/schema';

export class CategoryReaderRepositoryDrizzle
	implements ICategoryReaderRepository
{
	async getByName(name: string): Promise<ICategory | undefined> {
		const category = await db.query.categories.findFirst({
			where: sql`LOWER(REPLACE(${categories.name}, ' ', '')) = ${name.toLowerCase().replace(/\s/g, '')}`,
		});

		if (!category) {
			return undefined;
		}
		return CategoryMapper.toDomain(category);
	}

	async getById(id: UUID): Promise<ICategory | undefined> {
		const category = await db.query.categories.findFirst({
			where: eq(categories.id, id),
		});
		if (!category) return undefined;
		return CategoryMapper.toDomain(category);
	}

	async getAll(orderBy: GetCategoriesDto['orderBy']): Promise<ICategory[]> {
		const dbRecord = await db
			.select()
			.from(categories)
			.orderBy(sql`${categories.name} ${sql.raw(orderBy)}`);
		return dbRecord.map(category => CategoryMapper.toDomain(category));
	}
}
