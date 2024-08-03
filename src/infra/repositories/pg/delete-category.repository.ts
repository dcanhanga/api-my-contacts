import type { UUID } from 'node:crypto';
import type { ICategory, IDeletedCategoryRepository } from '@/domain/index.js';
import { DatabaseHelper } from '@/infra/db/index.js';

export class DeleteCategoryRepositoryPG implements IDeletedCategoryRepository {
	async delete(id: UUID): Promise<void> {
		await DatabaseHelper.query<ICategory>(
			`DELETE FROM categories WHERE id = $1`,
			[id],
		);
	}
}
