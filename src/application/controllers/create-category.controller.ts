import {
	type IController,
	type IErrorResponse,
	type IHttpResponse,
	type IResponseData,
	type IValidator,
	errorResponses,
	errors,
	httpResponse,
	successResponse,
} from '@/application/index.js';
import {
	AlreadyExitsError,
	type CreateCategoryUseCase,
	type ICategory,
	type ICreateCategoryDto,
} from '@/domain/index.js';
export class CreateCategoryController
	implements IController<ICreateCategoryDto>
{
	constructor(
		private readonly createCategoryUseCase: CreateCategoryUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(request: ICreateCategoryDto): Promise<IHttpResponse<IBody>> {
		try {
			this.validator.validate(request);

			const category = await this.createCategoryUseCase.execute(request);

			return httpResponse.success(
				successResponse.created(category, `Category ${request.name} Created`),
			);
		} catch (error) {
			if (error instanceof AlreadyExitsError) {
				const appError = new errors.AppError({
					message: error.message,
					type: 'CONFLICT',
					name: 'ConflictError',
					entity: 'Category',
				});
				return httpResponse.error(errorResponses.conflictRequest(appError));
			}
			if (
				error instanceof errors.InvalidParameterError ||
				error instanceof errors.MissingParameterError
			) {
				return httpResponse.error(errorResponses.badRequest(error));
			}
			return httpResponse.error(errorResponses.serverError(error as Error));
		}
	}
}

type IBody = IResponseData<ICategory> | IErrorResponse;
