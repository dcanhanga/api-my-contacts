import { contactControllerFactory } from '@/infra/factories/index.js';
import type { FastifyInstance } from 'fastify';
import { fastifyAdapterRoute } from '../fastify-adapter-route.js';

export default async (app: FastifyInstance): Promise<void> => {
	const routes = async (app: FastifyInstance): Promise<void> => {
		app.get('/', fastifyAdapterRoute(contactControllerFactory.getAll));
		app.post('/', fastifyAdapterRoute(contactControllerFactory.create));
		app.delete('/:id', fastifyAdapterRoute(contactControllerFactory.delete));
		app.put('/:id', fastifyAdapterRoute(contactControllerFactory.update));
	};
	app.register(routes, { prefix: '/contacts' });
};
