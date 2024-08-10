import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	AppError,
	DomainErrors,
	type IApiResponse,
	type ICategory,
	type IController,
	type IValidator,
	type UpdateCategoryDto,
	type UpdateCategoryUseCase,
} from '../alias.js';

export class UpdateCategoryController
	implements IController<UpdateCategoryDto, ICategory | null>
{
	constructor(
		private readonly updateCategoryUseCase: UpdateCategoryUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(
		request: UpdateCategoryDto,
	): Promise<IApiResponse<ICategory | null>> {
		try {
			this.validator.validate(request);

			const category = await this.updateCategoryUseCase.execute(request);

			return ApiResponse.success(
				ApiSuccessResponse.ok(
					category,
					`Category ${request.name} updated successfully`,
				),
			);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}
	private handleError(error: Error): IApiResponse {
		if (error instanceof DomainErrors.NotFoundError) {
			return ApiResponse.error(
				ApiErrorResponses.notFoundRequest({
					message: error.message,
				}),
			);
		}
		if (error instanceof DomainErrors.AlreadyExistsError) {
			return ApiResponse.error(
				ApiErrorResponses.conflictRequest({
					message: error.message,
				}),
			);
		}
		if (error instanceof AppError) {
			return ApiResponse.error(ApiErrorResponses.badRequest(error));
		}
		return ApiResponse.error(ApiErrorResponses.serverError(error));
	}
}
