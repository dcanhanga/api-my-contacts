import type { ICategory } from '@/domain/index.js';
import type { GetCategoryUseCase } from '@/domain/use-cases/get-category.use-case.js';
import { errorResponses } from '../helpers/errors.js';
import { httpResponse } from '../helpers/https.js';
import { successResponse } from '../helpers/success.js';
import type { IController } from '../interfaces/controller.interface.js';
import type {
	IErrorResponse,
	IHttpResponse,
	IResponseData,
} from '../interfaces/http.interface.js';

export class GetCategoryController implements IController {
	constructor(private readonly getCategoryUseCase: GetCategoryUseCase) {}
	async handle(): Promise<IHttpResponse<IBody>> {
		try {
			const categories = await this.getCategoryUseCase.execute();
			return httpResponse.success(successResponse.ok(categories));
		} catch (error) {
			return httpResponse.error(errorResponses.serverError(error as Error));
		}
	}
}
type IBody = IResponseData<ICategory[]> | IErrorResponse;
