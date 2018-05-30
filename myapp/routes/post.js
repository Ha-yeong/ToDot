module.exports = function(app)
{
  var conn = require('../config/db')();
  var moment = require('moment');

  app.get('/newpost', function(req, res){
    res.render('newpost.ejs');
  });

  app.post('/newpost', function(req, res){
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

  app.get('/welcome', function(req, res){
    if(req.user && req.user.username) {
      var sql = 'SELECT postId, title, date FROM posts WHERE authorId=?';
      var authorId = req.user.id;
      conn.query(sql, [authorId], function(err, posts, fields) {
        if (err) {
          console.log(err);
        } else {
          res.render('mypage.ejs', {posts:posts});
        }
      });
    } else {
      res.render('index.ejs');
    }
  });

  app.get('/post/:id', function(req, res){
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
            res.render('viewpost.ejs', {post:post[0]});
          }
        });
      }
    });
  });

  app.get('/post/:id/edit', function(req, res){
    var sql = 'SELECT * FROM posts WHERE postId=?';
    var postId = req.params.id;
    conn.query(sql, [postId], function(err, post, fields) {
      if (postId) {
        res.render('editpost.ejs', {post:post[0]});
      } else {
        console.log('There is no ID');
        res.status(500).send('Internal Server Error');
      }
    });
  });

  app.post(['/post/:id/edit'], function(req, res){
    var title = req.body.title;
    var content = req.body.content;
    if (req.body.share) share = 1;
    else share = 0;
    var postId = req.params.id;
    var sql = 'UPDATE posts SET title=?, content=?, share=? WHERE postId=?';
    conn.query(sql, [title, content, share, postId], function(err, result, fields) {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.redirect('/post/'+postId);
      }
    });
  });

  app.get(['/post/:id/delete'], function(req, res){
    var sql = 'DELETE FROM posts WHERE postId=?';
    var postId = req.params.id;
    conn.query(sql, [postId], function(err){
      if(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.redirect('/welcome');
      }
    });
  });

};
