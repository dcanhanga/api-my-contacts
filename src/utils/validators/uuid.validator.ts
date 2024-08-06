import type { UUID } from 'node:crypto';
import {
	ApplicationErrors,
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
			throw new ApplicationErrors.InvalidParameterError({
				name: 'InvalidParameterError',
				fieldName: this.fieldName,
				message: `${this.fieldName.toLocaleUpperCase()}_${message}`,
			});
		}
	}
}
