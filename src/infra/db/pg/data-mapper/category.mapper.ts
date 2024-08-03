import type { ICategory } from '@/domain/index.js';
import type { ICategoryModel } from './../model/index.js';

export class CategoryDataMapper {
	static toEntity(dbRecord: ICategoryModel[]): ICategory[] {
		return dbRecord.map((category) => ({
			id: category.id,
			name: category.name,
			createdAt: new Date(category.created_at),
			updatedAt: new Date(category.updated_at),
		}));
	}
	static toDbEntity(categories: ICategory): ICategoryModel {
		return {
			id: categories.id,
			name: categories.name,
			created_at: categories.createdAt,
			updated_at: categories.updatedAt,
		};
	}
}
