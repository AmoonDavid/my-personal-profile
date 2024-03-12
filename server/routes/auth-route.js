const express = require("express");
const router = express.Router();
const authControllers = require('../controllers/auth-controller');

// router.get('/', (req, res) => {
//   res.status(200).send('Register Page');
// });

router.route('/').get(authControllers.home);

router.route('/login').post(authControllers.login);

router.route('/signup').post(authControllers.signup);

module.exports = router;