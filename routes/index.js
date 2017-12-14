// set up dependencies
var express = require('express');
var router = express.Router();

// setup routing
router.get('/', function(req, res, next) {
  res.render('home', {})
})

router.get('/products', function(req, res, next) {
  res.render('products', {})
})

// export the module
module.exports = router;
