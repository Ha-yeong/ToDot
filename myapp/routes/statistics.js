module.exports = function(app)
{

  var conn = require('../config/db')();

  app.get('/statistics', function(req, res){
    var sql = 'SELECT * FROM posts WHERE authorId=?';
    var authorId = req.user.id;
    conn.query(sql, [authorId], function(err, posts, fields) {
      if (err) {
        console.log(err);
      } else {
        var arrdate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var arremoji = [0, 0, 0, 0, 0, 0];
        for (var i = 0; i < posts.length; i++) {
          var tempdate = posts[i].date.substr(11,2);
          tempdate = parseInt(tempdate);
          arrdate[tempdate]++;
          if (posts[i].emoji) {
            arremoji[posts[i].emoji]++;
          }
        }


        res.render('statistics.ejs', {usetime:arrdate, useemoji:arremoji});
      }
    });
  });


};
