const express = require('express');

const router = express.Router();
const testingController = require('../controllers/testing-controller');

router.route('/').get(testingController.testing);
router.route('/testpost').post(testingController.testPost)

module.exports = router;