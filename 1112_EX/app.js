var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/**
 * 순서2)
 * 서버에 특정한 주소로 접근하면 실행되는 기능 들
 * 
 * 기능들을 작성한 코드들은 routes폴더 안에 모여있다.
 * routes 폴더 안의 있는 기능 코드들을 가져오려면(import) 
 * require() 함수를 활용한다.
 * 
 * require() 함수의 매개변수는 코드를 작성한 파일의 위치 
 */
var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');
var boardRouter = require('./routes/board.js');
var naverboxRouter = require('./routes/naverbox.js');
//var timeRouter = require('./routes/time.js'); // routes폴더에서 time.js 코드 가져와서 timeRouter변수에 저장.


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 순서1)
 * app.use() 함수 부분.
 * 서버가 자신에게 접속한 것이 맞는지 확인하고 맞다면, 서브 도메인으로 제공할 웹페이지를 구분한다.
 * 
 * app.use() 함수는
 * 첫번째 매개변수로 접속하는 주소(http://127.0.0.1:3000은 생략),
 * 두번째 매개변수는 실행되는 기능 이름(기능 이름은 코드 앞부분에서 선언)
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
//app.use('/time', timeRouter); //http://127.0.0.1:3000/time에 접속. timeRouter실행.
app.use('/naverbox', naverboxRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
