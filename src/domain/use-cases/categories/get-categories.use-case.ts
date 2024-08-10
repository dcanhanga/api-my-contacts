import type {
	GetCategoriesDto,
	ICategoryReaderRepository,
} from '@/domain/index.js';

export class GetCategoriesUseCase {
	constructor(
		private readonly categoryReaderRepository: ICategoryReaderRepository,
	) {}
	execute(data?: GetCategoriesDto) {
		const orderBy =
			(data?.orderBy ?? 'ASC').toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

		return this.categoryReaderRepository.getAll(orderBy);
	}
}
