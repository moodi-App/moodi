import { query } from '../model.js';
import { Request, Response, NextFunction } from 'express'; 
import  bcrypt from 'bcrypt';

const saltRounds = 5;

export const createUser = (req: Request, res: Response, next: NextFunction): void => {

  const { username, password, email } = req.body;

 bcrypt.hash(password, saltRounds, function(err:Error, hash: String) {
    // Store hash in your password DB.

    console.log('hash', hash);
    const queryString: string = 'INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3);';

    query(queryString, [username, hash, email], (err: Error, results: any) => {
      if(err) {
        next({message: 'Error in createUser', error: err});
        return;
      };
      console.log(results);
      return next();
    });
  });

};

export const updateAvatar = (req: Request, res: Response, next: NextFunction): void => {

  const { id, avatar } = req.body;

  const queryString: string = 'UPDATE accounts SET avatar=avatar WHERE id=id VALUES ($1, $2);';

  query(queryString, [avatar, id], (err: Error, results: any) => {
    if(err) {
      next({message: 'Error in setting avatar', error: err});
      return;
    }
    console.log(results);
    return next();
  });

};

export const signIn = (req: Request, res: Response, next: NextFunction): void => {

  const { username, password } = req.body;

  const queryString: string = 'SELECT password FROM accounts WHERE username=$1;';

  query(queryString, [username], (err: Error, hash: any) => {
    if(err) {
      next({message: 'Error in Sign In, please ensure username is entered correctly', error: err});
      return;
    }
    //console.log('results: ', hash)
    bcrypt.compare(password, hash.rows[0].password, function(err, result) {
      //console.log('result ', result);
      if(result){
        res.cookie( 'username', username );
        res.locals.message = 'login successful'
      }
      else{
        res.locals.message = 'password does not match'
      }
      return next();
    });
  });
};

export const signOut = (req: Request, res: Response, next: NextFunction): void => {

  const { username } = req.body;

  // browser.cookies.remove({
  //   "username": username
  // });

};