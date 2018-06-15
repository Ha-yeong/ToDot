module.exports = function(app)
{
  var conn = require('../config/db')();
  var moment = require('moment');

  app.get('/writepage', function(req, res){
    res.render('writepage.ejs');
  });

  app.post('/writepage', function(req, res){
    var title = req.body.title;
    var content = req.body.content;
    var authorId = req.user.id;
    if (req.body.share) share = 1;
    else share = 0;
    var date = moment().format();
    var emoji = req.body.emoji;
    var coverId = req.body.cover;
    var sql = 'INSERT INTO posts (authorId, date, title, share, content, emoji, coverId) VALUES(?, ?, ?, ?, ?, ?, ?)';
    conn.query(sql, [authorId, date, title, share, content, emoji, coverId], function(err, results){
      if(err){
        console.log(err);
        res.status(500);
      } else {
        res.redirect('/mypage');
      }
    });
  });

  app.get('/mypage', function(req, res){
    if(req.user && req.user.username) {
      var sql = 'SELECT * FROM posts WHERE authorId=?';
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

  app.get('/edit/:id', function(req, res){
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

  app.post(['/edit/:id'], function(req, res){
    var title = req.body.title;
    var content = req.body.content;
    if (req.body.share) share = 1;
    else share = 0;
    var postId = req.params.id;
    var emoji = req.body.emoji;
    var coverId = req.body.cover;
    var sql = 'UPDATE posts SET title=?, content=?, share=?, emoji=?, coverId=? WHERE postId=?';
    conn.query(sql, [title, content, share, emoji, coverId, postId], function(err, result, fields) {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.redirect('/mypage');
      }
    });
  });

  app.get(['/delete/:id'], function(req, res){
    var sql = 'DELETE FROM posts WHERE postId=?';
    var postId = req.params.id;
    conn.query(sql, [postId], function(err){
      if(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.redirect('/mypage');
      }
    });
  });

};
