import { readdirSync } from 'node:fs';

import { type Express, Router } from 'express';
const routesPath = new URL('./../routes', import.meta.url);

export const setupRoutes = (app: Express): void => {
	const router = Router();
	app.use('/api', router);
	readdirSync(routesPath).map(async (file) => {
		console.log(file);
		if (file.endsWith('.router.ts')) {
			(await import(`${routesPath}/${file}`)).default(router);
		}
	});
};
