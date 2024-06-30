import { GetCategoryUseCase } from '../../../../Domain/index.js';
import { MakeInMemoryRepository } from '../../Repositories/index.js';

export const makeGetCategoryUseCase = (): GetCategoryUseCase => {
	const getCategoryUseCase = new GetCategoryUseCase(MakeInMemoryRepository());
	return getCategoryUseCase;
};
