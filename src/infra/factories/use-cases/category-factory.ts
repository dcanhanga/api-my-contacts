import { CreateCategoryUseCase, GetCategoriesUseCase } from '@/domain/index.js';
import { categoryRepositoryFactory } from '../repositories/category-factory.js';

const createCategoryUseCase = () => {
	return new CreateCategoryUseCase(
		categoryRepositoryFactory.getByName,
		categoryRepositoryFactory.create,
	);
};

const getCategoriesUseCase = () => {
	return new GetCategoriesUseCase(categoryRepositoryFactory.getAll);
};

export const categoryUseCaseFactory = {
	create: createCategoryUseCase(),
	getAll: getCategoriesUseCase(),
};
