import {
	DomainErrors,
	type ICategory,
	type ICategoryReaderRepository,
	type ICategoryUpdaterRepository,
	type IContactReaderRepository,
	type UpdateCategoryDto,
} from '../../index.js';

export class UpdateCategoryUseCase {
	constructor(
		private readonly categoryReaderRepository: ICategoryReaderRepository,

		private readonly categoryUpdaterRepository: ICategoryUpdaterRepository,
	) {}
	async execute(data: UpdateCategoryDto): Promise<ICategory> {
		const normalizedName = data.name.replace(/\s+/g, '').toLowerCase();

		const category = await this.categoryReaderRepository.getById(data.id);
		if (!category) {
			throw new DomainErrors.NotFoundError('Category');
		}
		const existingCategory =
			await this.categoryReaderRepository.getByName(normalizedName);
		if (existingCategory) {
			throw new DomainErrors.AlreadyExistsError('Category');
		}

		const categoryUpdated = await this.categoryUpdaterRepository.update({
			id: data.id,
			name: data.name,
			updatedAt: new Date(),
		});

		return categoryUpdated;
	}
}
