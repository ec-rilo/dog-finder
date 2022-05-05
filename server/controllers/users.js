const models = require('../models/models');

module.exports = {

  addDog: (req, res) => {
    const { dogName } = req.query;
    const { userId } = req.query;

    models.users.addSingleDog(dogName, userId)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.status(400).send(err));
  },

  getDogs: (req, res) => {
    const { userId } = req.query;

    models.users.getAllDogs(userId)
      .then((data) => res.send(data))
      .catch((err) => res.status(400).send(err));
  },

};
