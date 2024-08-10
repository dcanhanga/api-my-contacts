import {
	CreateContactUseCase,
	DeleteContactUseCase,
	GetContactsUseCase,
} from '@/domain/index.js';
import { UpdateContactUseCase } from '@/domain/use-cases/contacts/update-contact.useCase.js';
import { categoryRepositoryFactory } from '../repositories/category-factory.js';
import { contactRepositoryFactory } from '../repositories/contact-factory.js';

const createContactUseCse = () => {
	return new CreateContactUseCase(
		categoryRepositoryFactory.reader,
		contactRepositoryFactory.reader,
		contactRepositoryFactory.creator,
	);
};
const getContactsUseCase = () => {
	return new GetContactsUseCase(contactRepositoryFactory.reader);
};

const deleteContactUseCase = () => {
	return new DeleteContactUseCase(contactRepositoryFactory.deleter);
};

const updateContactUseCase = () => {
	return new UpdateContactUseCase(
		categoryRepositoryFactory.reader,
		contactRepositoryFactory.reader,
		contactRepositoryFactory.updater,
	);
};
export const contactUseCaseFactory = {
	create: createContactUseCse(),
	getAll: getContactsUseCase(),
	delete: deleteContactUseCase(),
	update: updateContactUseCase(),
};
