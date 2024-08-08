import type { IApiResponse } from '../index.js';

const created = <T>(
	data: T,
	message = 'Operation completed successfully',
): IApiResponse<T> => ({
	statusCode: 201,
	body: {
		message,
		data,
	},
});

const ok = <T>(
	data: T,
	message = 'Operation completed successfully',
): IApiResponse<T> => ({
	statusCode: 200,
	body: {
		message,
		data,
	},
});

export const ApiSuccessResponse = {
	created,
	ok,
};
