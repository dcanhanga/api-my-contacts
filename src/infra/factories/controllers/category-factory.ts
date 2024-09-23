import {
	CreateCategoryController,
	DeleteCategoryController,
	GetCategoriesController,
	type IController,
	UpdateCategoryController,
} from '@/application/index.js';

import { categoryUseCaseFactory } from '../use-cases/category-factory.js';
import { categoryValidatorFactory } from '../validators/category-factory.js';

const getCategoriesController = (): IController => {
	return new GetCategoriesController(categoryUseCaseFactory.getAll);
};
const createCategoryController = (): IController => {
	return new CreateCategoryController(
		categoryUseCaseFactory.create,
		categoryValidatorFactory.create
	);
};

const deleteCategoryController = (): IController => {
	return new DeleteCategoryController(
		categoryUseCaseFactory.delete,
		categoryValidatorFactory.delete
	);
};

const updateCategoryControllerFactory = (): IController => {
	return new UpdateCategoryController(
		categoryUseCaseFactory.update,
		categoryValidatorFactory.update
	);
};

export const categoryControllerFactory = {
	create: createCategoryController(),
	getAll: getCategoriesController(),
	delete: deleteCategoryController(),
	update: updateCategoryControllerFactory(),
};
