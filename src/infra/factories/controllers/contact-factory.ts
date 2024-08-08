import {
	CreateContactController,
	GetContactsController,
	type IController,
	type IValidator,
} from '@/application/index.js';
import {
	EmailValidator,
	NameValidator,
	OPtionalEmailValidator,
	RequiredFieldValidator,
	StandardEmailValidator,
	StandardNameValidator,
	StandardUUIDValidator,
	UUIDValidator,
	ValidatorComposite,
} from '@/utils/index.js';
import { contactUseCaseFactory } from '../use-cases/contact-factory.js';

const createContactController = (): IController => {
	return new CreateContactController(
		creteContactValidatorComposite(),
		contactUseCaseFactory.create,
	);
};

const getContactController = (): IController => {
	return new GetContactsController(contactUseCaseFactory.getAll);
};

const creteContactValidatorComposite = (): IValidator => {
	const validator: IValidator[] = [];
	validator.push(new UUIDValidator('categoryId', new StandardUUIDValidator()));
	validator.push(new NameValidator('name', new StandardNameValidator()));
	const requiredField = ['name', 'categoryId', 'phone'];
	for (const field of requiredField) {
		validator.push(new RequiredFieldValidator(field));
	}
	const optionalEmailValidator = new OPtionalEmailValidator(
		new StandardEmailValidator(),
	);
	validator.push(new EmailValidator('email', optionalEmailValidator));
	return new ValidatorComposite(validator);
};

export const contactControllerFactory = {
	create: createContactController(),
	getAll: getContactController(),
};
