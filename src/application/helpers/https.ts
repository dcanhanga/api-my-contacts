import type { IHttpResponse } from '@/application/interfaces/Http.js';
export const badRequest = (error: Error): IHttpResponse => ({
	statusCode: 400,
	body: error,
});

export const conflict = (error: Error): IHttpResponse => ({
	statusCode: 409,
	body: error,
});
