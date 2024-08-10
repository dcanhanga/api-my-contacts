import {
	CreateCategoryController,
	DeleteCategoryController,
	GetCategoriesController,
	type IController,
	UpdateCategoryController,
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
		createCategoryValidatorComposition(),
	);
};

const deleteCategoryController = (): IController => {
	return new DeleteCategoryController(
		categoryUseCaseFactory.delete,
		deleteCategoryValidatorComposition(),
	);
};

const updateCategoryControllerFactory = (): IController => {
	return new UpdateCategoryController(
		categoryUseCaseFactory.update,
		updateCategoryValidatorComposition(),
	);
};

const createCategoryValidatorComposition = (): ValidatorComposite => {
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

const updateCategoryValidatorComposition = (): ValidatorComposite => {
	const validators = [];
	validators.push(new UUIDValidator('id', new StandardUUIDValidator()));
	validators.push(new NameValidator('name', new StandardNameValidator()));
	for (const field of ['id', 'name']) {
		validators.push(new RequiredFieldValidator(field));
	}
	return new ValidatorComposite(validators);
};
export const categoryControllerFactory = {
	create: createCategoryController(),
	getAll: getCategoriesController(),
	delete: deleteCategoryController(),
	update: updateCategoryControllerFactory(),
};
