import type {
	CreateCategoryDto,
	ICategory,
	ICategoryCreatorRepository,
} from '@/domain/index.js';
import {
	CategoryDataMapper,
	DatabaseHelper,
	type ICategoryModel,
} from '@/infra/db/index.js';

export class CategoryCreatorRepositoryPG implements ICategoryCreatorRepository {
	async create(input: CreateCategoryDto): Promise<ICategory> {
		const dbEntity = CategoryDataMapper.toDbEntity(input);
		const dbRecord = await DatabaseHelper.query<ICategoryModel>(
			`INSERT INTO categories (name, id, created_at, updated_at)
       VALUES ($1, $2, $3, $4) RETURNING *`,
			[dbEntity.name, dbEntity.id, dbEntity.created_at, dbEntity.updated_at],
		);
		const [category] = CategoryDataMapper.toEntity(dbRecord);
		return category;
	}
}
