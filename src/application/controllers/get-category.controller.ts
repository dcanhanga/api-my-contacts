import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	type IApiErrorResponse,
	type IApiResponse,
	type IApiResponseData,
	type IController,
} from '@/application/index.js';
import type { ICategory } from '@/domain/index.js';
import type { GetCategoryUseCase } from '@/domain/use-cases/get-category.use-case.js';

export class GetCategoryController
	implements
		IController<void, IApiResponseData<ICategory[]> | IApiErrorResponse>
{
	constructor(private readonly getCategoryUseCase: GetCategoryUseCase) {}
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
