import type {
	DeleteContactsDto,
	IContactDeleterRepository,
} from '@/domain/index.js';

export class DeleteContactUseCase {
	constructor(
		private readonly contactDeleterRepository: IContactDeleterRepository,
	) {}
	async execute(data: DeleteContactsDto) {
		return this.contactDeleterRepository.delete(data.id);
	}
}
