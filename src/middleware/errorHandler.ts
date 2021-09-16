import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors';

export function errorHandler(err: Error, _1: Request, res: Response, _2: NextFunction) {
  let status: number = 500;
  let message: string = 'Something went wrong';
  let data: any = {};


  // Handle custom error
  if (err instanceof CustomError) {
    status = err.statusCode;
    message = err.message;
    data = err.data;
  }

  res.status(status).json({
    error: {
      status,
      message,
      data
    }
  })
}
