import type {
	DeleteCategoryDto,
	ICategoryDeleterRepository,
} from '@/domain/index.js';

export class DeleteCategoryUseCase {
	constructor(
		private readonly categoryDeleterRepository: ICategoryDeleterRepository,
	) {}
	async execute(data: DeleteCategoryDto) {
		return this.categoryDeleterRepository.delete(data.id);
	}
}
