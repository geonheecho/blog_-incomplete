var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123123123",
  database: "blog",
});

connection.connect();



module.exports = connection;
