import type {
	ICategory,
	ICategoryUpdaterRepository,
	UpdateCategoryDto,
} from '@/domain/index.js';
import { db } from '@/infra/db/drizzle';
import { CategoryMapper } from '@/infra/db/drizzle/data-mapper';
import { categories } from '@/infra/db/drizzle/schema';

export class CategoryUpdaterRepositoryDrizzle
	implements ICategoryUpdaterRepository
{
	async update(input: UpdateCategoryDto): Promise<ICategory> {
		const [category] = await db.update(categories).set(input).returning();
		return CategoryMapper.toDomain(category);
	}
}
