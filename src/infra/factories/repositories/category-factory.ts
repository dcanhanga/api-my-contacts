import type {
	ICreateCategoryRepository,
	IGetCategoryByNameRepository,
	IGetCategoryRepository,
} from '@/domain/index.js';
import {
	CreateCategoryRepositoryPG,
	GetCategoryByNameRepositoryPG,
	GetCategoryRepositoryPG,
} from '@/infra/index.js';

export class CategoryRepositoryFactory {
	private static instance: CategoryRepositoryFactory;
	private readonly getCategoryRepositoryInstance: IGetCategoryRepository;
	private readonly createCategoryRepositoryInstance: ICreateCategoryRepository;
	private readonly getCategoryByNameInstance: IGetCategoryByNameRepository;
	private constructor() {
		this.getCategoryRepositoryInstance = new GetCategoryRepositoryPG();
		this.createCategoryRepositoryInstance = new CreateCategoryRepositoryPG();
		this.getCategoryByNameInstance = new GetCategoryByNameRepositoryPG();
	}
	public static getInstance(): CategoryRepositoryFactory {
		if (!CategoryRepositoryFactory.instance) {
			CategoryRepositoryFactory.instance = new CategoryRepositoryFactory();
		}
		return CategoryRepositoryFactory.instance;
	}
	public getCategoryRepository(): IGetCategoryRepository {
		return this.getCategoryRepositoryInstance;
	}
	public createCategoryRepository(): ICreateCategoryRepository {
		return this.createCategoryRepositoryInstance;
	}
	public getCategoryByNameRepository(): IGetCategoryByNameRepository {
		return this.getCategoryByNameInstance;
	}
}

export const categoryRepositoryFactory =
	CategoryRepositoryFactory.getInstance();
