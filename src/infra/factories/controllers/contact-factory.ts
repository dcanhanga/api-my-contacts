import { DeleteContactController } from '@/application/controllers/contacts/delete-contact.controller.js';
import {
	CreateContactController,
	GetContactsController,
	type IController,
	UpdateContactController,
} from '@/application/index.js';

import { contactUseCaseFactory } from '../use-cases/contact-factory.js';
import { contactValidatorFactory } from '../validators/contact-factory.js';

const createContactController = (): IController => {
	return new CreateContactController(
		contactValidatorFactory.create,
		contactUseCaseFactory.create,
	);
};

const getContactController = (): IController => {
	return new GetContactsController(contactUseCaseFactory.getAll);
};

const deleteContactController = (): IController => {
	return new DeleteContactController(
		contactUseCaseFactory.delete,
		contactValidatorFactory.delete,
	);
};

const updateContactController = (): IController => {
	return new UpdateContactController(
		contactUseCaseFactory.update,
		contactValidatorFactory.update,
	);
};

export const contactControllerFactory = {
	create: createContactController(),
	getAll: getContactController(),
	delete: deleteContactController(),
	update: updateContactController(),
};
