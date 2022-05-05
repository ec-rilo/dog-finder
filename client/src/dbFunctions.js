import axios from 'axios';

const dbFunctions = {

  addDog: (id, dogName) => new Promise((resolve, reject) => {
    axios.post(`/user/dogs?userId=${id}&dogName=${dogName}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  }),

  getDogs: (id) => new Promise((resolve, reject) => {
    axios.get(`/user/dogs?userId=${id}`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  }),

  removeDog: (id, dogName) => new Promise((resolve, reject) => {
    axios.delete(`/user/dogs?userId=${id}&dogName=${dogName}`)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  }),

};

export default dbFunctions;
