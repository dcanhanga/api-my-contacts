import type { IController } from '@/application/index.js';
import type { Request, Response } from 'express';

export const expressAdapterRoute = (controller: IController) => {
	return async (req: Request, res: Response) => {
		const request = {
			...(req.body || {}),
			...(req.params || {}),
			...(req.query || {}),
		};
		const httpResponse = await controller.handle(request);
		if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
			res.status(httpResponse.statusCode).json(httpResponse.body);
		} else {
			res.status(httpResponse.statusCode).json(httpResponse.body);
		}
	};
};
