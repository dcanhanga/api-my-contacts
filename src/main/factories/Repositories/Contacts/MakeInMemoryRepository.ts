import {
	CreateCategoryRepository,
	GetCategoryByNameRepository,
} from '@/Infra/index.js';

export const MakeCreateCategoryRepository = () => {
	return new CreateCategoryRepository();
};

export const MakeGetCategoryByNameRepository = () => {
	return new GetCategoryByNameRepository();
};
