export interface INameValidator {
	isValid: (name: unknown) => { isValid: boolean; message?: string };
}
