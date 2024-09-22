import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default async (app: FastifyInstance): Promise<void> => {
	app.get('/ping', async (req: FastifyRequest, rep: FastifyReply) => {
		rep
			.status(200)
			.send({ message: 'Servidor Node.js com PostgreSQL funcionando!' });
	});
};
