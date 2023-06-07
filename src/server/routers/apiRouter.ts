import express, { Request, Response } from 'express'; 
const router = express.Router();
//import postController from '../controllers/postController'
import * as accountController from '../controllers/accountController.js'
//import followController from '../controllers/followController'


router.post('/accounts', accountController.createUser, (req: Request, res: Response) => {
  console.log('')
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