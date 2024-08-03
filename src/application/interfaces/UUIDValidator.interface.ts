import type { ResponseValidator } from './validator.interface.js';

export interface IUUIDValidator {
	isValid: (uuid: unknown) => ResponseValidator;
}
