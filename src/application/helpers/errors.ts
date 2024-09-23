import type {
	IApiResponse,
	IAppError,
} from '@/application/interfaces/index.js';
import { ErrorMessage } from '../controllers/alias.js';

const badRequest = (error: IAppError): IApiResponse => {
	return {
		statusCode: 400,
		body: {
			message: error.message,
			errors: error.errors,
		},
	};
};

const conflictRequest = (error: IAppError): IApiResponse => ({
	statusCode: 409,
	body: {
		message: error.message,
	},
});

const notFoundRequest = (error: IAppError): IApiResponse => ({
	statusCode: 404,
	body: {
		message: error.message,
	},
});

const serverError = (_error: Error): IApiResponse => ({
	statusCode: 500,
	body: {
		message: ErrorMessage.SERVER_ERROR,
	},
});

export const ApiErrorResponse = {
	conflictRequest,
	badRequest,
	serverError,
	notFoundRequest,
};
