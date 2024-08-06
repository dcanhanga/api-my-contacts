import {
	CreateCategoryRepositoryPG,
	DeleteCategoryRepositoryPG,
	GetCategoriesRepositoryPG,
	GetCategoryByIdRepositoryPG,
	GetCategoryByNameRepositoryPG,
} from '@/infra/repositories/index.js';
import { UpdateCategoryRepositoryPG } from '@/infra/repositories/pg/update-category.repository.js';

const getCategoriesRepositoryFactory = () => {
	return new GetCategoriesRepositoryPG();
};

const getCategoryByIdRepositoryFactory = () => {
	return new GetCategoryByIdRepositoryPG();
};
const getCategoryByNameRepositoryFactory = () => {
	return new GetCategoryByNameRepositoryPG();
};
const createCategoryRepositoryFactory = () => {
	return new CreateCategoryRepositoryPG();
};
const updateCategoryRepositoryFactory = () => {
	return new UpdateCategoryRepositoryPG();
};
const deleteCategoryRepositoryFactory = () => {
	return new DeleteCategoryRepositoryPG();
};
export const repositoryFactory = {
	getCategories: getCategoriesRepositoryFactory(),
	getCategoryById: getCategoryByIdRepositoryFactory(),
	getCategoryByName: getCategoryByNameRepositoryFactory(),
	createCategory: createCategoryRepositoryFactory(),
	deleteCategory: deleteCategoryRepositoryFactory(),
	updateCategory: updateCategoryRepositoryFactory(),
};
