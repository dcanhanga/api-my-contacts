import type {
	GetContactsDto,
	IContactReaderRepository,
} from '@/domain/index.js';

export class GetContactsUseCase {
	constructor(
		private readonly contactReaderRepository: IContactReaderRepository,
	) {}
	execute(data?: GetContactsDto) {
		const orderBy =
			(data?.orderBy ?? 'ASC').toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
		return this.contactReaderRepository.getAll(orderBy);
	}
}
