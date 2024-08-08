import type {
	GetCategoriesDto,
	GetContactsDto,
	IContact,
	IGetContactsRepository,
} from '@/domain/index.js';
import {
	ContactDataMapper,
	DatabaseHelper,
	type IContactModel,
} from '@/infra/db/index.js';

export class GetContactsRepositoryPG implements IGetContactsRepository {
	async get(orderBy: GetContactsDto['orderBy']): Promise<IContact[]> {
		const dbRecord = await DatabaseHelper.query<IContactModel>(
			`SELECT * FROM contacts ORDER BY name ${orderBy}`,
		);
		const category = ContactDataMapper.toEntity(dbRecord);
		return category;
	}
}
