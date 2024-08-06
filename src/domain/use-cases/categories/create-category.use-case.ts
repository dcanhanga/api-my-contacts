import { randomUUID } from 'node:crypto';
import {
	type CreateCategoryDto,
	DomainErrors,
	type ICategory,
	type ICreateCategoryRepository,
	type IGetCategoryByNameRepository,
} from '../../index.js';

export class CreateCategoryUseCase {
	constructor(
		private readonly getCategoryByNameRepository: IGetCategoryByNameRepository,
		private readonly createCategoryRepository: ICreateCategoryRepository,
	) {}
	async execute(data: CreateCategoryDto): Promise<ICategory> {
		const normalizedInput = data.name.replace(/\s+/g, '').toLowerCase();
		const existingCategory =
			await this.getCategoryByNameRepository.get(normalizedInput);
		if (existingCategory) {
			throw new DomainErrors.AlreadyExistsError('Category');
		}
		const category = await this.createCategoryRepository.create({
			id: randomUUID(),
			name: data.name,
			createdAt: new Date(),
		});

		return category;
	}
}
