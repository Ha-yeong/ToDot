module.exports = function(app)
{
  var conn = require('../config/db')();

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
    var sql = 'SELECT postId, title FROM posts WHERE authorId=?';
    var authorId = req.user.id;
    conn.query(sql, [authorId], function(err, posts, fields) {
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
  });
};
