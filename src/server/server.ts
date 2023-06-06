import express, { Request, Response, NextFunction } from 'express'; 
const app = express();

app.use(express.json());

//404 handler
app.use((req: Request, res: Response, next: NextFunction): void => {
});

export default app.listen(3000, () => console.log('listening on port 3000'));