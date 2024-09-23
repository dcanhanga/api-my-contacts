import { categoryControllerFactory } from '@/infra/factories/index.js';
import type { FastifyInstance } from 'fastify';
import { fastifyAdapterRoute } from '../fastify-adapter-route.js';

export default async (app: FastifyInstance): Promise<void> => {
	const routes = async (app: FastifyInstance): Promise<void> => {
		app.get('/', fastifyAdapterRoute(categoryControllerFactory.getAll));
		app.post('/', fastifyAdapterRoute(categoryControllerFactory.create));
		app.delete('/:id', fastifyAdapterRoute(categoryControllerFactory.delete));
		app.put('/:id', fastifyAdapterRoute(categoryControllerFactory.update));
	};
	app.register(routes, { prefix: '/categories' });
};
