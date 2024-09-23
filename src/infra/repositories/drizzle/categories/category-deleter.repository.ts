import type { UUID } from 'node:crypto';
import type { ICategoryDeleterRepository } from '@/domain';
import { db } from '@/infra/db/drizzle';
import { categories } from '@/infra/db/drizzle/schema';
import { eq } from 'drizzle-orm';

export class CategoryDeleterRepositoryDrizzle
	implements ICategoryDeleterRepository
{
	async delete(id: UUID): Promise<void> {
		await db.delete(categories).where(eq(categories.id, id));
	}
}
