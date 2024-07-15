import {
	type IKeyValue,
	type IValidator,
	errors,
} from '@/application/index.js';

export class RequiredFieldValidator implements IValidator {
	constructor(private readonly fieldName: string) {}
	validate(input: IKeyValue<string>) {
		const message = 'IS_REQUIRED';
		if (!input[this.fieldName]) {
			throw new errors.MissingParameterError({
				name: 'MissingParameterError',
				message,
				fieldName: this.fieldName,
				type: 'MISSING_PARAMETER',
			});
		}
	}
}
