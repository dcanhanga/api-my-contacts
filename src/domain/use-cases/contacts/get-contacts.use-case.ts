import type { GetContactsDto, IGetContactsRepository } from '@/domain/index.js';

export class GetContactsUseCase {
	constructor(private readonly getContactsRepository: IGetContactsRepository) {}
	execute(data?: GetContactsDto) {
		const orderBy =
			(data?.orderBy ?? 'ASC').toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
		return this.getContactsRepository.get(orderBy);
	}
}
