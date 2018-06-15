module.exports = function(app)
{
  var conn = require('../config/db')();
  var moment = require('moment');

  app.get('/message', function(req, res){
    if(req.user && req.user.username) {
      var sql = 'SELECT DISTINCT posts.postId, posts.title, posts.content, posts.date FROM posts JOIN messages ON posts.postId = messages.postId WHERE receiverId=?';
      var receiverId = req.user.id;
      conn.query(sql, [receiverId], function(err, posts, fields) {
        if (err) {
          console.log(err);
        } else {
          var sql = 'SELECT * FROM messages WHERE receiverId=?';
          var receiverId = req.user.id;
          conn.query(sql, [receiverId], function(err, messages, fields) {
            res.render('message.ejs', {posts:posts, messages:messages});
          });
        }
      });
    } else {
      res.render('index.ejs');
    }
  });

  app.get('/message_sent', function(req, res){
    if(req.user && req.user.username) {
      var sql = 'SELECT DISTINCT posts.postId, posts.title, posts.content, posts.date FROM posts JOIN messages ON posts.postId = messages.postId WHERE senderId=?';
      var senderId = req.user.id;
      conn.query(sql, [senderId], function(err, posts, fields) {
        if (err) {
          console.log(err);
        } else {
          res.render('message.ejs', {posts:posts});
        }
      });
    } else {
      res.render('index.ejs');
    }
  });
};
