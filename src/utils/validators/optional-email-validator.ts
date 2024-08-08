import type {
	IEmailValidator,
	ResponseValidator,
} from '@/application/index.js';

export class OPtionalEmailValidator implements IEmailValidator {
	constructor(private readonly emailValidator: IEmailValidator) {}
	isValid(email: unknown): ResponseValidator {
		if (email === undefined || email === null || email === '') {
			return {
				isValid: true,
			};
		}
		return this.emailValidator.isValid(email);
	}
}
