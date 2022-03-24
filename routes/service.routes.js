const express = require('express');

const serviceController = require('../controllers/service.controller');

const router = express.Router();

router.use('/:slug/service-tiers', require('../routes/serviceTier.routes'));

router
  .route('/')
  .get(serviceController.getAll)
  .post(serviceController.create)
  .patch(serviceController.update)
  .delete(serviceController.delete);

module.exports = router;
