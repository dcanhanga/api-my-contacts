import type { IHttpResponse } from './http.interface.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IController<T = any> {
	handle: (request: T) => Promise<IHttpResponse>;
}
