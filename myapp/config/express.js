module.exports = function() {
  var express = require('express');
  var session = require('express-session');
  var MySQLStore = require('express-mysql-session')(session);
  var bodyParser = require('body-parser');
  var app = express();

  app.set('views', './views');
  app.set('view engine', 'ejs');  // 템플릿 엔진을 ejs로 설정
  app.engine('html', require('ejs').renderFile);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: '1234DSFs@adf1234!@#$asd',
    resave: false,
    saveUninitialized: true,
    store:new MySQLStore({
      host:'localhost',
      user:'root',
      password:'anwjr0102',
      database:'todot'
    })
  }));
  app.use(express.static('./public'));

  return app;
};
