import { controllerFactory } from '@/infra/factories/index.js';
import type { Router } from 'express';

import { expressAdapterRoute } from '../config/adapters/express-adapter-route.js';

export default (router: Router): void => {
	router.get(
		'/categories',
		expressAdapterRoute(controllerFactory.getCategories),
	);
	router.post(
		'/categories',
		expressAdapterRoute(controllerFactory.createCategory),
	);
	router.delete(
		'/categories/:id',
		expressAdapterRoute(controllerFactory.deleteCategory),
	);
};
