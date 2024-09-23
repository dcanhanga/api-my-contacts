import { ApiErrorResponse, ApiResponse, ApiSuccessResponse } from '../helpers';

export class BaseController {
	protected okResponse<T>(data: T, message: string) {
		return ApiResponse.success(ApiSuccessResponse.ok(data, message));
	}

	protected serverErrorResponse(error: Error) {
		return ApiResponse.error(ApiErrorResponse.serverError(error));
	}
}
