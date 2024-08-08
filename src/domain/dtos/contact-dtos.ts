import type { UUID } from 'node:crypto';

export type CreateContactDto = {
	name: string;
	email?: string;
	phone: string;
	categoryId: UUID;
};
export type GetContactsDto = {
	orderBy: 'ASC' | 'DESC';
};
