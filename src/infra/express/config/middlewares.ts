import {
	type Express,
	type NextFunction,
	type Request,
	type Response,
	json,
} from 'express';

const contentType = (req: Request, res: Response, next: NextFunction): void => {
	res.type('json');
	next();
};
const bodyParser = json();

export const setupMiddlewares = (app: Express): void => {
	app.use(bodyParser);
	app.use(contentType);
};
