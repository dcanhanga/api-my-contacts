import type { UUID } from 'node:crypto';
import {
	AppError,
	type IUUIDValidator,
	type IValidator,
	type KeyValueMap,
} from '@/application/index.js';

export class UUIDValidator implements IValidator {
	constructor(
		private readonly fieldName: string,
		private readonly validateUUID: IUUIDValidator,
	) {}
	validate(input: KeyValueMap<UUID>) {
		const value = input[this.fieldName];
		const { isValid, message } = this.validateUUID.isValid(value);
		if (!isValid && typeof message === 'string') {
			const invalidParameterError = new AppError({
				message,
				errors: {
					[this.fieldName]: message,
				},
			});
			return invalidParameterError;
		}
	}
}
