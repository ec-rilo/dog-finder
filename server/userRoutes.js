const router = require('express').Router();

const controllers = require('./controllers/controllers');

router.post('/dogs', (req, res) => controllers.users.addDog(req, res));

router.get('/dogs', (req, res) => controllers.users.getDogs(req, res));

router.delete('/dogs', (req, res) => controllers.users.removeDog(req, res));

module.exports = router;
