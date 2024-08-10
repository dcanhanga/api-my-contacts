import { randomUUID } from 'node:crypto';
import {
	type CreateCategoryDto,
	DomainErrors,
	type ICategory,
	type ICategoryCreatorRepository,
	type ICategoryReaderRepository,
} from '@/domain/index.js';

export class CreateCategoryUseCase {
	constructor(
		private readonly categoryReaderRepository: ICategoryReaderRepository,
		private readonly categoryCreatorRepository: ICategoryCreatorRepository,
	) {}
	async execute(data: CreateCategoryDto): Promise<ICategory> {
		const normalizedInput = data.name.replace(/\s+/g, '').toLowerCase();
		const existingCategory =
			await this.categoryReaderRepository.getByName(normalizedInput);
		if (existingCategory) {
			throw new DomainErrors.AlreadyExistsError('Category');
		}
		const category = await this.categoryCreatorRepository.create({
			id: randomUUID(),
			name: data.name,
			createdAt: new Date(),
		});

		return category;
	}
}
