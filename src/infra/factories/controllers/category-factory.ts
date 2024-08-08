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
import { categoryUseCaseFactory } from '../use-cases/category-factory.js';

const getCategoriesController = (): IController => {
	return new GetCategoriesController(categoryUseCaseFactory.getAll);
};
const createCategoryController = (): IController => {
	return new CreateCategoryController(
		categoryUseCaseFactory.create,
		createUpdateCategoryValidatorComposition(),
	);
};

// const deleteCategoryControllerFactory = (): IController => {
// 	return new DeleteCategoryController(
// 		useCaseFactory.deleteCategory,
// 		deleteCategoryValidatorComposition(),
// 	);
// };

// const updateCategoryControllerFactory = (): IController => {
// 	return new UpdateCategoryController(
// 		useCaseFactory.updateCategory,
// 		createUpdateCategoryValidatorComposition(),
// 	);
// };

const createUpdateCategoryValidatorComposition = (): ValidatorComposite => {
	const validators = [];
	validators.push(new NameValidator('name', new StandardNameValidator()));
	for (const field of ['name']) {
		validators.push(new RequiredFieldValidator(field));
	}
	return new ValidatorComposite(validators);
};

const deleteCategoryValidatorComposition = (): ValidatorComposite => {
	const validators = [];
	validators.push(new UUIDValidator('id', new StandardUUIDValidator()));
	return new ValidatorComposite(validators);
};

export const categoryControllerFactory = {
	// getCategories: getCategoriesControllerFactory(),
	create: createCategoryController(),
	getAll: getCategoriesController(),
	// deleteCategory: deleteCategoryControllerFactory(),
	// updateCategory: updateCategoryControllerFactory(),
};
