var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');

const app = express();


//configuração da view engine e pasta de views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//configuração para trabalhar com fomrs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//uso de logger (mensagens de log no terminal)
app.use(logger('dev'));


//trabalhar com form, enviar o form em forma de json
//facilitando processos post, req e body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());

//configurar pasta public para dar acesso ao usuário do site
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
