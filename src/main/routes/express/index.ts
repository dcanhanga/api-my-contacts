import { Router } from 'express';
import { categoryRoute } from './contact.route.js';
export const routes = Router();

routes.use('/categories', categoryRoute);
