import {
	CategoryCreatorRepositoryDrizzle,
	CategoryDeleterRepositoryDrizzle,
	CategoryReaderRepositoryDrizzle,
	CategoryUpdaterRepositoryDrizzle,
} from '@/infra/repositories/drizzle/categories';

const categoryCreatorRepositoryFactory = () => {
	return new CategoryCreatorRepositoryDrizzle();
};

const categoryDeleterRepositoryFactory = () => {
	return new CategoryDeleterRepositoryDrizzle();
};
const categoryReaderRepositoryFactory = () => {
	return new CategoryReaderRepositoryDrizzle();
};

const categoryUpdaterRepositoryFactory = () => {
	return new CategoryUpdaterRepositoryDrizzle();
};

export const categoryRepositoryFactory = {
	creator: categoryCreatorRepositoryFactory(),
	deleter: categoryDeleterRepositoryFactory(),
	reader: categoryReaderRepositoryFactory(),
	updater: categoryUpdaterRepositoryFactory(),
};
