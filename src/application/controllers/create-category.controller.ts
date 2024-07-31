import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	ApplicationErrors,
	ErrorCode,
	type IApiErrorResponse,
	type IApiResponse,
	type IApiResponseData,
	type IController,
	type IValidator,
} from '@/application/index.js';
import {
	type CreateCategoryUseCase,
	DomainErrors,
	type ICategory,
	type ICreateCategoryDto,
} from '@/domain/index.js';

export class CreateCategoryController
	implements
		IController<
			ICreateCategoryDto,
			IApiResponseData<ICategory> | IApiErrorResponse
		>
{
	constructor(
		private readonly createCategoryUseCase: CreateCategoryUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(
		request: ICreateCategoryDto,
	): Promise<IApiResponse<IApiResponseData<ICategory> | IApiErrorResponse>> {
		try {
			this.validator.validate(request);

			const category = await this.createCategoryUseCase.execute(request);

			return ApiResponse.success(
				ApiSuccessResponse.created(
					category,
					`Category ${request.name} Created`,
				),
			);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}
	private handleError(error: Error): IApiResponse<IApiErrorResponse> {
		if (error instanceof DomainErrors.AlreadyExistsError) {
			return ApiResponse.error(
				ApiErrorResponses.conflictRequest({
					message: error.message,
					errorType: ErrorCode.CONFLICT,
					name: 'ConflictError',
					entity: 'Category',
				}),
			);
		}
		if (
			error instanceof ApplicationErrors.InvalidParameterError ||
			error instanceof ApplicationErrors.MissingParameterError
		) {
			return ApiResponse.error(ApiErrorResponses.badRequest(error));
		}
		return ApiResponse.error(ApiErrorResponses.serverError(error));
	}
}
