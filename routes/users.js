var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Response: Hello Doug');
});

router.get('/add', function(req, res, next) {
  res.send('Add Users.  Surfs Up');
});

module.exports = router;
