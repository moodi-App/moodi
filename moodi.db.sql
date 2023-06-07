CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  email VARCHAR(100),
  'password' VARCHAR(255) NOT NULL,
  avatar VARCHAR(255)
);

CREATE TABLE posts (
  account_id INT,
  FOREIGN KEY (account_id) REFERENCES accounts (id),
  emoji INT NOT NULL,
  rating INT NOT NULL,
  journal VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  reaction_count INT
);

CREATE TABLE follows (
  follower_id INT,
  target_id INT,
  FOREIGN KEY (follower_id) REFERENCES accounts (id),
  FOREIGN KEY (target_id) REFERENCES accounts (id)
);



SELECT target_id
      FROM public.follows
      WHERE follower_id = ( SELECT id from public.accounts WHERE username = $1 )

SELECT a.username, a.avatar
FROM accounts a
RIGHT JOIN (List of follower ids) b ON a.id = b.target_id

SELECT target_id
      FROM public.follows
      WHERE follower_id = ( SELECT id from public.accounts WHERE username = 'Mooder')

SELECT a.* 
FROM posts a
INNER JOIN (list of follower ids) b ON a.account_id = b.target_id