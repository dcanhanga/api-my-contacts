import type { IHttpResponse } from './Http.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IController<T = any> {
	handle: (request: T) => Promise<IHttpResponse>;
}
