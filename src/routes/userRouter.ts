import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middleware';
const router = express.Router();


// Create user endpoint
router.post('/', 
  body('email')
    .isEmail()
      .withMessage('must be a valid email'),

  body('username')
    .isLength({ min: 5, max: 16 })
      .withMessage('must be between 5 and 16 characters long'),

  body('password')
    .isLength({ min: 5, max: 128 })
      .withMessage('must be between 5 and 128 characters long')
    .matches(/\d/)
      .withMessage('must contain at least 1 number'),

  validateRequest,
  (_: Request, res: Response) => {
    res.send(200);
})

export default router;
