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
        successRedirect: '/welcome',
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
              res.redirect('/welcome');
            });
          });
        }
      });
    });
  });
    
  route.get('/writepage', function(req, res){
    res.render('writepage.ejs');
  });
    
  route.post('/writepage', function(req, res){
    var title = req.body.title;
    var content = req.body.content;
    var authorId = req.user.id;
    if (req.body.share) share = 1;
    else share = 0;
    var date = moment().format();
    var sql = 'INSERT INTO posts (authorId, date, title, share, content) VALUES(?, ?, ?, ?, ?)';
    conn.query(sql, [authorId, date, title, share, content], function(err, results){
      if(err){
        console.log(err);
        res.status(500);
      } else {
        res.redirect('/welcome');
      }
    });
  });

  route.get('/logout', function(req, res){
    req.logout();
    req.session.save(function(){
      res.redirect('/welcome');
    });
  });

  return route;
};
