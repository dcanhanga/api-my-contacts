import { CreateCategoryUseCase } from '@/domain/index.js';
import {
	MakeCreateCategoryRepository,
	MakeGetCategoryByNameRepository,
} from '../../Repositories/index.js';

export const makeCreateCategoryUseCase = (): CreateCategoryUseCase => {
	const createCategoryUseCase = new CreateCategoryUseCase(
		MakeCreateCategoryRepository(),
		MakeGetCategoryByNameRepository(),
	);
	return createCategoryUseCase;
};
