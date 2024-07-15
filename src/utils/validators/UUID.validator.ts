import type { UUID } from 'node:crypto';
import {
	type IKeyValue,
	type IUUIDValidator,
	type IValidator,
	errors,
} from '@/application/index.js';

export class UUIDValidator implements IValidator {
	constructor(
		private readonly fieldName: UUID,
		private readonly validateUUID: IUUIDValidator,
	) {}
	validate(input: IKeyValue<UUID>) {
		const value = input[this.fieldName];
		const { isValid, message } = this.validateUUID.isValid(value);
		if (!isValid && typeof message === 'string') {
			throw new errors.InvalidParameterError({
				name: 'InvalidParameterError',
				type: 'INVALID_PARAMETER',
				fieldName: this.fieldName,
				message,
			});
		}
	}
}
