import express, { Request, Response, NextFunction } from 'express'; 
const router = express.Router();

import postController from '../controllers/postController'
import accountController from '../controllers/accountController'
import { getAllFollows, addFollow } from '../controllers/followController.js'

router.get('/follows',
           getAllFollows,
           (req: Request, res: Response, next: NextFunction) => {
           res.status(200).json(res.locals.follows);
});

router.post('/follows',
            addFollow,
           (req: Request, res: Response, next: NextFunction) => {
           res.json(`Followed ${req.body.target}`);
});



export default router;
