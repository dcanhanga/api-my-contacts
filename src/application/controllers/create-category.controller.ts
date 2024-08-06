import {
	type CreateCategoryDto,
	type CreateCategoryUseCase,
	DomainErrors,
	type ICategory,
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
import {} from '../enum/error-messages.js';

export class CreateCategoryController
	implements
		IController<
			CreateCategoryDto,
			IApiResponseData<ICategory> | IApiErrorResponse
		>
{
	constructor(
		private readonly createCategoryUseCase: CreateCategoryUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(
		request: CreateCategoryDto,
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
