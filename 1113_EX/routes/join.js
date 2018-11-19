var express = require('express');
var router = express.Router();
//[mysql연동_1] mysql 모듈을 로드한다
var mysql = require('mysql');

//[mysql연동_2] 데이터베이스 연결 pool을 만든다
pool = mysql.createPool(
	{
  /**
   * [mysql연동_3] 데이터베이스 연결 pool을 만들기 위한 정보들
   * host : 데이터베이스 서버의 주소(자기 컴퓨터라면 127.0.0.1 혹은 localhost)
   * port : 데이터베이스 서비스를 위한 데이터가 입출력되는 통로의 번호. 기본 3306
   * user : 데이터베이스 서버에 접속하기 위한 아이디(root로 접속하지 않는다)
   * password : 데이터베이스 서버에 접속하기 위한 비밀번호
   * database : 자료를 담고있는 테이블을 모아놓은 데이터베이스 이름
   * connectionLimit : 데이터베이스 연결 개수 제한값
   * waitForConnection : 데이터베이스 연결을 기다리는 것을 허용하는지 여부
   */
  host : "127.0.0.1",
  port : 3306,
  user : "root",
  password : "0309",
  database : "board",
  connectionLimit : 20,
  waitForConnection : false
}
);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('join.ejs', {});
});
//주소 : http://127.0.0.1:3000/join
//회원가입 form으로부터 전달받은 값을 처리하는 기능함수
router.post('/',function(req, res, next){
	/**
	 * form 태그를 활용하여 데이터를 전달 받을 때 기능함수에서는 req 객체 안에있는 body라는 이름의 오브젝트에서 데이터를 가져올 수 있다
	 * 
	 * 참고)
	 * 주소 : req.params.데이터이름
	 * post : req.body.데이터이름
	 * 
	 * 예시) {usr : "narae", pwd:"1111", repwd:"1111", gender:"여성"}
	 * 위의 오브젝트에서 usr이라는 값 'narae'를 가져오려면 변수 = req.body.usr
	 */
	var usr = req.body.usr;
	var pwd = req.body.pwd;
	var repwd = req.body.repwd;
	var gender = req.body.gender;

	console.log(usr);
	console.log(pwd);
	console.log(repwd);
	console.log(gender);

	if(pwd != repwd){
		res.redirect('http://www.naver.com'); //비밀번호, 재확인이 틀리면 네이버 페이지로
		return;
	} else {
		res.redirect('http://127.0.0.1:3000/join'); //비밀번호, 재확인이 맞으면 다시로드
	}
	
	//[mysql연동_4] 데이터베이스 풀에서 데이터베이스 서버와의 연결을 가져온다 

	/** 
	 * [mysql연동_5] 콜백함수에서 sql문을 작성한다
	 * 	콜백 함수의 매개변수
 	 *	err : 데이터베이스 연결 도중에 오류가 발생했을 경우, 에러내용이 저장
	 *	connection : 데이터베이스 연결 후 sql문을 실행하기 위한 객체
	 */
	pool.getConnection(function(err, con){

		if(err){ //[mysql연동_6] 데이터베이스 연결중 오류가 발생했다면 현재의 연결을 해제한다
			con.release(); 
			throw err; //오류내용을 콘솔화면에 출력하고 프로그램을 종료한다
		}

		/**
		 * 데이터베이스 연결 후 sql문을 실행한다
		 * connection.query()함수를 활용하여 sql문을 실행한다
		 * connection.query()함수의 매개변수는 sql문을 작성한 문자열과,
		 * sql문을 실행후 결과물을 처리하기 위한 콜백함수이다
		 */
		
		var sql = "";
		if(gender == "여성") {
			sql += "INSERT INTO signup (id, pwd, gender) VALUES " + 
			"('"+usr+"','"+pwd+"',0);";
		} else {
			sql += "INSERT INTO signup (id, pwd, gender) VALUES " +
			"('"+usr+"','"+pwd+"',1);";
		}

		console.log(sql);

		 /** [mysql연동_7] 데이터베이스 연결 후 sql문을 실행한다
			* connection.query()함수를 활용하여 sql문을 실행한다
			* connection.query()함수의 매개변수는 sql문을 작성한 문자열과,
			* sql문을 실행후 결과물을 처리하기 위한 콜백함수이다
			*/
			con.query(sql, function(err, result){
			//에러가 발생
			if(err){
			con.release();
			throw err;
			} 
			//에러가 발생하지 않음(정상적으로 sql문을 실행한 경우)
			//처리를 완료하고(데이터베이스에 값을 저장)
			//다른 주소로 이동하고 싶은 경우에는 res.redirect('주소')함수를 쓴다
			//res.redirect('http://www.naver.com');

			});

			

	});

});

module.exports = router;
