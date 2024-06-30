import {
	CreateCategoryController,
	type IController,
	type IValidator,
} from '@/application/index.js';

import {
	DefaultNameValidator,
	ValidatorComposite,
} from '@/utils/validators/index.js';
import { RequiredFieldValidator } from '@/utils/validators/requiredFieldValidator.js';
import { NameValidator } from '@/utils/validators/validatorName.js';
import { makeCreateCategoryUseCase } from '../../UseCases/index.js';

export const makeCreateCategoryController = (): IController => {
	return new CreateCategoryController(
		makeCreateCategoryUseCase(),
		makeCreateCategoryValidator(),
	);
};

export const makeCreateCategoryValidator = (): ValidatorComposite => {
	const validators: IValidator[] = [];
	for (const field of ['name']) {
		validators.push(new RequiredFieldValidator(field));
	}
	validators.push(new NameValidator('name', new DefaultNameValidator()));
	return new ValidatorComposite(validators);
};
