import type { UUID } from 'node:crypto';
import type { ICategory } from '@/domain';
import type { CategoryModel } from '@/infra/db/drizzle/schema';

export class CategoryMapper {
	static toDomain(raw: CategoryModel): ICategory {
		return {
			id: raw.id as UUID,
			name: raw.name,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
		};
	}
}
