import { categoryControllerFactory } from '@/infra/factories/controllers/category-factory.js';
import type { Router } from 'express';
import { expressAdapterRoute } from '../adapters/expressAdapterRoute.js';

export default (router: Router): void => {
	router.get(
		'/categories',
		expressAdapterRoute(categoryControllerFactory.getCategoryController()),
	);
	router.post(
		'/categories',
		expressAdapterRoute(categoryControllerFactory.createCategoryController()),
	);
};
