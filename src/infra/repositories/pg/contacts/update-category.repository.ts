import type {
	ICategory,
	IUpdateCategoryRepository,
	UpdateCategoryDto,
} from '@/domain/index.js';
import {
	CategoryDataMapper,
	DatabaseHelper,
	type ICategoryModel,
} from '@/infra/db/index.js';

export class UpdateCategoryRepositoryPG implements IUpdateCategoryRepository {
	async update(input: UpdateCategoryDto): Promise<ICategory> {
		const dbEntity = CategoryDataMapper.toDbEntity(input);
		const dbRecord = await DatabaseHelper.query<ICategoryModel>(
			`UPDATE categories set name = $1, updated_at = $2 WHERE id = $3 RETURNING *`,
			[dbEntity.name, dbEntity.updated_at, input.id],
		);
		const [category] = CategoryDataMapper.toEntity(dbRecord);
		return category;
	}
}
