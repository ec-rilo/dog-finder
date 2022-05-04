import axios from 'axios';

const apiFunctions = {
  getDogBreeds: (dogName) => new Promise((resolve, reject) => {
    axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dogName}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => reject(err));
  }),
};

export default apiFunctions;
