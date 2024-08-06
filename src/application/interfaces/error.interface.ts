import type {} from '@/application/enum/index.js';

export interface IError {
	message: string;
	fieldName?: string;
	entity?: string;
}

export interface IAppError extends Error, IError {}
