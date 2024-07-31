import type { IApiResponse } from '@/application/index.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IController<RequestType = void, ResponseType = any> {
	handle(request?: RequestType): Promise<IApiResponse<ResponseType>>;
}
