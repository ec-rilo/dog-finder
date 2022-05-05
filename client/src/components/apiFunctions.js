import axios from 'axios';

// Assets
import dogIds from './dogIds';

const apiFunctions = {

  getDogBreeds: (dogName) => new Promise((resolve, reject) => {
    axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dogName}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => reject(err));
  }),

  getSingleDog: (dogName) => new Promise((resolve, reject) => {
    const obj = {};

    axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${dogName}`)
      .then((response) => {
        const data = response.data[0];
        delete data.height;
        delete data.bred_for;
        delete data.id;
        delete data.life_span;
        delete data.weight;
        obj.briefData = data;

        const id = dogIds[dogName];
        return axios.get(`https://api-dog-breeds.herokuapp.com/api/dog/${id}`);
      })
      .then((response) => {
        const { data } = response;

        obj.expandedData = data;
        const id = obj.briefData.reference_image_id;

        if (id) {
          return axios.get(`https://api.thedogapi.com/v1/images/${id}`);
        }
        return '';
      })
      .then((response) => {
        if (response) {
          obj.expandedData.image = response.data.url;
        }
        resolve(obj);
      })
      .catch((err) => reject(err));
  }),

};

export default apiFunctions;
