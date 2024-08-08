import { CreateContactUseCase, GetContactsUseCase } from '@/domain/index.js';
import { categoryRepositoryFactory } from '../repositories/category-factory.js';
import { contactRepositoryFactory } from '../repositories/contact-factory.js';

const createContactUseCse = () => {
	return new CreateContactUseCase(
		categoryRepositoryFactory.getById,
		contactRepositoryFactory.create,
	);
};
const getContactsUseCase = () => {
	return new GetContactsUseCase(contactRepositoryFactory.getAll);
};
export const contactUseCaseFactory = {
	create: createContactUseCse(),
	getAll: getContactsUseCase(),
};
