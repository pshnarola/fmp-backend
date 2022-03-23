const express = require('express');
const serviceTierController = require('../controllers/serviceTierController');

const router = express.Router();

router
  .route('/')
  .get(serviceTierController.all)
  .post(serviceTierController.create)
  .patch(serviceTierController.update)
  .delete(serviceTierController.delete);

module.exports = router;
