export class AlreadyExistsError extends Error {
	entity: string;
	constructor(entity: string) {
		super(`${entity.toLocaleUpperCase()}_ALREADY_EXISTS`);
		this.name = 'AlreadyExitsError';
		this.entity = entity;
	}
}
