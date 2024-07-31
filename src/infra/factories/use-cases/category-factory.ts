import { CreateCategoryUseCase } from '@/domain/index.js';
import { GetCategoryUseCase } from '@/domain/use-cases/get-category.use-case.js';
import { categoryRepositoryFactory } from '../repositories/category-factory.js';

class CategoryUseCaseFactory {
	private static instance: CategoryUseCaseFactory;
	private createCategoryUseCaseInstance: CreateCategoryUseCase;
	private getCategoryUseCaseInstance: GetCategoryUseCase;
	private constructor() {
		this.createCategoryUseCaseInstance = new CreateCategoryUseCase(
			categoryRepositoryFactory.createCategoryRepository(),
			categoryRepositoryFactory.getCategoryByNameRepository(),
		);
		this.getCategoryUseCaseInstance = new GetCategoryUseCase(
			categoryRepositoryFactory.getCategoryRepository(),
		);
	}

	public static getInstance(): CategoryUseCaseFactory {
		if (!CategoryUseCaseFactory.instance) {
			CategoryUseCaseFactory.instance = new CategoryUseCaseFactory();
		}
		return CategoryUseCaseFactory.instance;
	}
	public createCategoryUseCase(): CreateCategoryUseCase {
		return this.createCategoryUseCaseInstance;
	}
	public getCategoryUseCase(): GetCategoryUseCase {
		return this.getCategoryUseCaseInstance;
	}
}
export const categoryUseCaseFactory = CategoryUseCaseFactory.getInstance();
