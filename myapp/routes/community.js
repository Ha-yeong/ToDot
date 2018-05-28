module.exports = function(app)
{
  app.get('/community', function(req, res){
    res.render('community.ejs');
  });
};
