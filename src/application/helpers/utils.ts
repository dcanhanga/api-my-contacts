import type { IMeta } from '../interfaces/http.interface.js';

export const makeMeta = (
	status: 'success' | 'error',
	message: string,
): IMeta => ({
	status,
	timestamp: new Date().toISOString(),
	message,
});
