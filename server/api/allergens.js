const router = require('express').Router()
const {Allergens} = require('../db/index').models

router.get('/', (req, res, next) => {
  Allergens.findAll()
    .then(allergens => res.send(allergens))
    .catch(next)
});

module.exports = router