const { Pool } = require('pg');

const credentials = {
  host: process.env.pg_host,
  user: process.env.pg_user,
  password: process.env.pg_pass,
  database: 'dog_finder',
};

const pool = new Pool(credentials);

pool.connect()
  .then(() => console.log('connected to postgres'))
  .catch((err) => console.log('Failed to connect: ', err));

module.exports = {

  addSingleDog: (dogName, userId) => new Promise((resolve, reject) => {
    const query = `INSERT INTO saved_dogs (dog_name, user_id) VALUES ('${dogName}', ${userId});`;

    pool.query(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  }),

  getAllDogs: (userId) => new Promise((resolve, reject) => {
    const query = `SELECT * FROM saved_dogs WHERE saved_dogs.user_id = ${userId}`;

    pool.query(query)
      .then((data) => resolve(data.rows))
      .catch((err) => reject(err));
  }),

  removeSingleDog: (userId, dogName) => new Promise((resolve, reject) => {
    const query = `DELETE FROM saved_dogs WHERE user_id = ${userId} AND dog_name = '${dogName}'`;

    pool.query(query)
      .then((data) => resolve(data.rows))
      .catch((err) => reject(err));
  }),

};
