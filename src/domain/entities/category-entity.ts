import type { UUID } from 'node:crypto';

export interface ICategory {
	id: UUID;
	name: string;
	createdAt?: Date;
	updatedAt?: Date | null;
}
