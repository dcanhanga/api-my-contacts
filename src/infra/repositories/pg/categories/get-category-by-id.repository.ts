import type { UUID } from 'node:crypto';
import type { ICategory, IGetCategoryByIdRepository } from '@/domain/index.js';
import {
	CategoryDataMapper,
	DatabaseHelper,
	type ICategoryModel,
} from '@/infra/db/index.js';

export class GetCategoryByIdRepositoryPG implements IGetCategoryByIdRepository {
	async get(id: UUID): Promise<ICategory> {
		console.log({ id }, 'get category');
		const dbRecord = await DatabaseHelper.query<ICategoryModel>(
			`SELECT * FROM categories WHERE id = $1`,
			[id],
		);
		console.log({ dbRecord });
		const [category] = CategoryDataMapper.toEntity(dbRecord);

		return category;
	}
}
