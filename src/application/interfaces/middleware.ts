import type { IHttpResponse } from './http.interface.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IMiddleware<T = any> {
	handle: (httpRequest: T) => Promise<IHttpResponse>;
}
