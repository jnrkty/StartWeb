var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
	host : "127.0.0.1",
  port : 3306,
  user : "root",
  password : "0309",
  database : "board",
  connectionLimit : 20,
  waitForConnection : false
 
})


router.get('/:number', function(req, res, next){
	var number = req.params.number;
	pool.getConnection(function(err, conn){
		if(err){
			conn.release();
			throw err;
		}
		
		var sql = "SELECT * FROM b_info WHERE Board_seq="+number+";";

		conn.query(sql, function(err, result){
			if(err){
				conn.release();
				throw err;
			}
			res.render('update.ejs', {send_data : result});

		});
		

	});
	

});

router.post('/:number', function(req, res, next){

	var number = req.params.number;
	pool.getConnection(function(err, conn){
		if(err){
			conn.release();
			throw err;
		}
		
		var sql = "UPDATE b_info SET Title = '" +title+ "'WHERE Board_seq" + number + ;";
		conn.query(sql, function(err, result){
			if(err){
				conn.release();
				throw err;
			}
			res.redirect("http://127.0.0.1:3000");

		});
		
	});
	
});

module.exports = router;