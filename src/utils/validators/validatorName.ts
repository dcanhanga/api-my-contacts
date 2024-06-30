import {
	type IValidator,
	InvalidParamError,
	type KeyValue,
} from '@/application/index.js';
import type { DefaultNameValidation } from './defaultNameValidator.js';

export class NameValidator implements IValidator {
	constructor(
		private readonly name: string,
		private readonly nameValidation: DefaultNameValidation,
	) {}

	validate(input: KeyValue<string>): Error | undefined {
		const value = input[this.name];
		const { isValid, message } = this.nameValidation.isValid(value);
		if (!isValid && typeof message === 'string') {
			return new InvalidParamError(`${value} ${message}`);
		}
	}
}
