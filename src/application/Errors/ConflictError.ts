export class ConflictError extends Error {
	constructor(paramName: string) {
		super(`Already Exits: ${paramName}`);
		this.name = 'ConflictError';
	}
}
