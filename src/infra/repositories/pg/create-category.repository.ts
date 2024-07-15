import type { ICategory, ICreateCategoryRepository} from '@/domain/index.js';
import DatabaseHelper from '@/infra/db/postgres.js';

export class CreateCategoryRepositoryPG implements ICreateCategoryRepository {
	async create(input: ICategory): Promise<ICategory> {
		const [category] = await DatabaseHelper.query<ICategory>(
			'INSERT INTO categories (name, id) VALUES ($1, $2) RETURNING *',
			[input.name, input.id],
		);
		return category;
	}
}
