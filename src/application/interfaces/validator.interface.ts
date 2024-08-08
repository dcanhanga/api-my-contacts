import type { IAppError } from './error.interface.js';

export type KeyValueMap<T = unknown> = {
	[key: string]: T;
};

export interface IValidator<T = unknown> {
	validate(input: KeyValueMap<T>): undefined | IAppError;
}

export type ResponseValidator = { isValid: boolean; message?: string };
