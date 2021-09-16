import express, { Request, Response } from 'express';
import { userRouter } from './routes';
import { errorHandler } from './middleware';

// Initialize app and port
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/user', userRouter);

app.get('*', (_: Request, res: Response) => {
  // Send static frontend files
  res.send(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(errorHandler);
