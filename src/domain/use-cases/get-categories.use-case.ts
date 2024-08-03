import type { IGetCategoriesRepository } from '../repositories/index.js';

export class GetCategoriesUseCase {
	constructor(
		private readonly getCategoriesRepository: IGetCategoriesRepository,
	) {}
	execute() {
		return this.getCategoriesRepository.get();
	}
}
