CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  email VARCHAR(100),
  password VARCHAR(255) NOT NULL,
)

CREATE TABLE posts (
  account_id INT,
  FOREIGN KEY (account_id) REFERENCES accounts (id)
  emoji INT NOT NULL,
  rating INT NOT NULL,
  journal VARCHAR(50) NOT NULL,
  created_at TIMESTAMP ,
  reaction_count INT,
)

CREATE TABLE follows (
  follower_id INT,
  target_id INT,
  FOREIGN KEY (follower_id) REFERENCES accounts (id)
  FOREIGN KEY (target_id) REFERENCES accounts (id)
)