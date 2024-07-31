import type { ErrorCode } from '@/application/index.js';

export type ErrorType = keyof typeof ErrorCode;
export interface IError {
	errorType: ErrorType;
	message: string;
	fieldName?: string;
	entity?: string;
}

export interface IAppError extends Error, IError {}
