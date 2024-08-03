import type { IValidator, KeyValueMap } from '@/application/index.js';

export class ValidatorComposite implements IValidator {
	constructor(private readonly validators: IValidator[]) {}

	validate(input: KeyValueMap): void {
		for (const validator of this.validators) {
			try {
				validator.validate(input);
			} catch (error) {
				if (error instanceof Error) {
					throw error;
				}
			}
		}
	}
}
