import type { ResponseValidator } from './validator.interface.js';

export interface INameValidator {
	isValid: (name: unknown) => ResponseValidator;
}
