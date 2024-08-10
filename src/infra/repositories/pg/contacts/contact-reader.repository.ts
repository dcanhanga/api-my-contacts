import type { UUID } from 'node:crypto';
import type {
	GetContactsDto,
	IContact,
	IContactReaderRepository,
} from '@/domain/index.js';
import {
	ContactDataMapper,
	DatabaseHelper,
	type IContactModel,
} from '@/infra/db/index.js';

export class ContactReaderRepositoryPG implements IContactReaderRepository {
	async getByName(name: string): Promise<IContact> {
		const dbRecord = await DatabaseHelper.query<IContactModel>(
			`SELECT * FROM contacts WHERE name = $1`,
			[name],
		);
		const [contact] = ContactDataMapper.toEntity(dbRecord);
		return contact;
	}
	async getAll(orderBy: GetContactsDto['orderBy']): Promise<IContact[]> {
		const dbRecord = await DatabaseHelper.query<IContactModel>(
			`SELECT contacts.*, categories.name AS category_name
			FROM contacts
			LEFT JOIN categories ON categories.id = contacts.category_id
			ORDER BY contacts.name ${orderBy}`,
		);
		const contact = ContactDataMapper.toEntity(dbRecord);
		return contact;
	}
	async getById(id: UUID): Promise<IContact | undefined> {
		const dbRecord = await DatabaseHelper.query<IContactModel>(
			`SELECT contacts.*, categories.name AS category_name
				FROM contacts
				LEFT JOIN categories ON categories.id = contacts.category_id
				WHERE contacts.id = $1`,
			[id],
		);

		const [contact] = ContactDataMapper.toEntity(dbRecord);
		return contact;
	}
	async getByEmail(email: string): Promise<IContact> {
		const dbRecord = await DatabaseHelper.query<IContactModel>(
			`SELECT * FROM contacts WHERE email = $1`,
			[email],
		);
		const [contact] = ContactDataMapper.toEntity(dbRecord);
		return contact;
	}

	async getByCategoryAndPhone(
		categoryId: UUID,
		phone: string,
	): Promise<IContact> {
		const dbRecords = await DatabaseHelper.query<IContactModel>(
			`SELECT * FROM contacts WHERE category_id = $1 AND phone = $2`,
			[categoryId, phone],
		);
		const [contact] = ContactDataMapper.toEntity(dbRecords);
		return contact;
	}
}
