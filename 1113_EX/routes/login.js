var express = require('express');
var router = express.Router();
var mysql = require('mysql');

pool = mysql.createPool(
	{
		host : "127.0.0.1",
		port : 3306,
		user : "root",
		password : "0309",
		database : "board",
		connectionLimit : 20,
		waitForConnection : false
	}
	);



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {title:'Express' });
});
router.post('/', function(req, res, next){
	var id = req.body.usr;
	var pwd = req.body.pwd;

		pool.getConnection(function(err,con){
			if(err){
				con.release();
				throw err;
			}
			var sql = "SELECT * FROM signup WHERE id='" +id+"';";
			console.log(sql);

			con.query(sql, function(err, result){
				if(err){
					con.release();
					throw err;
				}
				if(result.length == 0){ //길이0. 맞는게 없으면이라는 뜻
					res.render('error.ejs', {message: "아이디가 없습니다"});
					return;
				} else {
					//비밀번호 검사
					var sql_pw = "SELECT * FROM signup WHERE id='" +id+"' AND pwd='"+pwd+"';";
					console.log(sql_pw);

					con.query(sql_pw, function(err, result2){
						if(err){
							con.release();
							throw err;
						}
						if(result2.length == 0){
							res.render('error.ejs' , {message: "비밀번호가 다릅니다"});
							return;
						}
						res.render('error.ejs', {message: "만나서 반갑습니다"});
					});
				}

			});

	});

});

// if(id = ""){
// 	res.render('error.ejs', {message: "아이디가 없습니다"});
// } else {
// 	res.render('error.ejs', {message: "회원가입을 축하합니다"});
// }

// con.query(sql, function(err, result){
// 	//에러가 발생
// 	if(err){
// 	con.release();
// 	throw err;
// 	} 
// });

module.exports = router;