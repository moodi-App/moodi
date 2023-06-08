import { Request, Response, NextFunction } from 'express'; 
import { query } from '../model.js';

export const getAllFollows = (req: Request, res: Response, next: NextFunction): void => {
  console.log('querying followlist!')
  const queryString = `
  SELECT username, email, avatar FROM
  (SELECT target_id, username follower FROM
  (SELECT * FROM public.follows
  WHERE follower_id = ( SELECT id from public.accounts WHERE username = $1 )
  ) AS ref
  LEFT JOIN public.accounts first
  ON first.id = ref.follower_id) AS second
  LEFT JOIN public.accounts third
  ON third.id = second.target_id;
  `
  const username = req.query.username as string;
  query(queryString, [username], (err, data) => {
    if (err) next({ message: "error in getAllFollows", err: err });
    else {
      if (!data.rows) {
        next({ message: "error in getAllFollows", err: err });
        return;
      }
      res.locals.follows = data.rows;
      next();
    }
  });
};

export const addFollow = (req: Request, res: Response, next: NextFunction): void => {
  const isLegalString = `
  SELECT
    EXISTS (SELECT * FROM public.accounts WHERE username = $1) AND
    EXISTS (SELECT * FROM public.accounts WHERE username = $2) AND
    NOT EXISTS (SELECT * FROM public.follows WHERE 
                follower_id = (SELECT id FROM public.accounts WHERE username = $1) AND
                target_id =   (SELECT id FROM public.accounts WHERE username = $2))
  `;
  const insertString = `
  INSERT INTO public.follows
  VALUES (
    (SELECT id FROM public.accounts WHERE username = $1),
    (SELECT id FROM public.accounts WHERE username = $2)
  );
  `;
  const follower = req.body.follower as string;
  const target = req.body.target as string;
  if (!follower) {
    next({ message: 'error in addFollow: no follower provided', status: 400 });
    return;
  }
  if (!target) {
    next({ message: 'error in addFollow: no target provided', status: 400 });
    return;
  }
  const legalCheck = query(isLegalString, [follower, target], (err, data) => {
    if (err) {
      next({ message: 'error in addFollow: legalCheck', err: err });
      return;
    }
    const isLegal = data.rows[0]['?column?'];
    if (!isLegal) {
      next({
        message: 'error in addFollow: either you already follow that user or that user does not exist',
        status: 400
      });
      return;
    } else {
      query(insertString, [follower, target], (err, data) => {
        if (err) {
          next ({ message: 'error in addFollow: inserting', err: err });
          return;
        } else {
          res.status(201);
          next();
        }
      });
    }
  });
};

export const unfollow = (req: Request, res: Response, next: NextFunction): void => {
  const deleteString = `
  DELETE FROM public.follows
  WHERE 
    follower_id = (SELECT id FROM public.accounts WHERE username = $1) AND
    target_id =   (SELECT id FROM public.accounts WHERE username = $2);
 `;
  const follower = req.query.follower as string;
  const target = req.query.target as string;
  if (!follower) {
    next({ message: 'error in unfollow: no follower provided', status: 400 });
    return;
  }
  if (!target) {
    next({ message: 'error in unfollow: no target provided', status: 400 });
    return;
  }
  query(deleteString, [follower, target], (err, data) => {
    if (err) {
       next({ message: 'error in unfollow: deleting', err: err });
       return;
    } else {
      res.status(201);
      next();
    }
  });
};
