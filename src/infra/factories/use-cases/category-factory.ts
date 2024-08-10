import {
	CreateCategoryUseCase,
	DeleteCategoryUseCase,
	GetCategoriesUseCase,
	UpdateCategoryUseCase,
} from '@/domain/index.js';
import { categoryRepositoryFactory } from '../repositories/category-factory.js';

const createCategoryUseCase = () => {
	return new CreateCategoryUseCase(
		categoryRepositoryFactory.reader,
		categoryRepositoryFactory.creator,
	);
};

const getCategoriesUseCase = () => {
	return new GetCategoriesUseCase(categoryRepositoryFactory.reader);
};

const deleteCategoryUseCase = () => {
	return new DeleteCategoryUseCase(categoryRepositoryFactory.deleter);
};
const updateCategoryUseCase = () => {
	return new UpdateCategoryUseCase(
		categoryRepositoryFactory.reader,
		categoryRepositoryFactory.updater,
	);
};
export const categoryUseCaseFactory = {
	create: createCategoryUseCase(),
	getAll: getCategoriesUseCase(),
	delete: deleteCategoryUseCase(),
	update: updateCategoryUseCase(),
};
