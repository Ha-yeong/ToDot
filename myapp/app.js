var app = require('./config/express')();
var passport = require('./config/passport')(app);

var index = require('./routes/index')(passport);
app.use('/', index);
var post = require('./routes/post')(app);
var community = require('./routes/community')(app);
var message = require('./routes/message')(app);
var script_statistics = require('./routes/statistics')(app);

app.listen(9949, function(){
    console.log('Connected 9949 port!!!');
});
