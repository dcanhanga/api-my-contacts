import type {
	GetCategoriesDto,
	IGetCategoriesRepository,
} from '@/domain/index.js';

export class GetCategoriesUseCase {
	constructor(
		private readonly getCategoriesRepository: IGetCategoriesRepository,
	) {}
	execute(data?: GetCategoriesDto) {
		const orderBy =
			(data?.orderBy ?? 'ASC').toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

		return this.getCategoriesRepository.get(orderBy);
	}
}
