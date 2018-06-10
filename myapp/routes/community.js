module.exports = function(app)
{
  var conn = require('../config/db')();
  var moment = require('moment');

  app.get('/community', function(req, res){
    if(req.user && req.user.username) {
      var sql = 'SELECT postId, title, date FROM posts WHERE share=1';
      conn.query(sql, function(err, posts, fields) {
        if (err) {
          console.log(err);
        } else {
          res.render('community.ejs', {posts:posts});
        }
      });
    }
  });

  app.get('/community/:id', function(req, res){
    var postId = req.params.id;
    if (postId) {
      var sql = 'SELECT * FROM posts WHERE postId=?';
      conn.query(sql, [postId], function(err, post, fields) {
        if (err) {
          console.log(err);
        } else {
          res.render('communitypost.ejs', {post:post[0]});
        }
      });
    }
  });
///////////수정
  app.post('/sendmessage', function(req, res){
    var message = req.body.message;
    var authorId = req.user.id;


    var date = moment().format();
    res.send(message + " " + authorId + " " + date);
    // var sql = 'INSERT INTO posts (authorId, date, title, share, content) VALUES(?, ?, ?, ?, ?)';
    // conn.query(sql, [authorId, date, title, share, content], function(err, results){
    //   if(err){
    //     console.log(err);
    //     res.status(500);
    //   } else {
    //     res.redirect('/mypage');
    //   }
    // });
  });
};
