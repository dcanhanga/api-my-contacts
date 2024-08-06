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
import type {
	GetCategoriesDto,
	GetCategoriesUseCase,
	ICategory,
} from '@/domain/index.js';

export class GetCategoriesController
	implements
		IController<
			GetCategoriesDto,
			IApiResponseData<ICategory[]> | IApiErrorResponse
		>
{
	constructor(private readonly getCategoryUseCase: GetCategoriesUseCase) {}
	async handle(
		request: GetCategoriesDto,
	): Promise<IApiResponse<IApiResponseData<ICategory[]> | IApiErrorResponse>> {
		try {
			const categories = await this.getCategoryUseCase.execute(request);
			return ApiResponse.success(ApiSuccessResponse.ok(categories));
		} catch (error) {
			return ApiResponse.error(ApiErrorResponses.serverError(error as Error));
		}
	}
}
