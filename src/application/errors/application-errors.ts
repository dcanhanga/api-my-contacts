import type { ErrorType, IAppError } from '@/application/interfaces/index.js';

export class AppError extends Error implements IAppError {
	fieldName?: string;
	errorType: ErrorType;
	entity?: string;

	constructor(error: IAppError) {
		super(error.message);
		this.name = 'AppError';
		this.fieldName = error.fieldName;
		this.errorType = error.errorType;
		this.entity = error.entity;
	}
}

class MissingParameterError extends AppError {
	constructor(error: IAppError) {
		super(error);
		this.name = 'MissingParameterError';
	}
}

class InvalidParameterError extends AppError {
	constructor(error: IAppError) {
		super(error);
		this.name = 'InvalidParameterError';
	}
}

export const ApplicationErrors = {
	AppError,
	InvalidParameterError,
	MissingParameterError,
};
