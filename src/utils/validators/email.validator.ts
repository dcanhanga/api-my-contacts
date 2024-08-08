import {
	AppError,
	type IEmailValidator,
	type IValidator,
	type KeyValueMap,
} from '@/application/index.js';

export class EmailValidator implements IValidator {
	constructor(
		private readonly fieldName: string,
		private readonly emailValidator: IEmailValidator,
	) {}

	validate(input: KeyValueMap<string>) {
		const value = input[this.fieldName];
		const { isValid, message } = this.emailValidator.isValid(value);
		if (!isValid && typeof message === 'string') {
			const invalidParameterError = new AppError({
				message,
				errors: {
					[this.fieldName]: message,
				},
			});
			return invalidParameterError;
		}
	}
}
