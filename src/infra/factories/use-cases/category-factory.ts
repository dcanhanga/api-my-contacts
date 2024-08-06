import {
	CreateCategoryUseCase,
	DeleteCategoryUseCase,
	GetCategoriesUseCase,
} from '@/domain/index.js';
import { UpdateCategoryUseCase } from '@/domain/index.js';
import { repositoryFactory } from '../repositories/category-factory.js';

const getCategoriesUseCaseFactory = () => {
	return new GetCategoriesUseCase(repositoryFactory.getCategories);
};

const createCategoryFactory = () => {
	return new CreateCategoryUseCase(
		repositoryFactory.getCategoryByName,
		repositoryFactory.createCategory,
	);
};
const deleteCategoryFactory = () => {
	return new DeleteCategoryUseCase(repositoryFactory.deleteCategory);
};

const updateCategoryFactory = () => {
	return new UpdateCategoryUseCase(
		repositoryFactory.getCategoryByName,
		repositoryFactory.getCategoryById,
		repositoryFactory.updateCategory,
	);
};

export const useCaseFactory = {
	getCategories: getCategoriesUseCaseFactory(),
	createCategory: createCategoryFactory(),
	deleteCategory: deleteCategoryFactory(),
	updateCategory: updateCategoryFactory(),
};
