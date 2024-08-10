import {
	ContactCreatorRepositoryPG,
	ContactDeleterRepositoryPG,
	ContactReaderRepositoryPG,
	ContactUpdaterRepositoryPG,
} from '@/infra/repositories/index.js';

const contactCreatorRepository = () => {
	return new ContactCreatorRepositoryPG();
};

const contactReaderRepository = () => {
	return new ContactReaderRepositoryPG();
};

const contactDeleterRepository = () => {
	return new ContactDeleterRepositoryPG();
};

const contactUpdaterRepository = () => {
	return new ContactUpdaterRepositoryPG();
};

export const contactRepositoryFactory = {
	creator: contactCreatorRepository(),
	reader: contactReaderRepository(),
	deleter: contactDeleterRepository(),
	updater: contactUpdaterRepository(),
};
