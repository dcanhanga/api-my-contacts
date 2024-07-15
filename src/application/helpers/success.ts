import type { IHttpResponse, IResponseData } from '@/application/index.js';

const created = <T>(
	data: T,
	message = 'Operation completed successfully',
): IHttpResponse<IResponseData<T>> => ({
	statusCode: 201,
	body: {
		data,
		meta: {
			status: 'success',
			timestamp: new Date().toISOString(),
			message,
		},
	},
});

export const successResponse = {
	created,
};
