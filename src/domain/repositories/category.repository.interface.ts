import type { ICategory } from '@/domain/index.js';

export interface ICreateCategoryRepository {
	create(category: ICategory): Promise<ICategory>;
}
export interface IGetCategoryByNameRepository {
	get(name: string): Promise<ICategory | undefined>;
}
