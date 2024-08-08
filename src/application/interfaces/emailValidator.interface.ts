import type { ResponseValidator } from './validator.interface.js';

export interface IEmailValidator {
	isValid: (email: unknown) => ResponseValidator;
}
