import type { UUID } from 'node:crypto';
import type { GetContactsDto } from '../dtos/contact-dtos.js';
import type { IContact } from '../entities/contact-entity.js';

export interface ICreateContactRepository {
	create: (contact: IContact) => Promise<IContact>;
}

export interface IGetContactByIdRepository {
	get: (id: UUID) => Promise<IContact | undefined>;
}

export interface IGetContactsRepository {
	get: (orderBy: GetContactsDto['orderBy']) => Promise<IContact[]>;
}
