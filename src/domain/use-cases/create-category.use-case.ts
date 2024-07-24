import { randomUUID } from 'node:crypto';
import {
	AlreadyExitsError,
	type ICategory,
	type ICreateCategoryDto,
	type ICreateCategoryRepository,
	type IGetCategoryByNameRepository,
} from '@/domain/index.js';
export class CreateCategoryUseCase {
	constructor(
		private readonly createCategoryRepository: ICreateCategoryRepository,
		private readonly getCategoryByNameRepository: IGetCategoryByNameRepository,
	) {}
	async execute(data: ICreateCategoryDto): Promise<ICategory> {
		const normalizedInput = data.name.replace(/\s+/g, '').toLowerCase();
		const existingCategory =
			await this.getCategoryByNameRepository.get(normalizedInput);
		if (existingCategory) {
			throw new AlreadyExitsError('Category');
		}
		const category = await this.createCategoryRepository.create({
			id: randomUUID(),
			name: data.name,
		});

		return category;
	}
}
