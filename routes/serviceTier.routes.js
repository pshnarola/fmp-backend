const express = require('express');
const serviceTierController = require('../controllers/serviceTier.controller');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(serviceTierController.getTiersByServiceId)
  .post(serviceTierController.create)
  .patch(serviceTierController.update)
  .delete(serviceTierController.delete);

module.exports = router;
