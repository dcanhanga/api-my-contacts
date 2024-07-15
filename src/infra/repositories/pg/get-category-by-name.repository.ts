import type { ICategory, IGetCategoryByNameRepository} from '@/domain/index.js';
import DatabaseHelper from '@/infra/db/postgres.js';

export class GetCategoryByNameRepositoryPG implements IGetCategoryByNameRepository {
	async get(name:string): Promise<ICategory> {
		const [category] = await DatabaseHelper.query<ICategory>(
			'SELECT * FROM categories WHERE name = $1',
			[name],
		);
		return category;
	}
}
