var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index', {message: 'Hello World'});
});

app.listen(8080, () => {
    console.log('Express log listening on port 8080');
});
