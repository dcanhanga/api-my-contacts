// import {
// 	type CreateCategoryDto,
// 	DomainErrors,
// 	type ICategory,
// 	type UpdateCategoryDto,
// 	type UpdateCategoryUseCase,
// } from '@/domain/index.js';

// import { ApplicationErrors } from '@/application/errors/index.js';
// import {
// 	ApiErrorResponses,
// 	ApiResponse,
// 	ApiSuccessResponse,
// } from '@/application/helpers/index.js';
// import type {
// 	IApiErrorResponse,
// 	IApiResponse,
// 	IApiResponseData,
// 	IController,
// 	IValidator,
// } from '@/application/interfaces/index.js';

// export class UpdateCategoryController
// 	implements
// 		IController<
// 			CreateCategoryDto,
// 			IApiResponseData<ICategory> | IApiErrorResponse
// 		>
// {
// 	constructor(
// 		private readonly updateCategoryUseCase: UpdateCategoryUseCase,
// 		private readonly validator: IValidator,
// 	) {}
// 	async handle(
// 		request: UpdateCategoryDto,
// 	): Promise<IApiResponse<IApiResponseData<ICategory> | IApiErrorResponse>> {
// 		try {
// 			this.validator.validate(request);

// 			const category = await this.updateCategoryUseCase.execute(request);

// 			return ApiResponse.success(
// 				ApiSuccessResponse.ok(
// 					category,
// 					`Category ${request.name} updated successfully`,
// 				),
// 			);
// 		} catch (error) {
// 			return this.handleError(error as Error);
// 		}
// 	}
// 	private handleError(error: Error): IApiResponse<IApiErrorResponse> {
// 		if (error instanceof DomainErrors.NotFoundError) {
// 			return ApiResponse.error(
// 				ApiErrorResponses.notFoundRequest({
// 					message: error.message,
// 					name: 'NotFound',
// 					entity: 'Category',
// 				}),
// 			);
// 		}
// 		if (error instanceof DomainErrors.AlreadyExistsError) {
// 			return ApiResponse.error(
// 				ApiErrorResponses.conflictRequest({
// 					message: error.message,

// 					name: 'ConflictError',
// 					entity: 'Category',
// 				}),
// 			);
// 		}
// 		if (
// 			error instanceof ApplicationErrors.InvalidParameterError ||
// 			error instanceof ApplicationErrors.MissingParameterError
// 		) {
// 			return ApiResponse.error(ApiErrorResponses.badRequest(error));
// 		}
// 		return ApiResponse.error(ApiErrorResponses.serverError(error));
// 	}
// }
