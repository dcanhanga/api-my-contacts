import type { IError } from './error.interface.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IApiResponse<T = any> {
	statusCode: number;
	body: T;
}

export interface IResponseMeta {
	status: 'success' | 'error';
	timestamp: string;
	message: string;
}

export interface IApiResponseData<T> {
	data: T;
	meta: IResponseMeta;
}

export interface IApiErrorResponse {
	error: IError;
	meta: IResponseMeta;
}
