var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

router.post('/', function(req, res, next) {
  res.render('index', { message: 'Form submitted successfully' });
});

module.exports = router;
