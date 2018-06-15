module.exports = function(app)
{
  var conn = require('../config/db')();
  var moment = require('moment');

  app.get('/message', function(req, res){
    if(req.user && req.user.username) {
      var sql = 'SELECT * FROM messages WHERE receiverId=?';
      var receiverId = req.user.id;
      conn.query(sql, [receiverId], function(err, messages, fields) {
        if (err) {
          console.log(err);
        } else {
            res.render('message.ejs', {messages:messages});
        }
      });
    } else {
      res.render('index.ejs');
    }
  });

  app.get('/message_sent', function(req, res){
    if(req.user && req.user.username) {
      var sql = 'SELECT * FROM messages WHERE senderId=?';
      var senderId = req.user.id;
      conn.query(sql, [senderId], function(err, messages, fields) {
        if (err) {
          console.log(err);
        } else {
          res.render('message.ejs', {messages:messages});
        }
      });
    } else {
      res.render('index.ejs');
    }
  });

  app.get('/block/:id', function(req, res){
    var id = req.params.id;
    var blockSql = 'SELECT block FROM users WHERE id=?';
    var block;
    conn.query(blockSql, [id], function(err, result){
      block = result[0].block;
      var sql = 'UPDATE users SET block=? WHERE id=?';
      block = block + 1;
      conn.query(sql, [block, id], function(err){
        if(err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.redirect('/message');
        }
      });
    });
  });
};
