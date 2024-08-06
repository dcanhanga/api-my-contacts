import type {
	IApiErrorResponse,
	IApiResponse,
	IApiResponseData,
	IAppError,
} from '../index.js';

export const formatBodyError = (error: IAppError) => ({
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
