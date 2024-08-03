export class NotFoundError extends Error {
	entity: string;
	constructor(entity: string) {
		super(`${entity.toUpperCase()}_Not_Found`);
		this.name = 'NotFoundError';
		this.entity = entity;
	}
}
