import type {
	IErrorResponse,
	IHttpResponse,
	IResponseData,
} from '@/application/index.js';

const successResponse = <T>(
	data: IHttpResponse<IResponseData<T>>,
): IHttpResponse<IResponseData<T>> => ({
	statusCode: data.statusCode,
	body: data.body,
});

const errorResponse = (
	error: IHttpResponse<IErrorResponse>,
): IHttpResponse<IErrorResponse> => ({
	statusCode: error.statusCode,
	body: error.body,
});

export const httpResponse = {
	success: successResponse,
	error: errorResponse,
};
