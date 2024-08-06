import {
	DomainErrors,
	type ICategory,
	type IGetCategoryByIdRepository,
	type IGetCategoryByNameRepository,
	type IUpdateCategoryRepository,
	type UpdateCategoryDto,
} from '../../index.js';

export class UpdateCategoryUseCase {
	constructor(
		private readonly getCategoryByNameRepository: IGetCategoryByNameRepository,
		private readonly getCategoryByIdRepository: IGetCategoryByIdRepository,
		private readonly updateCategoryRepository: IUpdateCategoryRepository,
	) {}
	async execute(data: UpdateCategoryDto): Promise<ICategory> {
		const normalizedName = data.name.replace(/\s+/g, '').toLowerCase();

		const category = await this.getCategoryByIdRepository.get(data.id);
		if (!category) {
			console.log(category);
			throw new DomainErrors.NotFoundError('Category');
		}

		const existingCategory =
			await this.getCategoryByNameRepository.get(normalizedName);
		if (existingCategory) {
			throw new DomainErrors.AlreadyExistsError('Category');
		}

		const categoryUpdated = await this.updateCategoryRepository.update({
			id: data.id,
			name: data.name,
			updatedAt: new Date(),
		});

		return categoryUpdated;
	}
}
