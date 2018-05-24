const http = require('http');
const port = 8080;

http.createServer(function(request, response){
  response.writeHead(200, {'Content-type': 'text/plan'});
  response.write('Hello Node World!');

  response.end( );
}).listen(port);
