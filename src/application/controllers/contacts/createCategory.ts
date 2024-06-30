import { ConflictError } from '@/application/Errors/ConflictError.js';
import { badRequest, conflict } from '@/application/helpers/https.js';
import type { IHttpResponse } from '@/application/interfaces/Http.js';
import type { IController } from '@/application/interfaces/controller.js';
import type { IValidator } from '@/application/interfaces/validator.js';
import type {
	CreateCategoryDto,
	CreateCategoryUseCase,
	ICategory,
} from '@/domain/index.js';

export class CreateCategoryController
	implements IController<CreateCategoryDto>
{
	constructor(
		private readonly createCategoryUseCase: CreateCategoryUseCase,
		private readonly validator: IValidator,
	) {}
	async handle(request: CreateCategoryDto): Promise<IHttpResponse<Body>> {
		const error = this.validator.validate(request);
		if (error) {
			return badRequest(error);
		}
		const { alreadyExits, category } =
			await this.createCategoryUseCase.execute(request);
		if (alreadyExits) {
			return conflict(new ConflictError(request.name));
		}
		return Promise.resolve({ body: category, statusCode: 201 });
	}
}

type Body = ICategory | Error | undefined;
