import {
	ApiErrorResponses,
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
	implements IController<CreateCategoryDto, ICategory | undefined>
{
	constructor(
		private readonly createCategoryUseCase: CreateCategoryUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(
		request: CreateCategoryDto,
	): Promise<IApiResponse<ICategory | undefined>> {
		try {
			this.validator.validate(request);
			const category = await this.createCategoryUseCase.execute(request);
			return ApiResponse.success(ApiSuccessResponse.created(category));
		} catch (error) {
			return this.handleError(error as Error);
		}
	}
	private handleError(error: Error): IApiResponse<undefined> {
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
