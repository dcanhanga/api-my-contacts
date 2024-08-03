import type { IApiResponse } from './api-responses.interface.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IController<RequestType = any, ResponseType = any> {
	handle(request?: RequestType): Promise<IApiResponse<ResponseType>>;
}
