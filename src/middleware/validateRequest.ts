import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { CustomError } from '../errors'

// Display errors if invalid request parameters
export function validateRequest(req: Request, _: Response, next: NextFunction) {
  const errors = validationResult(req);

  // If validation error, pass to error handler
  if (errors) {
    const err = new CustomError(400, 'Something went wrong while validating your request', errors.array());
    next(err);
  }

  next();
}
