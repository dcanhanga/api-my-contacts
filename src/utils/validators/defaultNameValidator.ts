import type { INameValidator } from '@/application/index.js';

export class DefaultNameValidator implements INameValidator {
	isValid(name: unknown): { isValid: boolean; message?: string } {
		if (typeof name !== 'string') {
			return { isValid: false, message: 'must be a string' };
		}
		const alphabeticRegex = /^[\p{L}'\s]+$/u;
		if (!alphabeticRegex.test(name)) {
			return {
				isValid: false,
				message: 'must contain only alphabetic characters',
			};
		}
		return {
			isValid: true,
		};
	}
}
