export type Type =
	| 'INVALID_PARAMETER'
	| 'MISSING_PARAMETER'
	| 'NOT_FOUND'
	| 'CONFLICT'
	| 'INTERNAL_SERVER_ERROR';
export interface IError {
	type: Type;
	message: string;
	fieldName?: string;
	entity?: string;
}

export interface IAppError extends Error, IError {}
