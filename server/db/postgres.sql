CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL UNIQUE PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS saved_dogs (
  dog_name VARCHAR(100) NOT NULL,
  user_id INT,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(user_id)
);