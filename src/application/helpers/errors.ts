import type { IAppError } from '../interfaces/errors.interface.js';
import type {
	IErrorResponse,
	IHttpResponse,
} from '../interfaces/http.interface.js';
import { makeMeta } from './utils.js';

const makeBodyError = (error: IAppError) => ({
	type: error.type,
	message: error.message,
	fieldName: error.fieldName,
	entity: error.entity,
});

const badRequest = (error: IAppError): IHttpResponse<IErrorResponse> => ({
	statusCode: 400,
	body: {
		error: makeBodyError(error),
		meta: makeMeta('error', 'Bad Request'),
	},
});

const conflictRequest = (error: IAppError): IHttpResponse<IErrorResponse> => ({
	statusCode: 409,
	body: {
		error: makeBodyError(error),
		meta: makeMeta('error', 'Conflict'),
	},
});

const serverError = (error: Error): IHttpResponse<IErrorResponse> => ({
	statusCode: 500,
	body: {
		error: {
			message: 'UNEXPECTED_ERROR',
			type: 'INTERNAL_SERVER_ERROR',
		},
		meta: makeMeta('error', 'Internal Server Error'),
	},
});

export const errorResponses = {
	conflictRequest,
	badRequest,
	serverError,
};
