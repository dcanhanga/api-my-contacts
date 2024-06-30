import { CategoryInMemory } from '@/Infra/Db/bd.js';
import type {
	ICategory,
	ICreateCategoryRepository,
	IGetCategoryByNameRepository,
} from '@/domain/index.js';
// export class CategoryRepositoryInMemory
// 	implements CreateCategoryRepository, GetCategoryByIdRepository
// {
// 	getByName(name: string): Promise<Category | undefined> {
// 		const category = CategoryInMemory.find(
// 			(category) => category.name === name,
// 		);
// 		return Promise.resolve(category);
// 	}
// 	async getById(id: string): Promise<Category | undefined> {
// 		const category = CategoryInMemory.find((category) => category.id === id);
// 		return Promise.resolve(category);
// 	}
// 	async get(): Promise<ICategory[]> {
// 		return Promise.resolve(CategoryInMemory);
// 	}
// 	async create(category: Category): Promise<Category> {
// 		CategoryInMemory.push(category);
// 		return Promise.resolve(category);
// 	}

// 	async update(category: Category): Promise<Category> {
// 		const updateCategory = CategoryInMemory.filter((c) => c.id === category.id);
// 		updateCategory[0].name = category.name;
// 		return Promise.resolve(updateCategory[0]);
// 	}
// }
export class CreateCategoryRepository implements ICreateCategoryRepository {
	async create(category: ICategory): Promise<ICategory> {
		CategoryInMemory.push(category);
		return Promise.resolve(category);
	}
}

export class GetCategoryByNameRepository
	implements IGetCategoryByNameRepository
{
	get(name: string): Promise<ICategory | undefined> {
		const category = CategoryInMemory.find(
			(category) => category.name === name,
		);
		return Promise.resolve(category);
	}
}
