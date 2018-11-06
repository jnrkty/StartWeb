var express = require('express');
var router = express.Router();
//[mysql연동_1]mysql 모듈을 로드한다
mysql = require('mysql');

//[mysql연동_2] 데이터베이스 연결 pool을 만든다
pool = mysql.createPool({
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
 
});


/* GET home page. */
router.get('/', function(req, res, next) {
  //글번호 제목 이름 조회수 추천수 카테고리
  /**
  * [mysql연동_4] 데이터베이스 풀에서 데이터베이스 서버와의 연결을 가져온다 
  * getConnection()함수를 활용한다
  * getConnection()함수는 매개변수로 콜백함수를 받는다
  * 콜백함수는 작업이 완료된 후 수행하는 함수를 말한다
  * 따라서 데이터베이스 서버와의 연결을 수행하고 콜백함수가 실행된다
  */
  pool.getConnection(function(err, connection){
  /**
   * [mysql연동_5] 콜백함수에서 sql문을 작성한다
   * 콜백함수의 매개변수)
   * err : 데이터베이스 연결 도중에 오류가 발생했을 경우, 에러내용이 저장
   * connection : 데이터베이스 연결 후 sql문을 실행하기 위한 객체
   */
    if(err){
    //[mysql연동_6] 데이터베이스 연결중 오류가 발생했다면 현재의 연결을 해제한다
    connection.release();
    throw err; //오류내용을 콘솔화면에 출력하고 프로그램을 종료한다
    }
    //[mysql연동_7] 데이터베이스 연결 후 sql문을 실행한다
    //connection.query()함수를 활용하여 sql문을 실행한다
    //connection.query()함수의 매개변수는 sql문을 작성한 문자열과,
    //sql문을 실행후 결과물을 처리하기 위한 콜백함수이다
    sql = "SELECT * FROM b_info WHERE Enable = 1;";
    connection.query(sql, function(err, rows){
      /**
       * [mysql연동_8] sql문을 실행 후에 처리를 위한 콜백함수
       * err : sql문의 문법오류 및 기타 오류 등으로 sql문이 실행되지 않을경우,
       *        에러내용들이 저장되는 변수
       * rows : sql문 실행된 결과물
       */
      if(err){
        connection.release();
        throw err;
      }
      for(i=0; i<rows.length; i++){
        //i : 0~데이터의 갯수만큼 반복
        if(rows[i].Secret == 0){
          rows[i].Secret = "일반글";
        } else {
          rows[i].Secret = "비밀글";
        }
        //작성 시간을 출력
        date = rows[i].Updated_at;
        time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        rows[i].Updated_at = time;
      }
      console.log(rows);
      res.render('index', { send_data : rows });
    })
  });
  my_data = [{
    wid: "44",
    title: "반갑습니다",
    name: "홍길동",
    view_count: "10000",
    best_count: "5000",
    cate: "일반"
    },
    {
    wid: "45",
    title: "등급업 해주세요",
    name: "이몽룡",
    view_count: "10000",
    best_count: "5000",
    cate: "일반"
    },
    {
    wid: "46",
    title: "탈퇴 합니다",
    name: "이순신",
    view_count: "10000",
    best_count: "5000",
    cate: "일반"  
    }];

  // res.render('index', { send_data : my_data });
});

module.exports = router;
