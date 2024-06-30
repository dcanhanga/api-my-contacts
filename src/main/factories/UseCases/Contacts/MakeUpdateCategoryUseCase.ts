import { UpdateCategoryUseCase } from '../../../../Domain/UseCases/Contacts/UpdateCategory.useCase.js';
import { MakeInMemoryRepository } from '../../Repositories/index.js';

export const makeUpdateCategoryUseCase = (): UpdateCategoryUseCase => {
	const createCategoryUseCase = new UpdateCategoryUseCase(
		MakeInMemoryRepository(),
		MakeInMemoryRepository(),
	);
	return createCategoryUseCase;
};
