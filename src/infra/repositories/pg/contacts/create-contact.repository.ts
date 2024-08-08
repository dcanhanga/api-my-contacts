import type { IContact, ICreateCategoryRepository } from '@/domain/index.js';
import {
	ContactDataMapper,
	DatabaseHelper,
	type IContactModel,
} from '@/infra/db/index.js';

export class CreateContactRepositoryPG implements ICreateCategoryRepository {
	async create(input: IContact): Promise<IContact> {
		const dbEntity = ContactDataMapper.toDbEntity(input);
		const dbRecord = await DatabaseHelper.query<IContactModel>(
			`INSERT INTO contacts
			(id, name, category_id, phone, email, created_at, updated_at)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING *`,
			[
				dbEntity.id,
				dbEntity.name,
				dbEntity.category_id,
				dbEntity.phone,
				dbEntity.email,
				dbEntity.created_at,
				dbEntity.updated_at,
			],
		);
		const [contact] = ContactDataMapper.toEntity(dbRecord);
		return contact;
	}
}
