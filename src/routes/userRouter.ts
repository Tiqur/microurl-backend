import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middleware';
const router = express.Router();

router.get('/', 
  body('username').isString(),
  validateRequest,
  (_: Request, res: Response) => {
    res.send(200);
})

export default router;
