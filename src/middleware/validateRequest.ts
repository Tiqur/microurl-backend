import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors'

// Display errors if invalid request parameters
export function validateRequest(req: Request, _: Response, next: NextFunction) {
  const errors = validationResult(req);

  // If validation error, pass to error handler
  if (errors) {
    next(new RequestValidationError(errors));
  }

  next();
}
