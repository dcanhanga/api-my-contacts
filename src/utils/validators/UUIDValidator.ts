import type { UUID } from 'node:crypto';
import {
	type IKeyValue,
	type IUUIDValidator,
	type IValidator,
	InvalidParamError,
} from '@/application/index.js';

export class UUIDValidator implements IValidator {
	constructor(
		private readonly uuid: UUID,
		private readonly validateUUID: IUUIDValidator,
	) {}
	validate(input: IKeyValue<UUID>): Error | undefined {
		const value = input[this.uuid];
		const { isValid, message } = this.validateUUID.isValid(value);
		if (!isValid && typeof message === 'string') {
			return new InvalidParamError(`${value} ${message}`);
		}
	}
}
