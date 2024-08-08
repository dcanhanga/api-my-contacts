import type { IContact } from '@/domain/index.js';
import type { IListContactsRepository } from '@/domain/repositories/contact.repository.interface.js';

export class ListContactsUseCase {
	constructor(
		private readonly listContactsRepository: IListContactsRepository,
	) {}
	async execute(): Promise<IContact> {
		return this.listContactsRepository.list();
	}
}
