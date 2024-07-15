export class AlreadyExitsError extends Error {
	entity: string;
	constructor(entity: string) {
		super('ALREADY_EXISTS');
		this.name = 'AlreadyExitsError';
		this.entity = entity;
	}
}
