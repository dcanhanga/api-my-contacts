import type {
	CreateCategoryDto,
	ICategory,
	ICategoryCreatorRepository,
} from '@/domain/index.js';
import { db } from '@/infra/db/drizzle';
import { CategoryMapper } from '@/infra/db/drizzle/data-mapper';
import { categories } from '@/infra/db/drizzle/schema';

export class CategoryCreatorRepositoryDrizzle
	implements ICategoryCreatorRepository
{
	async create(input: CreateCategoryDto): Promise<ICategory> {
		const [category] = await db.insert(categories).values(input).returning();
		return CategoryMapper.toDomain(category);
	}
}
