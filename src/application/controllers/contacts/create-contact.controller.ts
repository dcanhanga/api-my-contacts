import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	AppError,
	type CreateContactDto,
	DomainErrors,
	type IApiResponse,
	type IContact,
	type IController,
	type IValidator,
} from '@/application/controllers/alias.js';
import type { CreateContactUseCase } from '@/domain/use-cases/index.js';

export class CreateContactController
	implements IController<CreateContactDto, IContact | undefined>
{
	constructor(
		private readonly validator: IValidator,
		private readonly createContactUseCse: CreateContactUseCase,
	) {}
	async handle(
		request: CreateContactDto,
	): Promise<IApiResponse<IContact | undefined>> {
		try {
			this.validator.validate(request);
			const contact = await this.createContactUseCse.execute(request);
			return ApiResponse.success(ApiSuccessResponse.created(contact));
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
		if (error instanceof AppError) {
			return ApiResponse.error(ApiErrorResponses.badRequest(error));
		}
		return ApiResponse.error(ApiErrorResponses.serverError(error));
	}
}
