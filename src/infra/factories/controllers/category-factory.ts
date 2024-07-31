import {
	CreateCategoryController,
	GetCategoryController,
} from '@/application/index.js';
import {
	NameValidator,
	RequiredFieldValidator,
	StandardNameValidator,
	ValidatorComposite,
} from '@/utils/index.js';
import {} from '../../../../staged/utils/index.js';
import { categoryUseCaseFactory } from '../use-cases/category-factory.js';

const createCategoryValidatorComposition = (): ValidatorComposite => {
	const validators = [];
	for (const field of ['name']) {
		validators.push(new RequiredFieldValidator(field));
	}
	validators.push(new NameValidator('name', new StandardNameValidator()));
	return new ValidatorComposite(validators);
};
class CategoryControllerFactory {
	private static instance: CategoryControllerFactory;
	private createCategoryControllerInstance: CreateCategoryController;
	private getCategoryControllerInstance: GetCategoryController;
	public static getInstance(): CategoryControllerFactory {
		if (!CategoryControllerFactory.instance) {
			CategoryControllerFactory.instance = new CategoryControllerFactory();
		}
		return CategoryControllerFactory.instance;
	}
	private constructor() {
		this.createCategoryControllerInstance = new CreateCategoryController(
			categoryUseCaseFactory.createCategoryUseCase(),
			createCategoryValidatorComposition(),
		);
		this.getCategoryControllerInstance = new GetCategoryController(
			categoryUseCaseFactory.getCategoryUseCase(),
		);
	}
	public createCategoryController(): CreateCategoryController {
		return this.createCategoryControllerInstance;
	}
	public getCategoryController(): GetCategoryController {
		return this.getCategoryControllerInstance;
	}
}

export const categoryControllerFactory =
	CategoryControllerFactory.getInstance();
