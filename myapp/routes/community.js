module.exports = function(app)
{
  var conn = require('../config/db')();
  var moment = require('moment');
  // const language = require('@google-cloud/language');
  // const client = new language.LanguageServiceClient();

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

  app.post('/sendmessage/:id', function(req, res){
    var senderId = req.user.id;
    var receiverId;
    var date = moment().format();
    var postId = req.params.id;
    var content = req.body.message;

    // const text = 'Hello, world!';
    // const document = {
    //   content: text,
    //   type: 'PLAIN_TEXT',
    // };
    //
    // client
    //   .analyzeSentiment({document: document})
    //   .then(results => {
    //     const sentiment = results[0].documentSentiment;
    //
    //     console.log(`Text: ${text}`);
    //     console.log(`Sentiment score: ${sentiment.score}`);
    //     console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    //   })
    //   .catch(err => {
    //     console.error('ERROR:', err);
    //   });
    //   res.send("하이");
    var sql = 'SELECT authorId FROM posts WHERE postId=?';
    conn.query(sql, [postId], function(err, result) {
      if (err) {
        console.log(err);
      } else {
        receiverId = result[0];
        res.send(receiverId);
        var sql = 'INSERT INTO messages (senderId, receiverId, date, postId, content) VALUES(?, ?, ?, ?, ?)';
        conn.query(sql, [senderId, receiverId, date, postId, content], function(err, results){
          if(err){
            console.log(err);
            res.status(500);
          } else {
            res.redirect('/community/:id');
          }
        });
     }
    });
  });
};
