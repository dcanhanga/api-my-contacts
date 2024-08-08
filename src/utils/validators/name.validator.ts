import {
	AppError,
	type INameValidator,
	type IValidator,
	type KeyValueMap,
} from '@/application/index.js';

export class NameValidator implements IValidator {
	constructor(
		private readonly fieldName: string,
		private readonly nameValidator: INameValidator,
	) {}

	validate(input: KeyValueMap<string>) {
		const value = input[this.fieldName];
		const { isValid, message } = this.nameValidator.isValid(value);
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
