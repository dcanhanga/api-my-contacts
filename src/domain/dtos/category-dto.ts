import type { UUID } from 'node:crypto';

export type CreateCategoryDto = {
	name: string;
};

export type DeleteCategoryDto = {
	id: UUID;
};
