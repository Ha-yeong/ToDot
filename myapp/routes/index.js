module.exports = function(passport)
{
  var bkfd2Password = require("pbkdf2-password");
  var hasher = bkfd2Password();
  var conn = require('../config/db')();
  var route = require('express').Router();

  // 메인 페이지. index.ejs를 화면에 띄움
  route.get('/', function(req, res){
    res.render('index.ejs');
  });

  // 메인 페이지에서 '로그인' 버튼을 클릭했을 때
  route.post('/',
    passport.authenticate(
      'local',
      {
        successRedirect: '/mypage', // 성공적으로 로그인 될 경우
        failureRedirect: '/',       // 로그인에 실패할 경우
        failureFlash: false
      }
    )
  );

  // 회원가입 페이지. register.ejs를 화면에 띄움
  route.get('/register', function(req, res){
    res.render('register.ejs');
  });

  // 회원가입 페이지에서 '제출' 버튼을 클릭했을 때
  // 비밀번호를 암호화하여 user db에 삽입
  route.post('/register', function(req, res){
    hasher({password:req.body.password}, function(err, pass, salt, hash){
      var user = {
        authId:'local:'+req.body.username,
        username:req.body.username,
        password:hash,
        salt:salt
      };
      var sql = 'INSERT INTO users SET ?';
      conn.query(sql, user, function(err, results){
        if(err){
          console.log(err);
          res.status(500);
        } else {
          req.login(user, function(err){
            req.session.save(function(){
              res.redirect('/mypage');
            });
          });
        }
      });
    });
  });

  // 로그아웃
  route.get('/logout', function(req, res){
    req.logout();
    req.session.save(function(){
      res.redirect('/mypage');
    });
  });

  return route;
};
