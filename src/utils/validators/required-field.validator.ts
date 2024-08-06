import {
	ApplicationErrors,
	type IValidator,
	type KeyValueMap,
} from '@/application/index.js';

export class RequiredFieldValidator implements IValidator {
	constructor(private readonly fieldName: string) {}
	validate(input: KeyValueMap<string>) {
		const message = `${this.fieldName.toLocaleUpperCase()}_IS_REQUIRED`;
		if (!input[this.fieldName]) {
			throw new ApplicationErrors.MissingParameterError({
				name: 'MissingParameterError',
				message,
				fieldName: this.fieldName,
			});
		}
	}
}
