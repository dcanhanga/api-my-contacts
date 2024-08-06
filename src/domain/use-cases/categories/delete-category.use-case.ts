import {
	type DeleteCategoryDto,
	DomainErrors,
	type IDeletedCategoryRepository,
	type IGetCategoryByIdRepository,
} from '@/domain/index.js';

export class DeleteCategoryUseCase {
	constructor(
		private readonly deleCategoryRepository: IDeletedCategoryRepository,
	) {}
	async execute(data: DeleteCategoryDto) {
		return this.deleCategoryRepository.delete(data.id);
	}
}
