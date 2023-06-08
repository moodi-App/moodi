import { query } from '../model.js';
import { Request, Response, NextFunction } from 'express'; 

export const createPost = (req: Request, res: Response, next: NextFunction): void => {

  const { username, emoji, rating, journal } = req.body;

  const queryString: string = 'INSERT INTO posts account_id, emoji, rating, journal) VALUES ( (SELECT id FROM public.accounts WHERE (username = $1), $2, $3, $4);';

  query(queryString, [username, emoji, rating, journal], (err: Error, results: any) =>{
    if(err) {
      next({message: 'Error in createPost', error: err});
      return;
    };
    res.locals.success = 'You have made a post';
    return next();
  })

};

export const addReaction = (req: Request, res: Response, next: NextFunction): void => {

  const { post_id } = req.body;

  const queryString: string = 'UPDATE posts WHERE id=p$1 SET reaction=reaction+1 ;';
  query(queryString, [post_id],(err: Error, results: any) =>{
    if(err) {
      next({message: 'Error in addReaction', error: err});
      return;
    };
    res.locals.update = 'the new reaction count is:';
    return next();
  });
};

export const getFeed = (req: Request, res: Response, next: NextFunction): void => {

  const { username } = req.body;
  console.log('getting feed!')
  const queryString: string = 'SELECT a.* FROM posts a INNER JOIN (SELECT target_id FROM public.follows WHERE follower_id = ( SELECT id from public.accounts WHERE username = $1 )) b ON a.account_id = b.target_id;';

  query(queryString, [username], (err: Error, results: any) =>{
    if(err) {
      next({message: 'Error in getFeed', error: err});
      return;
    };
    res.locals.feed = results.rows;
    return next();
  });
};
