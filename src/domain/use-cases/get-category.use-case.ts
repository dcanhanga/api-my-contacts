import type { IGetCategoryRepository } from '../repositories/category.repository.interface.js';

export class GetCategoryUseCase {
	constructor(private readonly getCategoryRepository: IGetCategoryRepository) {}
	execute() {
		return this.getCategoryRepository.get();
	}
}
