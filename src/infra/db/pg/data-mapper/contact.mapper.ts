import type { ICategory, IContact } from '@/domain/index.js';
import type { IContactModel } from '../model/contact.model.js';
import type { ICategoryModel } from '../model/index.js';

export class ContactDataMapper {
	static toEntity(dbRecord: IContactModel[]): IContact[] {
		return dbRecord.map((data) => ({
			id: data.id,
			name: data.name,
			categoryId: data.category_id,
			phone: data.phone,
			email: data.email,
			createdAt: data.created_at,
			updatedAt: data.updated_at,
		}));
	}
	static toDbEntity(data: IContact): IContactModel {
		return {
			id: data.id,
			name: data.name,
			phone: data.phone,
			email: data.email,
			category_id: data.categoryId,
			created_at: data.createdAt,
			updated_at: data.updatedAt,
		};
	}
}
