import type { UUID } from 'node:crypto';

export interface IContactModel {
	id: UUID;
	name: string;
	phone: string;
	email?: string;
	created_at?: Date;
	updated_at?: Date;
	category_id: UUID;
	category_name?: string;
}
