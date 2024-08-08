import type {
	ICategory,
	IGetCategoryByNameRepository,
} from '@/domain/index.js';
import {
	CategoryDataMapper,
	DatabaseHelper,
	type ICategoryModel,
} from '@/infra/db/index.js';

export class GetCategoryByNameRepositoryPG
	implements IGetCategoryByNameRepository
{
	async get(name: string): Promise<ICategory> {
		const dbEntity = await DatabaseHelper.query<ICategoryModel>(
			`SELECT * FROM categories WHERE LOWER(REPLACE(name, ' ', '')) = $1`,
			[name],
		);
		const [category] = CategoryDataMapper.toEntity(dbEntity);
		return category;
	}
}
