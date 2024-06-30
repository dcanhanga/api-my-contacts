import { randomUUID } from 'node:crypto';
import type { CreateCategoryDto } from '@/domain/dtos/categoryInput.js';
import type { ICategory } from '@/domain/entities/index.js';
import type {
	ICreateCategoryRepository,
	IGetCategoryByNameRepository,
} from '@/domain/repositories/index.js';
export class CreateCategoryUseCase {
	constructor(
		private readonly createCategoryRepository: ICreateCategoryRepository,
		private readonly getCategoryByNameRepository: IGetCategoryByNameRepository,
	) {}
	async execute(
		data: CreateCategoryDto,
	): Promise<{ category?: ICategory; alreadyExits: boolean }> {
		const alreadyExits = await this.getCategoryByNameRepository.get(data.name);
		if (alreadyExits) {
			return { alreadyExits: true };
		}
		const category = await this.createCategoryRepository.create({
			name: data.name,
			id: randomUUID(),
		});
		return { alreadyExits: false, category };
	}
}
