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
			`UPDATE contacts SET
			name = COALESCE($1, name),
			category_id = COALESCE($2, category_id),
			phone = COALESCE($3, phone),
			email = COALESCE($4, email),
			updated_at = COALESCE($5, updated_at)
			WHERE id = $6
			RETURNING *`,
			[
				dbEntity.name,
				dbEntity.category_id,
				dbEntity.phone,
				dbEntity.email,
				dbEntity.updated_at,
				dbEntity.id,
			]
		);
		const [contact] = ContactDataMapper.toEntity(dbRecord);

		return contact;
	}
}
