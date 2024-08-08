import type { UUID } from 'node:crypto';
import type { IUUIDValidator } from '@/application/index.js';

export class StandardUUIDValidator implements IUUIDValidator {
	isValid(uuid: unknown) {
		const regex =
			/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
		if (typeof uuid !== 'string' || !regex.test(uuid)) {
			return { isValid: false, message: 'INVALID_ID_FORMAT' };
		}
		return { isValid: true };
	}
}
