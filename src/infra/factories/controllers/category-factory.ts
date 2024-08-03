import { DeleteCategoryController } from '@/application/controllers/delete-category.controller.js';
import {
	CreateCategoryController,
	GetCategoriesController,
	type IController,
} from '@/application/index.js';
import {
	NameValidator,
	RequiredFieldValidator,
	StandardNameValidator,
	StandardUUIDValidator,
	UUIDValidator,
	ValidatorComposite,
} from '@/utils/index.js';
import { useCaseFactory } from '../use-cases/category-factory.js';

const getCategoriesControllerFactory = (): IController => {
	return new GetCategoriesController(useCaseFactory.getCategories);
};
const createCategoryControllerFactory = (): IController => {
	return new CreateCategoryController(
		useCaseFactory.createCategory,
		createCategoryValidatorComposition(),
	);
};

const deleteCategoryControllerFactory = (): IController => {
	return new DeleteCategoryController(
		useCaseFactory.deleteCategory,
		deleteCategoryValidatorComposition(),
	);
};

const createCategoryValidatorComposition = (): ValidatorComposite => {
	const validators = [];
	for (const field of ['name']) {
		validators.push(new RequiredFieldValidator(field));
	}
	validators.push(new NameValidator('name', new StandardNameValidator()));
	return new ValidatorComposite(validators);
};

const deleteCategoryValidatorComposition = (): ValidatorComposite => {
	const validators = [];
	validators.push(new UUIDValidator('id', new StandardUUIDValidator()));
	return new ValidatorComposite(validators);
};

export const controllerFactory = {
	getCategories: getCategoriesControllerFactory(),
	createCategory: createCategoryControllerFactory(),
	deleteCategory: deleteCategoryControllerFactory(),
};
