import type { ErrorFields } from './error.interface.js';

export interface IApiResponse<T = null> {
	statusCode: number;
	body: {
		message: string;
		data?: T;
		errors?: ErrorFields;
	};
}
