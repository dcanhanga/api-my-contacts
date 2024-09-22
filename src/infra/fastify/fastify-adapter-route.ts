import type { IController } from '@/application/index.js';
import type { FastifyReply, FastifyRequest } from 'fastify';

export const fastifyAdapterRoute = (controller: IController) => {
	return async (req: FastifyRequest, rep: FastifyReply) => {
		const request = {
			...(req.body || {}),
			...(req.params || {}),
			...(req.query || {}),
		};
		const httpResponse = await controller.handle(request);
		if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
			rep.status(httpResponse.statusCode).send(httpResponse.body);
		} else {
			rep.status(httpResponse.statusCode).send(httpResponse.body);
		}
	};
};
