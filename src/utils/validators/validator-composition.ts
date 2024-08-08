import {
	AppError,
	type ErrorFields,
	type IAppError,
	type IValidator,
	type KeyValueMap,
} from '@/application/index.js';
export class ValidatorComposite implements IValidator {
	constructor(private readonly validators: IValidator[]) {}

	validate(input: KeyValueMap): IAppError | undefined {
		let aggregatedErrors: ErrorFields = {};
		for (const validator of this.validators) {
			const result = validator.validate(input);
			if (result) {
				if (typeof result === 'object' && result.errors) {
					aggregatedErrors = { ...aggregatedErrors, ...result.errors };
				}
			}
		}
		if (Object.keys(aggregatedErrors).length > 0) {
			throw new AppError({
				message: 'Validation failed',
				errors: aggregatedErrors,
			});
		}
		return;
	}
}
