import type { IError } from './errors.interface.js';

export interface IHttpResponse<T = any> {
	statusCode: number;
	body: T;
}

export interface IMeta {
	status: 'success' | 'error';
	timestamp: string;
	message: string;
}

export interface IResponseData<T> {
	data: T;
	meta: IMeta;
}

export interface IErrorResponse {
	error: IError;
	meta: IMeta;
}
