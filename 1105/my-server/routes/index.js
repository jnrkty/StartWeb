var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  now = new Date();
  print_date = now.getFullYear() + "/" + (now.getMonth()+1) + "/" + now.getDate();
  //print_date -> 2018/11/5 
  //naverbox.ejs 파일을 웹브라우저에 응답한다
  //{title : "express"} -> naverbox.ejs에 표시할 데이터 값(오브젝트)를 의미한다
  res.render('naverbox.ejs', { date : print_date });
});

module.exports = router;
