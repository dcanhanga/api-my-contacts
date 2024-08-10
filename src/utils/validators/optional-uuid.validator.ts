import type { IUUIDValidator } from '@/application/index.js';

export class OptionalUUIDValidator implements IUUIDValidator {
	constructor(private readonly validateUUID: IUUIDValidator) {}

	isValid(uuid: unknown) {
		if (uuid === undefined || uuid === null) {
			return {
				isValid: true,
			};
		}
		return this.validateUUID.isValid(uuid);
	}
}
