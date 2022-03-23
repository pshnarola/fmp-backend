const express = require('express');

const userServiceController = require('../controllers/userServiceController');

const router = express.Router();

router
  .route('/')
  .get(userServiceController.all)
  .post(userServiceController.create);

module.exports = router;
