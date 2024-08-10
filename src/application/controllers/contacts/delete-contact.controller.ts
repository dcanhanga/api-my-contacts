import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	AppError,
	type DeleteCategoryDto,
	type DeleteContactUseCase,
	type DeleteContactsDto,
	type IApiResponse,
	type IController,
	type IValidator,
} from '../alias.js';

export class DeleteContactController
	implements IController<DeleteCategoryDto, void>
{
	constructor(
		private readonly deleteContactUseCase: DeleteContactUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(request: DeleteContactsDto): Promise<IApiResponse<void>> {
		try {
			this.validator.validate(request);
			await this.deleteContactUseCase.execute(request);
			return ApiResponse.success(
				ApiSuccessResponse.ok(undefined, 'Category Deleted successfully'),
			);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}

	private handleError(error: Error): IApiResponse<void> {
		if (error instanceof AppError) {
			return ApiResponse.error(ApiErrorResponses.badRequest(error));
		}
		return ApiResponse.error(ApiErrorResponses.serverError(error));
	}
}
