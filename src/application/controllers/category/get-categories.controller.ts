import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	type GetCategoriesDto,
	type GetCategoriesUseCase,
	type IApiResponse,
	type ICategory,
	type IController,
} from '@/application/controllers/alias.js';

export class GetCategoriesController
	implements IController<GetCategoriesDto, ICategory[] | undefined>
{
	constructor(private readonly getCategoryUseCase: GetCategoriesUseCase) {}
	async handle(
		request: GetCategoriesDto,
	): Promise<IApiResponse<ICategory[] | undefined>> {
		try {
			const categories = await this.getCategoryUseCase.execute(request);
			return ApiResponse.success(ApiSuccessResponse.ok(categories));
		} catch (error) {
			return ApiResponse.error(ApiErrorResponses.serverError(error as Error));
		}
	}
}
