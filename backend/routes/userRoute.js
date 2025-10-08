const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const { validator } = require('../validators/userValidator');

//Register route
router.post('/api/register', validator, controller.regUser);
router.post('/api/login', validator, controller.logUser);

module.exports = router;