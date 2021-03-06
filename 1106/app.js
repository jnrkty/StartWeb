var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var delRouter = require('./routes/del.js');
var updateRouter = require('./routes/update.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var readRouter = require('./routes/1106-read.js'); //routes폴더에 1106-read.js파일을 읽어오는 코드
var writeRouter = require('./routes/1112-write.js'); //routes폴더에 1112-write.js파일을 읽어오는 코드

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter); //127.0.0.1:3000/나머지주소
app.use('/1106-read', readRouter);
app.use('/1112-write', writeRouter); //사용자가 127.0.0.1:3000/1112-write로 접속할때 1112-write.js를 실핸한다
app.use('/del', delRouter);
app.use('/update', updateRouter);

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
