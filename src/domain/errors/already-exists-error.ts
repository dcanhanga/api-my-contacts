export class AlreadyExistsError extends Error {
	entity: string;
	constructor(entity: string) {
		super(`${entity.toUpperCase()}_ALREADY_EXISTS`);
		this.name = 'AlreadyExitsError';
		this.entity = entity;
	}
}
