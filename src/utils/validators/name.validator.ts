import {
	ApplicationErrors,
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
			throw new ApplicationErrors.InvalidParameterError({
				name: 'InvalidParameterError',
				fieldName: this.fieldName,
				message: `${this.fieldName.toLocaleUpperCase()}_${message}`,
			});
		}
	}
}
