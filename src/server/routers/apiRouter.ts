import express, { Request, Response } from 'express'; 
const router = express.Router();
import * as postController from '../controllers/postController.js'
import * as accountController from '../controllers/accountController.js'
//import followController from '../controllers/followController'

//the below are the four routes for accessing the accounts Table
router.post('/accounts', accountController.createUser, accountController.signIn, (req: Request, res: Response) => {
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

//this is the beginning of the routes for the posts Table
router.post('/posts', postController.createPost, (req: Request, res: Response) => {
  res.status(201).json(res.locals.success);
});
router.put('/posts', postController.addReaction, (req: Request, res: Response) => {
  res.status(201).json(res.locals.success);
});
router.get('/posts', postController.getFeed, (req: Request, res: Response) => {
  res.status(200).json(res.locals.feed);
});

export default router;