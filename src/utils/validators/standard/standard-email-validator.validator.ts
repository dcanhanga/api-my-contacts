import { ErrorMessage, type IEmailValidator } from '@/application/index.js';
export class StandardEmailValidator implements IEmailValidator {
	isValid(email: unknown): { isValid: boolean; message?: string } {
		if (typeof email !== 'string') {
			return { isValid: false, message: ErrorMessage.MUST_BE_A_STRING };
		}
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) {
			return {
				isValid: false,
				message: ErrorMessage.INVALID_EMAIL,
			};
		}
		return {
			isValid: true,
		};
	}
}
