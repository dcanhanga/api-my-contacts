import type { IAppError } from '../interfaces/errors.interface.js';
import type {
	IErrorResponse,
	IHttpResponse,
	IMeta,
} from '../interfaces/http.interface.js';

const makeBodyError = (error: IAppError) => ({
	type: error.type,
	message: error.message,
	fieldName: error.fieldName,
	entity: error.entity,
});

const makeMeta = (): IMeta => ({
	status: 'error',
	timestamp: new Date().toISOString(),
	message: '',
});
const badRequest = (error: IAppError): IHttpResponse<IErrorResponse> => ({
	statusCode: 400,
	body: {
		error: makeBodyError(error),
		meta: { ...makeMeta(), message: 'Bad Request' },
	},
});

const conflictRequest = (error: IAppError): IHttpResponse<IErrorResponse> => ({
	statusCode: 409,
	body: {
		error: makeBodyError(error),
		meta: { ...makeMeta(), message: 'Conflict' },
	},
});

const serverError = (error: Error): IHttpResponse<IErrorResponse> => ({
	statusCode: 500,
	body: {
		error: {
			message: 'UNEXPECTED_ERROR',
			type: 'INTERNAL_SERVER_ERROR',
		},
		meta: { ...makeMeta(), message: 'Internal Server Error' },
	},
});

export const errorResponses = {
	conflictRequest,
	badRequest,
	serverError,
};
