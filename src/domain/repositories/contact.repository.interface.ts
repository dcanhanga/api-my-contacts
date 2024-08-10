import type { UUID } from 'node:crypto';
import type {
	GetContactsDto,
	UpdateContactsDto,
} from '../dtos/contact-dtos.js';
import type { IContact } from '../entities/contact-entity.js';

export interface IContactCreatorRepository {
	create: (contact: IContact) => Promise<IContact>;
}

export interface IContactReaderRepository {
	getById: (id: UUID) => Promise<IContact | undefined>;
	getAll: (orderBy: GetContactsDto['orderBy']) => Promise<IContact[]>;
	getByEmail: (email: string) => Promise<IContact | undefined>;
	getByName: (name: string) => Promise<IContact | undefined>;
	getByCategoryAndPhone(
		categoryId: UUID,
		phone: string,
	): Promise<IContact | undefined>;
}

export interface IContactDeleterRepository {
	delete(id: UUID): Promise<void>;
}

export interface IContactUpdaterRepository {
	update(contact: UpdateContactsDto): Promise<IContact>;
}
