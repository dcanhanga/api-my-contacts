import { ErrorMessage, type INameValidator } from '@/application/index.js';
export class StandardNameValidator implements INameValidator {
	isValid(name: unknown): { isValid: boolean; message?: string } {
		if (typeof name !== 'string') {
			return { isValid: false, message: ErrorMessage.MUST_BE_A_STRING };
		}
		const alphabeticRegex = /^[\p{L}'\s]+$/u;
		if (!alphabeticRegex.test(name)) {
			return {
				isValid: false,
				message: ErrorMessage.ONLY_ALPHABETIC_CHARACTERS,
			};
		}
		if (name.length <= 4) {
			return {
				isValid: false,
				message: ErrorMessage.MIN_LENGTH_4,
			};
		}
		return {
			isValid: true,
		};
	}
}
