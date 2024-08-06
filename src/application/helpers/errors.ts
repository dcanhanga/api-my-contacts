import type {
	IApiErrorResponse,
	IApiResponse,
	IAppError,
} from '@/application/interfaces/index.js';

const badRequest = (error: IAppError): IApiResponse<IApiErrorResponse> => ({
	statusCode: 400,
	body: {
		message: error.message,
	},
});

const conflictRequest = (
	error: IAppError,
): IApiResponse<IApiErrorResponse> => ({
	statusCode: 409,
	body: {
		message: error.message,
	},
});

const notFoundRequest = (
	error: IAppError,
): IApiResponse<IApiErrorResponse> => ({
	statusCode: 404,
	body: {
		message: error.message,
	},
});

const serverError = (error: Error): IApiResponse<IApiErrorResponse> => ({
	statusCode: 500,
	body: {
		message: error.message,
	},
});

export const ApiErrorResponses = {
	conflictRequest,
	badRequest,
	serverError,
	notFoundRequest,
};
