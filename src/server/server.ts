import express, { Request, Response, NextFunction } from 'express'; 
import path from 'path';


const app = express();

app.use(express.json());

//404 handler
app.use((req: Request, res: Response, next: NextFunction): void => {
  res.status(404).sendFile(path.resolve('./assets/404.html'), (err) => {
    if (err) return next(err);
  });
});



// listen returns server instance; needed for test
export default app.listen(3000, () => console.log('listening on port 3000'));