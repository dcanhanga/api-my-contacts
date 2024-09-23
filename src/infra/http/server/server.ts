import { env } from '@/infra/env/index.js';
import { app } from '../fastify/app.js';
app
	.listen({
		host: '0.0.0.0',
		port: env.PORT,
	})
	.then(() => console.log('HTTP server running!'));
