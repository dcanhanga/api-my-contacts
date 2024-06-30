import type { UUID } from 'node:crypto';
export interface IUUIDValidator {
	isValid: (uuid: UUID) => Response;
}
export type Response = { isValid: boolean; message?: string };
