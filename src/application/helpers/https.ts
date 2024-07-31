import { formatErrorResponse, formatSuccessResponse } from './utils.js';

export const ApiResponse = {
	success: formatSuccessResponse,
	error: formatErrorResponse,
};
