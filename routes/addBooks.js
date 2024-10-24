// create a form to add books

var express = require('express');
var router = express.Router();

// req and res need to be in this order...
router.get('/', function(req, res) {
    res.render('addBooks');
  });

router.post('/save', function(req, res) {
    console.log(req.body);
 });
module.exports = router;