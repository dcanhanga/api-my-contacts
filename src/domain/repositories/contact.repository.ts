import type { IContact } from '../entities/contact-entity.js';

export interface IListContactsRepository {
	list: () => Promise<IContact>;
}
