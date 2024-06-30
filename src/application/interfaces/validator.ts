// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type IValidator<T = any> = {
	validate: (input: IKeyValue<T>) => Error | undefined;
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IKeyValue<T = any> {
	[key: string]: T;
}
