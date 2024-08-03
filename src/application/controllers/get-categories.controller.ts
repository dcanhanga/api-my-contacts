import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
} from '@/application/helpers/index.js';

import type {
	IApiErrorResponse,
	IApiResponse,
	IApiResponseData,
	IController,
} from '@/application/interfaces/index.js';
import type { GetCategoriesUseCase, ICategory } from '@/domain/index.js';

export class GetCategoriesController
	implements
		IController<void, IApiResponseData<ICategory[]> | IApiErrorResponse>
{
	constructor(private readonly getCategoryUseCase: GetCategoriesUseCase) {}
	async handle(): Promise<
		IApiResponse<IApiResponseData<ICategory[]> | IApiErrorResponse>
	> {
		try {
			const categories = await this.getCategoryUseCase.execute();
			return ApiResponse.success(ApiSuccessResponse.ok(categories));
		} catch (error) {
			return ApiResponse.error(ApiErrorResponses.serverError(error as Error));
		}
	}
}
