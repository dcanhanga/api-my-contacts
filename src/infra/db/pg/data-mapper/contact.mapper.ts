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
	static toDbEntity(data: IContact): IContactModel {
		return {
			id: data.id,
			name: data.name,
			phone: data.phone,
			email: data.email,
			created_at: data.createdAt,
			updated_at: data.updatedAt,
			category_id: data.categoryId,
		};
	}
}
