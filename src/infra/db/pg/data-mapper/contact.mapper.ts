import type { ICategory, IContact } from '@/domain/index.js';
import type { IContactModel } from '../model/contact.model.js';

export class ContactDataMapper {
	static toEntity(dbRecord: IContactModel[]): IContact[] {
		return dbRecord.map((data) => ({
			id: data.id,
			name: data.name,
			phone: data.phone,
			email: data.email,
			createdAt: data.created_at,
			updatedAt: data.updated_at,
			categoryName: data.category_name,
			categoryId: data.category_id,
		}));
	}
	static toDbEntity(partial: Partial<IContact>): Partial<IContactModel> {
		return {
			id: partial.id,
			name: partial.name,
			phone: partial.phone,
			email: partial.email,
			created_at: partial.createdAt,
			updated_at: partial.updatedAt,
			category_id: partial.categoryId,
		};
	}
}
