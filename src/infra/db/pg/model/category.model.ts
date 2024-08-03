import type { UUID } from 'node:crypto';

export interface ICategoryModel {
	id: UUID;
	name: string;
	created_at: Date;
	updated_at: Date;
}
