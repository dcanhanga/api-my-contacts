import type { IKeyValue, IValidator } from '@/application/index.js';

export class ValidatorComposite implements IValidator {
	constructor(private readonly validators: IValidator[]) {}

	validate(input: IKeyValue): Error | undefined {
		for (const validation of this.validators) {
			const error = validation.validate(input);
			if (error) {
				return error;
			}
		}
	}
}
