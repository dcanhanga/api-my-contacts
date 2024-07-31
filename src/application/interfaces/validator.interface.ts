export type KeyValueMap<T = unknown> = {
	[key: string]: T;
};

export interface IValidator<T = unknown> {
	validate(input: KeyValueMap<T>): void;
}
