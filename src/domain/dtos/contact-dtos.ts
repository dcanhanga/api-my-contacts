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
	id: UUID;
	name?: string;
	phone?: string;
	email?: string;
	categoryId?: UUID;
	updatedAt?: Date;
};
