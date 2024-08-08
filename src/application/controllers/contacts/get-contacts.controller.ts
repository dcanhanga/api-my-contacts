import {
	ApiErrorResponses,
	ApiResponse,
	ApiSuccessResponse,
	type GetCategoriesDto,
	type GetContactsDto,
	type GetContactsUseCase,
	type IApiResponse,
	type IContact,
	type IController,
} from '@/application/controllers/alias.js';

export class GetContactsController
	implements IController<GetContactsDto, IContact[] | undefined>
{
	constructor(private readonly getContactUseCase: GetContactsUseCase) {}
	async handle(
		request: GetCategoriesDto,
	): Promise<IApiResponse<IContact[] | undefined>> {
		try {
			const contacts = await this.getContactUseCase.execute(request);
			return ApiResponse.success(ApiSuccessResponse.ok(contacts));
		} catch (error) {
			return ApiResponse.error(ApiErrorResponses.serverError(error as Error));
		}
	}
}
