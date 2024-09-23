import {
	ApiErrorResponse,
	ApiResponse,
	ApiSuccessResponse,
	AppError,
	type CreateCategoryDto,
	type CreateCategoryUseCase,
	DomainErrors,
	type IApiResponse,
	type ICategory,
	type IController,
	type IValidator,
} from '@/application/controllers/alias.js';

export class CreateCategoryController
	implements IController<CreateCategoryDto, ICategory | null>
{
	constructor(
		private readonly createCategoryUseCase: CreateCategoryUseCase,
		private readonly validator: IValidator
	) {}
	async handle(
		request: CreateCategoryDto
	): Promise<IApiResponse<ICategory | null>> {
		try {
			this.validator.validate(request);
			const category = await this.createCategoryUseCase.execute(request);
			return ApiResponse.success(ApiSuccessResponse.created(category));
		} catch (error) {
			return this.handleError(error as Error);
		}
	}
	private handleError(error: Error): IApiResponse {
		if (error instanceof DomainErrors.AlreadyExistsError) {
			return ApiResponse.error(
				ApiErrorResponse.conflictRequest({
					message: error.message,
				})
			);
		}
		if (error instanceof AppError) {
			return ApiResponse.error(ApiErrorResponse.badRequest(error));
		}
		return ApiResponse.error(ApiErrorResponse.serverError(error));
	}
}
