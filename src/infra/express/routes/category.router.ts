import { categoryControllerFactory } from '@/infra/factories/index.js';
import type { Router } from 'express';

import { expressAdapterRoute } from '../config/adapters/express-adapter-route.js';

export default (router: Router): void => {
	router.get(
		'/categories',
		expressAdapterRoute(categoryControllerFactory.getAll),
	);
	router.post(
		'/categories',
		expressAdapterRoute(categoryControllerFactory.create),
	);

	// router.delete(
	// 	'/categories/:id',
	// 	expressAdapterRoute(controllerFactory.deleteCategory),
	// );
	// router.put(
	// 	'/categories/:id',
	// 	expressAdapterRoute(controllerFactory.updateCategory),
	// );
};
