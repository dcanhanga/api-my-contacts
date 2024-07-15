import {
	type IKeyValue,
	type IValidator,
	errors,
} from '@/application/index.js';
import type { DefaultNameValidator } from './defaultName.validator.js';

export class NameValidator implements IValidator {
	constructor(
		private readonly fieldName: string,
		private readonly nameValidation: DefaultNameValidator,
	) {}

	validate(input: IKeyValue<string>) {
		const value = input[this.fieldName];
		const { isValid, message } = this.nameValidation.isValid(value);
		if (!isValid && typeof message === 'string') {
			throw new errors.InvalidParameterError({
				name: 'InvalidParameterError',
				type: 'INVALID_PARAMETER',
				fieldName: this.fieldName,
				message,
			});
		}
	}
}
