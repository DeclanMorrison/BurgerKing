const mysql = require('mysql');
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SuperSecretPasswordHere',
    database: 'burgers_db'
  });
};

connection.connect(err => {
  err ? 
  console.error(`error connecting: ${err.stack}`) :
  console.log(`Connected as id ${connection.threadId}`)
});

module.exports = connection;