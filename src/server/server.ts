import express, { Request, Response, NextFunction } from 'express'; 
import path from 'path';
import process from 'process';
import apiRouter from './routers/apiRouter.js';

const app = express();

app.use(express.json());

app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'test') {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    app.use('/broken', (req: Request, res: Response, next: NextFunction): void => {
            next({ message: 'Intentionally broken' });
    })
}

//404 handler
app.use((req: Request, res: Response, next: NextFunction): void => {
  res.status(404).sendFile(path.resolve('src/server/assets/404.html'), (err) => {
    if (err) return next(err);
  });
});

const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    const defaultError = {
        message: 'There was an unknown error inside the server',
        status: 500,
        error: err
    };
    const error = Object.assign(defaultError, err);
    console.log(error);
    res.status(500).json(error.message);
}

app.use(globalErrorHandler);

// listen returns server instance; needed for test
export default app.listen(3000, () => console.log('listening on port 3000'));
