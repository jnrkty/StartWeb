// express 프레임워크를 활용하기 위해 express 모듈을 가져온다.
var express = require('express');
// 접속한 주소 정보를 가져온다.
var router = express.Router();

/* GET home page. */
/**
 * [기본형 기능함수] : 특정 웹페이지를 구성하여 클라이언트에게 응답하는 기능을 수행한다.
 * 
 * 예시) index.ejs(html)파일과 링크되어있는 css, js, image파일들을
 * 오브젝트형 데이터 { title : 'Express' }와 조합하여 웹문서를 만드는 기능을 수행하는 함수.
 * 
 * 주소 정보(router)에서 사용자가 서버에 접속한 주소(http://127.0.0.1:3000/board)로 접속했을 때 수행하게된다.
 * 
 * 클라이언트가 서버에게 데이터를 전달하거나 웹페이지를 요청할때는 get(), post() 함수 활용.
 * 
 * [get() 함수 매개변수]
 * 
 * [첫번째] 두번째 서브도메인의 이름 > '/'는 두번째 서브도메인 이름이 없는경우.
 * 예시) 
 * http://127.0.0.1:3000/board/time
 * 
 * 1. 도메인(http://127.0.0.1:3000)으로 웹서버가 구동되는 서버 컴퓨터를 확인한다.
 * 2. 서브도메인(/board)를 app.js 파일에서 주소와 매칭되는 기능 파일(board.js)를 읽어온다.
 * 3. 읽어온 기능파일(board.js)에서 두번째 서브도메인(/time)을 기능함수의 첫번째 매개변수와 비교한다.
 * 4. 해당하는 기능함수가 있다면 함수를 실행한다.
 * 
 * [두번째] 실행될 함수의 코드 : 실제 수행할 기능에 대해서 프로그래밍 한 코드를 넣는다.
 * 기본형에는 웹페이지를 출력하는 조합 & 응답하는 res.render() 함수가 배치되어 있다.
 * res.render() 함수의 매개변수
 * 첫번째 : 조합할 웹페이지의 파일이름(views 폴더 안에 넣은 ejs 파일(.ejs생략가능))
 * 두번째 : 웹페이지를 조합할 때 표시할 데이터
 * 
 * 
 * app.js에서는
 * app.use('/board', boardRouter); >> http://127.0.0.1:3000/board로 접속했을 때 board.js기능을 수행한다.
 */
router.get('/', function(req, res, next) {
	console.log('첫번째 기능함수');
	res.render('main', { hello: 'Express' });
});

router.get('/my', function(req, res, next) {
	console.log('두번째 기능함수');
	res.render('main', { hello: 'Express' });
});

router.get('/:number', function(req, res, next) {
	var number = req.params.number;
	var str = "숫자"
	if(number%2 ==0){
		str = str + number + "은 짝수입니다"
	} else
		str = str + number + "은 홀수입니다"
	res.render('main', { hello: str });
});






// 가장 기본형
// router.get('/', function(req, res, next) {
//   res.render('main', { title: 'Express' });
// });

/** router.get('/', function(req, res, next) {
	var print_hello = "안녕하세요";
	var print_cong = "당첨 되었습니다"
	var print_boom = "꽝 입니다"
	var now = new Date();
	var seconds = now.getSeconds();
	console.log(now);
	
	if(seconds%2 == 0){
		print = print_boom;
	} else
		print = print_cong;
	

	print_hello = now + " " + print_hello + " " + print;
	

  res.render('main', { title: 'Express', hello : print_hello});
});
*/

// 접속한 주소 정보를 다른 기능 파일(node.js 파일)에게 전달
module.exports = router;

