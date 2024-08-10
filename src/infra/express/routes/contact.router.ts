import { contactControllerFactory } from '@/infra/factories/index.js';
import type { Request, Response, Router } from 'express';
import { expressAdapterRoute } from '../config/adapters/express-adapter-route.js';

export default (router: Router): void => {
	router.get('/contacts', expressAdapterRoute(contactControllerFactory.getAll));
	router.post(
		'/contacts',
		expressAdapterRoute(contactControllerFactory.create),
	);
	router.delete(
		'/contacts/:id',
		expressAdapterRoute(contactControllerFactory.delete),
	);
	router.put(
		'/contacts/:id',
		expressAdapterRoute(contactControllerFactory.update),
	);
};
