module.exports = function(passport)
{
  var bkfd2Password = require("pbkdf2-password");
  var hasher = bkfd2Password();
  var conn = require('../config/db')();
  var route = require('express').Router();

  route.get('/', function(req, res){
    res.render('index.ejs');
  });
  route.post('/',
    passport.authenticate(
      'local',
      {
        successRedirect: '/mypage',
        failureRedirect: '/',
        failureFlash: false
      }
    )
  );
  route.get('/register', function(req, res){
    res.render('register.ejs');
  });
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

  route.get('/logout', function(req, res){
    req.logout();
    req.session.save(function(){
      res.redirect('/mypage');
    });
  });

  return route;
};
