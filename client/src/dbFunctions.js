import axios from 'axios';

const dbFunctions = {

  addDog: (id, dogName) => new Promise((resolve, reject) => {
    axios.post(`http://localhost:3000/user/dogs?userId=${id}&dogName=${dogName}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  }),

  getDogs: (id) => new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/user/dogs?userId=${id}`)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  }),

};

export default dbFunctions;
