import type {
	IApiErrorResponse,
	IApiResponse,
	IApiResponseData,
	IAppError,
	IResponseMeta,
} from '@/application/index.js';

export const formatMeta = (
	status: 'success' | 'error',
	message: string,
): IResponseMeta => ({
	status,
	timestamp: new Date().toISOString(),
	message,
});

export const formatBodyError = (error: IAppError) => ({
	errorType: error.errorType,
	message: error.message,
	fieldName: error.fieldName,
	entity: error.entity,
});
export const formatSuccessResponse = <T>(
	data: IApiResponse<IApiResponseData<T>>,
): IApiResponse<IApiResponseData<T>> => ({
	statusCode: data.statusCode,
	body: data.body,
});

export const formatErrorResponse = (
	error: IApiResponse<IApiErrorResponse>,
): IApiResponse<IApiErrorResponse> => ({
	statusCode: error.statusCode,
	body: error.body,
});
