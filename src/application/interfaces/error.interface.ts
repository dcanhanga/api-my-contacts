export interface IAppError {
	message: string;
	errors?: { [key: string]: string };
}
export type ErrorFields = { [key: string]: string };
