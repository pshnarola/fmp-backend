const express = require('express');
const serviceTierController = require('../controllers/serviceTier.controller');

const router = express.Router();

router.route('/').post(serviceTierController.all);

// .post(serviceTierController.create)
// .patch(serviceTierController.update)
// .delete(serviceTierController.delete);

module.exports = router;
