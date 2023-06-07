import { Request, Response, NextFunction } from 'express'; 
import { query } from '../model.js';

export const getAllFollows = (req: Request, res: Response, next: NextFunction): void => {
  const queryString = `
  SELECT * FROM public.follows WHERE follower_id = $1;
  `
  const { id } = req.params;
  query(queryString, [id], (err, data) => {
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
