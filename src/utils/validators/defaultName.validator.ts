import type { INameValidator } from '@/application/index.js';
export class DefaultNameValidator implements INameValidator {
	isValid(name: unknown): { isValid: boolean; message?: string } {
		if (typeof name !== 'string') {
			return { isValid: false, message: 'MUST_BE_A_STRING' };
		}
		const alphabeticRegex = /^[\p{L}'\s]+$/u;
		if (!alphabeticRegex.test(name)) {
			return {
				isValid: false,
				message: 'MUST_CONTAIN_ONLY_ALPHABETIC_CHARACTERS',
			};
		}
		if (name.length <= 4) {
			return {
				isValid: false,
				message: 'Must_HAVE_AT_LEAST_FOUR_CHARACTERS',
			};
		}
		return {
			isValid: true,
		};
	}
}
