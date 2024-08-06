import type { IError } from './error.interface.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IApiResponse<T = any> {
	statusCode: number;
	body?: T;
}

export interface IApiResponseData<T> {
	data: T;
	message: string;
}

export interface IApiErrorResponse {
	message: string;
}
