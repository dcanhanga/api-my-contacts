import type { UUID } from 'node:crypto';

export type CreateCategoryDto = {
	name: string;
	id: UUID;
	createdAt?: Date;
	updatedAt?: Date;
};

export type DeleteCategoryDto = {
	id: UUID;
};

export type GetCategoriesDto = {
	orderBy: 'ASC' | 'DESC';
};

export type UpdateCategoryDto = { name: string; id: UUID; updatedAt?: Date };
