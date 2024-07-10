var express = require('express');
var ProductController = require('../controllers/productController.js');

var router = express.Router();

router.post('/create', ProductController.createProduct);
router.get('/all', ProductController.getAllProducts);
module.exports = router;
