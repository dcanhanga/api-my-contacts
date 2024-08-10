import type {
	IContact,
	IContactUpdaterRepository,
	UpdateContactsDto,
} from '@/domain/index.js';
import {
	ContactDataMapper,
	DatabaseHelper,
	type IContactModel,
} from '@/infra/db/index.js';

export class ContactUpdaterRepositoryPG implements IContactUpdaterRepository {
	async update(input: UpdateContactsDto): Promise<IContact> {
		const dbEntity = ContactDataMapper.toDbEntity(input);

		const dbRecord = await DatabaseHelper.query<IContactModel>(
			`UPDATE contacts SET name = $1, category_id = $2, phone = $3, email = $4, updated_at = $5
			WHERE id = $6
			RETURNING *`,
			[
				dbEntity.name,
				dbEntity.category_id,
				dbEntity.phone,
				dbEntity.email,
				dbEntity.updated_at,
				dbEntity.id,
			],
		);
		const [contact] = ContactDataMapper.toEntity(dbRecord);

		return contact;
	}
}
