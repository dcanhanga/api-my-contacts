import type { ICategory, IGetCategoryRepository } from '@/domain/index.js';
import DatabaseHelper from '@/infra/db/postgres.js';

export class GetCategoryRepositoryPG implements IGetCategoryRepository {
	async get(): Promise<ICategory[]> {
		const category = await DatabaseHelper.query<ICategory>(
			'SELECT * FROM categories',
		);
		return category;
	}
}
