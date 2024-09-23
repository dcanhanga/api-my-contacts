import type { UUID } from 'node:crypto';
import type { ICategory } from '@/domain';
export class CategoryApiMapper {
	static toResponse(applicationData: ICategory): CategoryResponse {
		return {
			id: applicationData.id,
			name: applicationData.name,
			created_at: applicationData.createdAt?.toISOString(), // Formatação de data
			updated_at: applicationData.updatedAt?.toISOString() || null,
		};
	}
}

export type CategoryResponse = {
	id: UUID;
	name: string;
	created_at: Date | undefined | string;
	updated_at: Date | null | undefined | string;
};
