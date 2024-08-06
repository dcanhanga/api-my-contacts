import type { IApiResponse, IApiResponseData } from '../index.js';

const created = <T>(
	data: T,
	message = 'Operation completed successfully',
): IApiResponse<IApiResponseData<T>> => ({
	statusCode: 201,
	body: {
		message,
		data,
	},
});

const ok = <T>(
	data: T,
	message = 'Operation completed successfully',
): IApiResponse<IApiResponseData<T>> => ({
	statusCode: 200,
	body: {
		data,
		message,
	},
});

export const ApiSuccessResponse = {
	created,
	ok,
};
