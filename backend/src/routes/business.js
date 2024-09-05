var express = require('express');
var BusinessController = require('../controllers/businessController.js');

var router = express.Router();

/* GET businesss listing. */
router.post('/create', BusinessController.createBusiness);
router.get('/all', BusinessController.getAllBusinesses);
module.exports = router;
