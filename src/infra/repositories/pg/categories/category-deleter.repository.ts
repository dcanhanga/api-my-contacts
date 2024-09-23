import type { UUID } from 'node:crypto';
import type { ICategory, ICategoryDeleterRepository } from '@/domain/index.js';
import { DatabaseHelper } from '@/infra/db/index.js';

export class CategoryDeleterRepositoryPG implements ICategoryDeleterRepository {
	async delete(id: UUID): Promise<void> {
		await DatabaseHelper.query<ICategory>(
			`DELETE FROM categories WHERE id = $1`,
			[id]
		);
	}
}
