import {
	CategoryCreatorRepositoryPG,
	CategoryDeleterRepositoryPG,
	CategoryReaderRepositoryPG,
	CategoryUpdaterRepositoryPG,
} from '@/infra/repositories/index.js';

const categoryCreatorRepositoryFactory = () => {
	return new CategoryCreatorRepositoryPG();
};

const categoryDeleterRepositoryFactory = () => {
	return new CategoryDeleterRepositoryPG();
};
const categoryReaderRepositoryFactory = () => {
	return new CategoryReaderRepositoryPG();
};

const categoryUpdaterRepositoryFactory = () => {
	return new CategoryUpdaterRepositoryPG();
};

export const categoryRepositoryFactory = {
	creator: categoryCreatorRepositoryFactory(),
	deleter: categoryDeleterRepositoryFactory(),
	reader: categoryReaderRepositoryFactory(),
	updater: categoryUpdaterRepositoryFactory(),
};
