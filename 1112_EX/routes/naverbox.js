var express = require('express');
var router = express.Router();

// 가장 기본형
router.get('/', function(req, res, next) {
  res.render('naverbox', { title: 'Express' });
});

// 접속한 주소 정보를 다른 기능 파일(node.js 파일)에게 전달
module.exports = router;
