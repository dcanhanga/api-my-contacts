import {
	type DeleteCategoryDto,
	DomainErrors,
	type IDeletedCategoryRepository,
	type IGetCategoryByIdRepository,
} from '@/domain/index.js';

export class DeleteCategoryUseCase {
	constructor(
		private readonly getCategoryByIdRepository: IGetCategoryByIdRepository,
		private readonly deleCategoryRepository: IDeletedCategoryRepository,
	) {}
	async execute(data: DeleteCategoryDto) {
		const existingCategory = await this.getCategoryByIdRepository.get(data.id);
		if (!existingCategory) {
			throw new DomainErrors.NotFoundError('Category');
		}
		return this.deleCategoryRepository.delete(data.id);
	}
}
