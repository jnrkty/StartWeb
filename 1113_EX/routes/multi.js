var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:number1/:number2', function(req, res, next) {
	
	var number1 = req.params.number1;
	var number2 = req.params.number2;
	var result = parseInt(number1) * parseInt(number2);
	
	res.render('index', { title: 'Express', result : result });
});


module.exports = router;
