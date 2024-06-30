// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface IHttpResponse<T = any> {
	statusCode: number;
	body: T;
}
