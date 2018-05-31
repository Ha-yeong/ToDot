module.exports = function() {
  var mysql = require('mysql');
  var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : 4501,
    password : 'gkdl28$*',
    database : 'todot'
  });
  conn.connect();
  return conn;
};
