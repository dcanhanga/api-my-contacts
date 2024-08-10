import { randomUUID } from 'node:crypto';
import {
	type CreateContactDto,
	DomainErrors,
	type ICategoryReaderRepository,
	type IContact,
	type IContactCreatorRepository,
	type IContactReaderRepository,
} from '@/domain/index.js';

export class CreateContactUseCase {
	constructor(
		private readonly categoryReaderRepository: ICategoryReaderRepository,
		private readonly contactReaderRepository: IContactReaderRepository,
		private readonly contactCreatorRepository: IContactCreatorRepository,
	) {}

	async execute(data: CreateContactDto): Promise<IContact> {
		if (data.email) {
			const existingContactByEmail =
				await this.contactReaderRepository.getByEmail(data.email);
			if (existingContactByEmail) {
				throw new DomainErrors.AlreadyExistsError(
					'CONTACT_WITH_EMAIL_ALREADY_EXISTS',
				);
			}
		}

		const category = await this.categoryReaderRepository.getById(
			data.categoryId,
		);
		if (!category) {
			throw new DomainErrors.NotFoundError('CATEGORY_NOT_FOUND');
		}

		const existingContact =
			await this.contactReaderRepository.getByCategoryAndPhone(
				data.categoryId,
				data.phone,
			);
		if (existingContact) {
			throw new DomainErrors.AlreadyExistsError(
				'CONTACT_WITH_SAME_CATEGORY_AND_PHONE',
			);
		}

		const newContact: IContact = {
			id: randomUUID(),
			name: data.name,
			email: data.email,
			phone: data.phone,
			categoryId: data.categoryId,
			createdAt: new Date(),
		};

		return await this.contactCreatorRepository.create(newContact);
	}
}
