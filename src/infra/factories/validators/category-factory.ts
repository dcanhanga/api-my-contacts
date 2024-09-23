import type { IValidator } from '@/application';
import {
	NameValidator,
	RequiredFieldValidator,
	StandardNameValidator,
	StandardUUIDValidator,
	UUIDValidator,
	ValidatorComposite,
} from '@/utils';
const createCategoryValidator = (): ValidatorComposite => {
	const REQUIRED_FIELDS = ['name'];
	const validators: IValidator[] = [
		new NameValidator('name', new StandardNameValidator()),
		...REQUIRED_FIELDS.map(field => new RequiredFieldValidator(field)),
	];
	return new ValidatorComposite(validators);
};

const deleteCategoryValidator = (): ValidatorComposite => {
	const validators: IValidator[] = [
		new UUIDValidator('id', new StandardUUIDValidator()),
	];

	return new ValidatorComposite(validators);
};

const updateCategoryValidator = (): ValidatorComposite => {
	const REQUIRED_FIELDS = ['id', 'name'];
	const validators: IValidator[] = [
		new UUIDValidator('id', new StandardUUIDValidator()),
		new NameValidator('name', new StandardNameValidator()),
		...REQUIRED_FIELDS.map(field => new RequiredFieldValidator(field)),
	];
	return new ValidatorComposite(validators);
};

export const categoryValidatorFactory = {
	create: createCategoryValidator(),
	delete: deleteCategoryValidator(),
	update: updateCategoryValidator(),
};
