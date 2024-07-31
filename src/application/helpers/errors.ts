import {
	ErrorCode,
	ErrorMessageMeta,
	type IApiErrorResponse,
	type IApiResponse,
	type IAppError,
	formatBodyError,
	formatMeta,
} from '@/application/index.js';

const badRequest = (error: IAppError): IApiResponse<IApiErrorResponse> => ({
	statusCode: 400,
	body: {
		error: formatBodyError(error),
		meta: formatMeta('error', ErrorMessageMeta.BAD_REQUEST),
	},
});

const conflictRequest = (
	error: IAppError,
): IApiResponse<IApiErrorResponse> => ({
	statusCode: 409,
	body: {
		error: formatBodyError(error),
		meta: formatMeta('error', ErrorMessageMeta.CONFLICT),
	},
});

const serverError = (error: Error): IApiResponse<IApiErrorResponse> => ({
	statusCode: 500,
	body: {
		error: {
			message: ErrorMessageMeta.INTERNAL_SERVER_ERROR,
			errorType: ErrorCode.INTERNAL_SERVER_ERROR,
		},
		meta: formatMeta('error', ErrorMessageMeta.INTERNAL_SERVER_ERROR),
	},
});

export const ApiErrorResponses = {
	conflictRequest,
	badRequest,
	serverError,
};
