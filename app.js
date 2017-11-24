var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config =  require('./config/config')
const { sequelize } = require('./models');
const cors = require('cors')
var fs = require('fs');



//Routes
var index = require('./routes/index');
var user = require('./routes/user');
var camion = require('./routes/camion');
var chofer = require('./routes/chofer');
var comentario = require('./routes/comentario');
var parada = require('./routes/parada');
var ruta = require('./routes/ruta');
var trayecto = require('./routes/trayecto');
var login =require('./routes/login');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// --- uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// log file
var accessLogStream = fs.createWriteStream(__dirname + '/access.log',{flags: 'a'});
app.use(logger('combined', {stream: accessLogStream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.use('/', index);
app.use('/user', user);
app.use('/camion', camion);
app.use('/chofer', chofer);
app.use('/comentario', comentario);
app.use('/parada', parada);
app.use('/ruta', ruta);
app.use('/trayecto', trayecto);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

sequelize.sync()
.then(() => {
})

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
