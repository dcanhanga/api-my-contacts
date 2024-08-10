import { randomUUID } from 'node:crypto';
import {
	DomainErrors,
	type ICategoryReaderRepository,
	type IContact,
	type IContactReaderRepository,
	type IContactUpdaterRepository,
	type UpdateContactsDto,
} from '@/domain/index.js';

export class UpdateContactUseCase {
	constructor(
		private readonly categoryReaderRepository: ICategoryReaderRepository,
		private readonly contactReaderRepository: IContactReaderRepository,
		private readonly contactUpdaterRepository: IContactUpdaterRepository,
	) {}

	async execute(data: UpdateContactsDto): Promise<IContact> {
		if (data.email) {
			const existingContactByEmail =
				await this.contactReaderRepository.getByEmail(data.email);
			if (existingContactByEmail) {
				throw new DomainErrors.AlreadyExistsError(
					'CONTACT_WITH_EMAIL_ALREADY_EXISTS',
				);
			}
		}

		if (data.categoryId) {
			const category = await this.categoryReaderRepository.getById(
				data.categoryId,
			);
			if (!category) {
				throw new DomainErrors.NotFoundError('CATEGORY_NOT_FOUND');
			}
		}

		const contact = await this.contactReaderRepository.getById(data.id);
		if (!contact) {
			throw new DomainErrors.NotFoundError('CONTACT_NOT_FOUND');
		}

		if (data.categoryId && data.phone) {
			const contact = await this.contactReaderRepository.getByCategoryAndPhone(
				data.categoryId,
				data.phone,
			);
			if (contact && contact.id !== data.id) {
				throw new DomainErrors.AlreadyExistsError(
					'CONTACT_WITH_SAME_CATEGORY_AND_PHONE',
				);
			}
		}

		return await this.contactUpdaterRepository.update({
			id: data.id,
			name: data.name ?? contact.name,
			email: data.email ?? contact.email,
			phone: data.phone ?? contact.phone,
			categoryId: data.categoryId ?? contact.categoryId,
			updatedAt: new Date(),
		});
	}
}
