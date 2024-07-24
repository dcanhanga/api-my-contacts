import type { IHttpResponse, IResponseData } from '@/application/index.js';
import { makeMeta } from './utils.js';

const created = <T>(
	data: T,
	message = 'Operation completed successfully',
): IHttpResponse<IResponseData<T>> => ({
	statusCode: 201,
	body: {
		data,
		meta: makeMeta('success', message),
	},
});

const ok = <T>(
	data: T,
	message = 'Operation completed successfully',
): IHttpResponse<IResponseData<T>> => ({
	statusCode: 200,
	body: {
		data,
		meta: makeMeta('success', message),
	},
});

export const successResponse = {
	created,
	ok,
};
