const express = require('express');

const userServiceController = require('../controllers/userService.controller');

const router = express.Router();

router
  .route('/')
  .get(userServiceController.all)
  .post(userServiceController.create);

module.exports = router;
