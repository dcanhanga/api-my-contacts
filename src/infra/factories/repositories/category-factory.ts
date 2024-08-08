import {
	CreateCategoryRepositoryPG,
	DeleteCategoryRepositoryPG,
	GetCategoriesRepositoryPG,
	GetCategoryByIdRepositoryPG,
	GetCategoryByNameRepositoryPG,
	UpdateCategoryRepositoryPG,
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
const updateCategoryRepositoryFactory = () => {
	return new UpdateCategoryRepositoryPG();
};
const deleteCategoryRepositoryFactory = () => {
	return new DeleteCategoryRepositoryPG();
};
export const categoryRepositoryFactory = {
	getAll: getCategoriesRepositoryFactory(),
	getById: getCategoryByIdRepositoryFactory(),
	getByName: getCategoryByNameRepositoryFactory(),
	create: createCategoryRepositoryFactory(),
	delete: deleteCategoryRepositoryFactory(),
	update: updateCategoryRepositoryFactory(),
};
