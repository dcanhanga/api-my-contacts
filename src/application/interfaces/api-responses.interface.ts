import type { ErrorFields } from './error.interface.js';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IApiResponse<T = any> {
	statusCode: number;
	body: {
		message: string;
		data?: T;
		errors?: ErrorFields;
	};
}
