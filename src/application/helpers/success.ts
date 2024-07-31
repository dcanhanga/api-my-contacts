import type { IApiResponse, IApiResponseData } from '@/application/index.js';
import { formatMeta } from './utils.js';

const created = <T>(
	data: T,
	message = 'Operation completed successfully',
): IApiResponse<IApiResponseData<T>> => ({
	statusCode: 201,
	body: {
		data,
		meta: formatMeta('success', message),
	},
});

const ok = <T>(
	data: T,
	message = 'Operation completed successfully',
): IApiResponse<IApiResponseData<T>> => ({
	statusCode: 200,
	body: {
		data,
		meta: formatMeta('success', message),
	},
});

export const ApiSuccessResponse = {
	created,
	ok,
};
