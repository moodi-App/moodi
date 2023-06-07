import express, { Request, Response, NextFunction } from 'express'; 
const router = express.Router();

import postController from '../controllers/postController'
import accountController from '../controllers/accountController'
import { getAllFollows } from '../controllers/followController.js'

router.get('/follows/:id',
           getAllFollows,
           (req: Request, res: Response, next: NextFunction) => {
           res.status(200).json(res.locals.follows);
});


export default router;
