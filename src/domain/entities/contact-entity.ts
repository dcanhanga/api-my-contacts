import type { UUID } from 'node:crypto';

export interface IContact {
	id: UUID;
	name: string;
	email: string;
	phone: string;
	categoryId: UUID;
	createdAt?: Date;
	updatedAt?: Date | null;
}
