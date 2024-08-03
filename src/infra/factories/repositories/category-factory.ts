import {
	CreateCategoryRepositoryPG,
	DeleteCategoryRepositoryPG,
	GetCategoriesRepositoryPG,
	GetCategoryByIdRepositoryPG,
	GetCategoryByNameRepositoryPG,
} from '@/infra/repositories/index.js';

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
const deleteCategoryRepositoryFactory = () => {
	return new DeleteCategoryRepositoryPG();
};
export const repositoryFactory = {
	getCategories: getCategoriesRepositoryFactory(),
	getCategoryById: getCategoryByIdRepositoryFactory(),
	getCategoryByName: getCategoryByNameRepositoryFactory(),
	createCategory: createCategoryRepositoryFactory(),
	deleteCategory: deleteCategoryRepositoryFactory(),
};
