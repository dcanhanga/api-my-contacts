import {
	AppError,
	ErrorMessage,
	type IValidator,
	type KeyValueMap,
} from '@/application/index.js';

export class RequiredFieldValidator implements IValidator {
	constructor(private readonly fieldName: string) {}
	validate(input: KeyValueMap<string>) {
		const message = ErrorMessage.REQUIRED_FIELD;
		if (!input[this.fieldName]) {
			const missingParameterError = new AppError({
				message,
				errors: {
					[this.fieldName]: message,
				},
			});
			return missingParameterError;
		}
	}
}
