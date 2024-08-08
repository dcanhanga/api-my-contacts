import type { UUID } from 'node:crypto';
import type {
	GetCategoriesDto,
	ICategory,
	UpdateCategoryDto,
} from '../index.js';

export interface ICreateCategoryRepository {
	create(category: ICategory): Promise<ICategory>;
}
export interface IGetCategoryByNameRepository {
	get(name: string): Promise<ICategory | undefined>;
}

export interface IGetCategoriesRepository {
	get(orderBy: GetCategoriesDto['orderBy']): Promise<ICategory[]>;
}

export interface IDeletedCategoryRepository {
	delete(id: UUID): Promise<void>;
}

export interface IGetCategoryByIdRepository {
	get(id: UUID): Promise<ICategory | undefined>;
}

export interface IUpdateCategoryRepository {
	update(category: UpdateCategoryDto): Promise<ICategory>;
}
