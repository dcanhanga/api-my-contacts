import { randomUUID } from 'node:crypto';
import {
	type CreateContactDto,
	DomainErrors,
	type IContact,
	type ICreateContactRepository,
	type IGetCategoryByIdRepository,
} from '@/domain/index.js';

export class CreateContactUseCase {
	constructor(
		private readonly getCategoryByIdRepository: IGetCategoryByIdRepository,
		private readonly createContactRepository: ICreateContactRepository,
	) {}
	async execute(data: CreateContactDto): Promise<IContact> {
		const category = await this.getCategoryByIdRepository.get(data.categoryId);
		if (!category) {
			console.log({ category });
			throw new DomainErrors.NotFoundError('Category');
		}
		return await this.createContactRepository.create({
			id: randomUUID(),
			name: data.name,
			email: data.email,
			phone: data.phone,
			categoryId: data.categoryId,
			createdAt: new Date(),
		});
	}
}
