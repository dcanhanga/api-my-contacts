import type { IAppError, Type } from '@/application/index.js';

export class AppError extends Error implements IAppError {
	fieldName?: string;
	type: Type;
	entity?: string;

	constructor(error: IAppError) {
		super(error.message);
		this.name = 'AppError';
		this.fieldName = error.fieldName;
		this.type = error.type;

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

export const errors = {
	AppError,
	InvalidParameterError,
	MissingParameterError,
};
