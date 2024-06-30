import type { UUID } from 'node:crypto';

export const validateUUID = (uuid: UUID): boolean => {
	if (typeof uuid !== 'string') {
		return false;
	}
	const regex =
		/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
	return regex.test(uuid);
};
