import type { UUID } from 'node:crypto';
import type {
	GetCategoriesDto,
	ICategory,
	UpdateCategoryDto,
} from '../index.js';

export interface ICategoryUpdaterRepository {
	update(category: UpdateCategoryDto): Promise<ICategory>;
}

export interface ICategoryCreatorRepository {
	create: (category: ICategory) => Promise<ICategory>;
}

export interface ICategoryReaderRepository {
	getByName: (name: string) => Promise<ICategory | undefined>;
	getAll: (orderBy: GetCategoriesDto['orderBy']) => Promise<ICategory[]>;
	getById: (id: UUID) => Promise<ICategory | undefined>;
}

export interface ICategoryDeleterRepository {
	delete: (id: UUID) => Promise<void>;
}
