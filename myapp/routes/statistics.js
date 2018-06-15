module.exports = function(app)
{
  var conn = require('../config/db')();

  // 글의 통계를 분석하기위해 db에서 작성한 post에 대한 정보를 받아오고
  // 형식에 맞게 변형한 후 statistics.ejs로 넘김
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
