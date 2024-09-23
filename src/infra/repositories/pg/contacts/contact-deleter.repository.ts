import type { UUID } from 'node:crypto';
import type { ICategory, IContactDeleterRepository } from '@/domain/index.js';
import { DatabaseHelper } from '@/infra/db/index.js';

export class ContactDeleterRepositoryPG implements IContactDeleterRepository {
	async delete(id: UUID): Promise<void> {
		await DatabaseHelper.query<ICategory>(
			`DELETE FROM contacts WHERE id = $1`,
			[id]
		);
	}
}
