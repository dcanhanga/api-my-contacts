import type { UpdateContactUseCase } from '@/domain/use-cases/contacts/update-contact.useCase.js';
import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	AppError,
	type CreateCategoryDto,
	DomainErrors,
	type IApiResponse,
	type ICategory,
	type IContact,
	type IController,
	type IValidator,
	type UpdateCategoryDto,
	type UpdateCategoryUseCase,
	type UpdateContactsDto,
} from '../alias.js';

export class UpdateContactController
	implements IController<UpdateContactsDto, IContact | undefined>
{
	constructor(
		private readonly updateContactUseCase: UpdateContactUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(
		request: UpdateContactsDto,
	): Promise<IApiResponse<IContact | undefined>> {
		try {
			this.validator.validate(request);

			const contact = await this.updateContactUseCase.execute(request);

			return ApiResponse.success(
				ApiSuccessResponse.ok(
					contact,
					`Contact ${request.name} updated successfully`,
				),
			);
		} catch (error) {
			return this.handleError(error as Error);
		}
	}
	private handleError(error: Error): IApiResponse<undefined> {
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
