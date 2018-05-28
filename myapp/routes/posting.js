module.exports = function(app)
{
  var conn = require('../config/db')();
  var moment = require('moment');

  app.get('/posting', function(req, res){
    res.render('newpost.ejs');
  });
  app.post('/posting', function(req, res){
    var title = req.body.title;
    var content = req.body.content;
    var authorId = req.user.id;

    var date = moment().format();
    console.log('진용이바보'+date);
    var sql = 'INSERT INTO posts (authorId, date, title, content) VALUES(?, ?, ?, ?)';
    conn.query(sql, [authorId, date, title, content], function(err, results){
      if(err){
        console.log(err);
        res.status(500);
      } else {
        res.redirect('/welcome');
      }
    });
  });
};
