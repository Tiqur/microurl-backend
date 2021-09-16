import { CustomError } from './CustomError';

export class RequestValidationError extends CustomError {
  constructor(data: any, message?: string) {
    super(400, message || 'Something went wrong while validating your request', data)
  }
}
