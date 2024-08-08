import {
	CreateContactRepositoryPG,
	GetContactsRepositoryPG,
} from '@/infra/repositories/index.js';

const createContactRepository = () => {
	return new CreateContactRepositoryPG();
};
const getContactsRepository = () => {
	return new GetContactsRepositoryPG();
};
export const contactRepositoryFactory = {
	create: createContactRepository(),
	getAll: getContactsRepository(),
};
