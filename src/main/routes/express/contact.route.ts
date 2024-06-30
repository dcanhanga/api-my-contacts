import { Router } from 'express';
import { expressAdapterRoute } from '../../adapters/route/expressAdapterRoute.js';
import { makeCreateCategoryController } from '../../factories/Controllers/index.js';

export const categoryRoute = Router();

categoryRoute.post('/', expressAdapterRoute(makeCreateCategoryController()));
