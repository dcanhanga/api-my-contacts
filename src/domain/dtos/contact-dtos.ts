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

export type DeleteContactsDto = {
	id: UUID;
};

export type UpdateContactsDto = {
	name: string;
	phone: string;
	email?: string;
	categoryId: UUID;
	id: UUID;
	updatedAt?: Date;
};
