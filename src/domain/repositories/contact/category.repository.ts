import type { ICategory } from '@/domain/entities/index.js';

export interface ICreateCategoryRepository {
	create: (category: ICategory) => Promise<ICategory>;
}

export type IGetCategoryByNameRepository = {
	get: (category: string) => Promise<ICategory | undefined>;
};
