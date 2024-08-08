import type { IAppError } from '@/application/interfaces/index.js';

export class AppError extends Error implements IAppError {
	errors?: { [key: string]: string };
	constructor(error: IAppError) {
		super(error.message);
		this.name = 'AppError';
		this.errors = error.errors;
	}
}
