import type { UUID } from 'node:crypto';
import type { ICategory } from '../index.js';

export interface ICreateCategoryRepository {
	create(category: ICategory): Promise<ICategory>;
}
export interface IGetCategoryByNameRepository {
	get(name: string): Promise<ICategory | undefined>;
}

export interface IGetCategoriesRepository {
	get(): Promise<ICategory[]>;
}

export interface IDeletedCategoryRepository {
	delete(id: UUID): Promise<void>;
}

export interface IGetCategoryByIdRepository {
	get(id: UUID): Promise<ICategory>;
}
