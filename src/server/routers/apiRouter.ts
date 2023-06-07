import express, { Request, Response, NextFunction } from 'express'; 
const router = express.Router();

import postController from '../controllers/postController'
import { getAllFollows, addFollow, unfollow } from '../controllers/followController.js'
import * as accountController from '../controllers/accountController.js'

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

router.delete('/follows',
              unfollow,
             (req: Request, res: Response, next: NextFunction) => {
             res.json(`Unfollowed ${req.query.target}`);
});

router.post('/accounts', accountController.createUser, (req: Request, res: Response) => {

  res.status(201).json('Account created');

});

router.put('/accounts', accountController.updateAvatar, (req: Request, res: Response) => {

  res.status(201).json('Avatar changed');

});

router.get('/accounts', accountController.signIn, (req: Request, res: Response) => {

  res.status(200).json(res.locals.message);

});

router.get('/accounts', accountController.signOut, (req: Request, res: Response) => {

  //res.redirect(path.resolve());

});

export default router;
