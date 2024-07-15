export type ValidationResponse = { isValid: boolean; message?: string };

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type IKeyValue<T = any> = {
	[key: string]: T;
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IValidator<T = any> {
	validate: (input: IKeyValue<T>) => void;
}
