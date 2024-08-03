import type { ICategory, IGetCategoriesRepository } from '@/domain/index.js';
import {
	CategoryDataMapper,
	DatabaseHelper,
	type ICategoryModel,
} from '@/infra/db/index.js';

export class GetCategoriesRepositoryPG implements IGetCategoriesRepository {
	async get(): Promise<ICategory[]> {
		const dbRecord = await DatabaseHelper.query<ICategoryModel>(
			`SELECT * FROM categories`,
		);
		const category = CategoryDataMapper.toEntity(dbRecord);
		return category;
	}
}
