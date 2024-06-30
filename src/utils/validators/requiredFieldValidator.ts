import {
	type IKeyValue,
	type IValidator,
	MissingParamError,
} from '@/application/index.js';

export class RequiredFieldValidator implements IValidator {
	constructor(private readonly fieldName: string) {}
	validate(input: IKeyValue<string>): Error | undefined {
		if (!input[this.fieldName]) {
			return new MissingParamError(this.fieldName);
		}
	}
}
