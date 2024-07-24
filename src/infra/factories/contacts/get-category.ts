import { GetCategoryController } from '@/application/controllers/get-category.controller.js';
import type { IController } from '@/application/index.js';
import { GetCategoryUseCase } from '@/domain/use-cases/get-category.use-case.js';
import { GetCategoryRepositoryPG } from '@/infra/repositories/pg/get-category.repository.js';

export const makeGetCategory = (): IController => {
	const getCategoryUseCase = new GetCategoryUseCase(
		new GetCategoryRepositoryPG(),
	);
	return new GetCategoryController(getCategoryUseCase);
};
