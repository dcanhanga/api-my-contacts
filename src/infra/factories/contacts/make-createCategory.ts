import {
CreateCategoryController,
	type IController,
} from '@/application/index.js';
import { CreateCategoryUseCase } from '@/domain/index.js';
import {CreateCategoryRepositoryPG, GetCategoryByNameRepositoryPG} from '@/infra/index.js'
import {
	DefaultNameValidator,
	NameValidator,
	RequiredFieldValidator,
	ValidatorComposite,
} from '@/utils/index.js';

export const makeCreateCategory = (): IController => {
	const createCategoryUseCase = new CreateCategoryUseCase(
		new CreateCategoryRepositoryPG(),
		new GetCategoryByNameRepositoryPG(),
	);
	return new CreateCategoryController(
		createCategoryUseCase,
		validatorComposition(),
	);
};

const validatorComposition = () => {
	const validators = [];
	for (const field of ['name']) {
		validators.push(new RequiredFieldValidator(field));
	}
	validators.push(new NameValidator('name', new DefaultNameValidator()));
	return new ValidatorComposite(validators);
};
