import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Display errors if invalid request parameters
export function validateRequest(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (errors) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
}
