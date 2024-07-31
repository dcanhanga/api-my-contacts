import { GetCategoryUseCase } from '@/domain/use-cases/get-category.use-case.js';
import { GetCategoryController } from '../../../../staged/application/controllers/get-category.controller.js';
import type { IController } from '../../../../staged/application/index.js';
import { categoryRepositoryFactory } from '../repositories/category-factory.js';

export const makeGetCategory = (): IController => {
	const getCategoryUseCase = new GetCategoryUseCase(
		categoryRepositoryFactory.getCategoryRepository(),
	);
	return new GetCategoryController(getCategoryUseCase);
};
