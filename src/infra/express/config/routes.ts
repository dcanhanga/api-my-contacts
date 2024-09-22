import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { type Express, Router } from 'express';
const routesPath = new URL('./../routes', import.meta.url).pathname;

export const setupRoutes = async (app: Express): Promise<void> => {
	const router = Router();
	app.use('/api', router);
	const files = readdirSync(routesPath);
	for (const file of files) {
		if (file.endsWith('.router.ts')) {
			const route = await import(join(routesPath, file));
			route.default(router);
		}
	}
};
