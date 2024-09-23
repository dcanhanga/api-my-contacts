import type {
	GetCategoriesDto,
	GetCategoriesUseCase,
	IApiResponse,
	ICategory,
	IController,
} from '@/application/controllers/alias';
import {
	CategoryApiMapper,
	type CategoryResponse,
} from '@/application/mapper/category-api-mapper';
import { BaseController } from '@/application/utils/base-controller';

export class GetCategoriesController
	extends BaseController
	implements
		IController<GetCategoriesDto, GetCategoriesController.Response | null>
{
	constructor(private readonly getCategoryUseCase: GetCategoriesUseCase) {
		super();
	}
	async handle(
		request: GetCategoriesController.Request
	): Promise<IApiResponse<GetCategoriesController.Response | null>> {
		try {
			const categories = await this.getCategoryUseCase.execute(request);
			return this.okResponse(
				this.formatResponse(categories),
				'Categories retrieved successfully'
			);
		} catch (error) {
			return this.serverErrorResponse(error as Error);
		}
	}
	private formatResponse(categories: ICategory[]) {
		return {
			categories: categories.map(category =>
				CategoryApiMapper.toResponse(category)
			),
		};
	}
}

export namespace GetCategoriesController {
	export type Response = {
		categories: CategoryResponse[];
	};
	export type Request = GetCategoriesDto;
}
