import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middleware';
const router = express.Router();

// Create user endpoint
router.get('/', 
  body('email')
    .isEmail()
      .withMessage('must be a valid email'),

  body('username')
    .isLength({ min: 5, max: 16 })
      .withMessage('must be between 5 and 16 characters long'),

  body('password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      .withMessage('must contain at least 8 characters, 1 letter and 1 number'),

  validateRequest,
  (_: Request, res: Response) => {
    res.send(200);
})

export default router;
