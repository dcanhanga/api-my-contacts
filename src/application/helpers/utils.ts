import type { IApiResponse, IAppError } from '../index.js';

export const formatBodyError = (error: IAppError) => ({
	message: error.message,
});
export const formatSuccessResponse = <T>(
	data: IApiResponse<T>,
): IApiResponse<T> => {
	if (!data.body.data) {
		return {
			statusCode: data.statusCode,
			body: {
				message: data.body.message,
			},
		};
	}
	return {
		statusCode: data.statusCode,
		body: {
			message: data.body.message,
			data: data.body.data,
		},
	};
};

export const formatErrorResponse = (data: IApiResponse): IApiResponse => {
	if (!data.body.errors) {
		return {
			statusCode: data.statusCode,
			body: {
				message: data.body.message,
			},
		};
	}
	return {
		statusCode: data.statusCode,
		body: {
			message: data.body.message,
			errors: data.body.errors,
		},
	};
};
