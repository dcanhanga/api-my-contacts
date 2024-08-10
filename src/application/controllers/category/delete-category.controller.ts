import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	AppError,
	type DeleteCategoryDto,
	type DeleteCategoryUseCase,
	type IApiResponse,
	type IController,
	type IValidator,
} from '../alias.js';

export class DeleteCategoryController
	implements IController<DeleteCategoryDto>
{
	constructor(
		private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(request: DeleteCategoryDto): Promise<IApiResponse> {
		try {
			this.validator.validate(request);
			await this.deleteCategoryUseCase.execute(request);
			return ApiResponse.success(
				ApiSuccessResponse.ok(null, 'Category Deleted successfully'),
			);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}

	private handleError(error: Error): IApiResponse {
		if (error instanceof AppError) {
			return ApiResponse.error(ApiErrorResponses.badRequest(error));
		}
		return ApiResponse.error(ApiErrorResponses.serverError(error));
	}
}
