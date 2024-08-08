import type { UUID } from 'node:crypto';

export interface IContactModel {
	id: UUID;
	name: string;
	phone: string;
	email?: string;
	category_id: UUID;
	created_at?: Date;
	updated_at?: Date;
}
