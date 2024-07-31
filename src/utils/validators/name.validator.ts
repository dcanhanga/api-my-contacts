import {
	ApplicationErrors,
	ErrorCode,
	type IValidator,
	type KeyValueMap,
} from '@/application/index.js';
import type { StandardNameValidator } from './standard-name-validator.validator.js';

export class NameValidator implements IValidator {
	constructor(
		private readonly fieldName: string,
		private readonly nameValidation: StandardNameValidator,
	) {}

	validate(input: KeyValueMap<string>) {
		const value = input[this.fieldName];
		const { isValid, message } = this.nameValidation.isValid(value);
		if (!isValid && typeof message === 'string') {
			throw new ApplicationErrors.InvalidParameterError({
				name: 'InvalidParameterError',
				errorType: ErrorCode.INVALID_PARAMETER,
				fieldName: this.fieldName,
				message: `${this.fieldName.toLocaleUpperCase()}_${message}`,
			});
		}
	}
}
