import axios from 'axios';

const dbFunctions = {

  addDog: (id, dogName) => new Promise((resolve, reject) => {
    axios.post(`${process.env.db_host}/user/dogs?userId=${id}&dogName=${dogName}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  }),

  getDogs: (id) => new Promise((resolve, reject) => {
    axios.get(`${process.env.db_host}/user/dogs?userId=${id}`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  }),

  removeDog: (id, dogName) => new Promise((resolve, reject) => {
    axios.delete(`${process.env.db_host}/user/dogs?userId=${id}&dogName=${dogName}`)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  }),

};

export default dbFunctions;
