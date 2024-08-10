import type { UUID } from 'node:crypto';
import type {
	GetCategoriesDto,
	ICategory,
	ICategoryReaderRepository,
} from '@/domain/index.js';
import {
	CategoryDataMapper,
	DatabaseHelper,
	type ICategoryModel,
} from '@/infra/db/index.js';

export class CategoryReaderRepositoryPG implements ICategoryReaderRepository {
	async getByName(name: string): Promise<ICategory | undefined> {
		const dbRecord = await DatabaseHelper.query<ICategoryModel>(
			`SELECT * FROM categories WHERE LOWER(REPLACE(name, ' ', '')) = $1`,
			[name],
		);
		const [category] = CategoryDataMapper.toEntity(dbRecord);
		return category;
	}

	async getById(id: UUID): Promise<ICategory | undefined> {
		const dbRecord = await DatabaseHelper.query<ICategoryModel>(
			`SELECT * FROM categories WHERE id = $1`,
			[id],
		);

		const [category] = CategoryDataMapper.toEntity(dbRecord);

		return category;
	}

	async getAll(orderBy: GetCategoriesDto['orderBy']): Promise<ICategory[]> {
		const dbRecord = await DatabaseHelper.query<ICategoryModel>(
			`SELECT * FROM categories ORDER BY name ${orderBy}`,
		);
		const category = CategoryDataMapper.toEntity(dbRecord);
		return category;
	}
}
