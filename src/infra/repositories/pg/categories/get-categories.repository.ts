import type {
	GetCategoriesDto,
	ICategory,
	IGetCategoriesRepository,
} from '@/domain/index.js';
import {
	CategoryDataMapper,
	DatabaseHelper,
	type ICategoryModel,
} from '@/infra/db/index.js';

export class GetCategoriesRepositoryPG implements IGetCategoriesRepository {
	async get(orderBy: GetCategoriesDto['orderBy']): Promise<ICategory[]> {
		const dbRecord = await DatabaseHelper.query<ICategoryModel>(
			`SELECT * FROM categories ORDER BY name ${orderBy}`,
		);
		const category = CategoryDataMapper.toEntity(dbRecord);
		return category;
	}
}
