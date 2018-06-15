module.exports = function(app)
{
  var conn = require('../config/db')();
  var moment = require('moment');

  // db에서 공유 설정된 post 정보를 받아오고 {posts}로 community.ejs에게 전달
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

  // db에서 선택한 post 정보를 받아오고 {post}로 communitypost.ejs에게 전달
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

  // 지정한 post로 쪽지를 보냄. 쪽지 정보를 message db에 삽입
  app.post('/sendmessage/:id', function(req, res){
    var senderId = req.user.id;
    var receiverId;
    var date = moment().format();
    var postId = req.params.id;
    var msgContent = req.body.message;

    var sql = 'SELECT authorId FROM posts WHERE postId=?';
    conn.query(sql, [postId], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        receiverId = result[0].authorId.toString();
        var sql = 'INSERT INTO messages (senderId, receiverId, date, postId, msgContent) VALUES(?, ?, ?, ?, ?)';
        conn.query(sql, [senderId, receiverId, date, postId, msgContent], function(err, results){
          if(err){
            console.log(err);
            res.status(500);
          } else {
            res.redirect('/community/'+postId);
          }
        });
     }
    });
  });
};
