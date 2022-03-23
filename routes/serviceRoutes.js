const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

router
  .route('/')
  .get(serviceController.all)
  .post(serviceController.create)
  .patch(serviceController.update)
  .delete(serviceController.delete);

module.exports = router;
