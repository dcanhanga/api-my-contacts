import type { INameValidator } from '@/application/index.js';

export class OptionalNameValidator implements INameValidator {
	constructor(private readonly nameValidator: INameValidator) {}

	isValid(name: unknown) {
		if (name === undefined || name === null) {
			return {
				isValid: true,
			};
		}
		return this.nameValidator.isValid(name);
	}
}
