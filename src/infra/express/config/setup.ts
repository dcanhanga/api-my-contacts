import express, { type Express } from 'express';
import { setupMiddlewares } from './middlewares.js';
import{ setupRoutes} from './routes.js'
export const setupExpress = async (): Promise<Express> => {
	const app = express();
	setupMiddlewares(app);
	setupRoutes(app);
	return app;
};

