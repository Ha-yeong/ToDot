module.exports = function() {
  var mysql = require('mysql');
  var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'anwjr0102',
    database : 'todot'
  });
  conn.connect();
  return conn;
};
