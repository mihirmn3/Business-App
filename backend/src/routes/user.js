var express = require('express');
var UserController = require('../controllers/userController.js');

var router = express.Router();

/* GET users listing. */
router.post('/create', UserController.createUser);
router.get('/all', UserController.getAllUsers);
module.exports = router;
