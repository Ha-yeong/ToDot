module.exports = function(app)
{
  app.get('/welcome', function(req, res){
    if(req.user && req.user.username) {
      res.render('mypage.ejs');
    } else {
      res.render('index.ejs');
    }
  });
};
