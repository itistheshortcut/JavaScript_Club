const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const keys = require("./config/key");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebar = require('express-handlebars');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebar({defaultLayout: 'layout'}))
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// CONNECT MONGOOSE
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch(err => console.log(err));  

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

