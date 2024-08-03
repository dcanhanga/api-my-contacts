import {
	type DeleteCategoryDto,
	type DeleteCategoryUseCase,
	DomainErrors,
} from '@/domain/index.js';

import { ApplicationErrors } from '@/application/errors/index.js';
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
	IValidator,
} from '@/application/interfaces/index.js';
import { ErrorCode } from '../enum/error-messages.js';

export class DeleteCategoryController
	implements
		IController<DeleteCategoryDto, IApiResponseData<string> | IApiErrorResponse>
{
	constructor(
		private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(
		request: DeleteCategoryDto,
	): Promise<IApiResponse<IApiResponseData<string> | IApiErrorResponse>> {
		try {
			this.validator.validate(request);
			await this.deleteCategoryUseCase.execute(request);

			return ApiResponse.success(
				ApiSuccessResponse.ok('Category Deleted successfully'),
			);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}

	private handleError(error: Error): IApiResponse<IApiErrorResponse> {
		if (error instanceof DomainErrors.NotFoundError) {
			return ApiResponse.error(
				ApiErrorResponses.notFoundRequest({
					message: error.message,
					errorType: ErrorCode.NOT_FOUND,
					name: 'NotFound',
					entity: 'Category',
				}),
			);
		}
		if (error instanceof ApplicationErrors.InvalidParameterError) {
			return ApiResponse.error(ApiErrorResponses.badRequest(error));
		}
		return ApiResponse.error(ApiErrorResponses.serverError(error));
	}
}
