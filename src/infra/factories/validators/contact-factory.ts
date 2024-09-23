import type { IValidator } from '@/application';
import {
	EmailValidator,
	NameValidator,
	OptionalEmailValidator,
	OptionalNameValidator,
	OptionalUUIDValidator,
	RequiredFieldValidator,
	StandardEmailValidator,
	StandardNameValidator,
	StandardUUIDValidator,
	UUIDValidator,
	ValidatorComposite,
} from '@/utils';

const createContactValidator = (): ValidatorComposite => {
	const REQUIRED_FIELDS = ['name', 'categoryId', 'phone', 'email'];
	const validators: IValidator[] = [
		new UUIDValidator('categoryId', new StandardUUIDValidator()),
		new NameValidator('name', new StandardNameValidator()),
		new EmailValidator('email', new StandardEmailValidator()),
		...REQUIRED_FIELDS.map(field => new RequiredFieldValidator(field)),
	];
	return new ValidatorComposite(validators);
};

const deleteContactValidator = (): ValidatorComposite => {
	const validators = [new UUIDValidator('id', new StandardUUIDValidator())];
	return new ValidatorComposite(validators);
};

const updateContactValidator = (): ValidatorComposite => {
	const standardNameValidator = new StandardNameValidator();
	const standardUUIDValidator = new StandardUUIDValidator();
	const standardEmailValidator = new StandardEmailValidator();

	const optionalValidators: IValidator[] = [
		new UUIDValidator(
			'categoryId',
			new OptionalUUIDValidator(standardUUIDValidator)
		),
		new NameValidator('name', new OptionalNameValidator(standardNameValidator)),
		new EmailValidator(
			'email',
			new OptionalEmailValidator(standardEmailValidator)
		),
	];

	const requiredValidators: IValidator[] = [new RequiredFieldValidator('id')];

	return new ValidatorComposite([...optionalValidators, ...requiredValidators]);
};

export const contactValidatorFactory = {
	create: createContactValidator(),
	delete: deleteContactValidator(),
	update: updateContactValidator(),
};
