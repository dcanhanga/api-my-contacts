import type { UUID } from 'node:crypto';
import type { IContact } from '@/domain';
import type { ContactModel } from '@/infra/db/drizzle/schema';

export class ContactMapper {
	static toDomain(raw: ContactModel): IContact {
		return {
			id: raw.id as UUID,
			name: raw.name,
			email: raw.email,
			phone: raw.phone,
			createdAt: raw.createdAt,
			updatedAt: raw.updatedAt,
			categoryId: raw.categoryId as UUID,
		};
	}
}
