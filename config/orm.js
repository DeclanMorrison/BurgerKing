const connection = require('../config/connection');

const ORM = {
  all: callback => {
    const query = `SELECT * FROM burgers;`
    connection.query(query, (err, res) => {
      if (err) {throw err};
      callback(res);
    })
  },
  create: (burgerName, callback) => {
    const query = `INSERT INTO burgers SET ?`
    connection.query(query,{burger_name : burgerName, devoured : false}, (err,res) => {
      if (err) {throw err};
      callback(res);
    })
  },
  update: (id, callback) => {
    const query = `UPDATE burgers SET devoured=true WHERE id=${id};`
    connection.query(query, (err, res) => {
      if (err) {throw err};
      callback(res);
    })
  },
  delete: (id, callback) => {
    const query = `DELETE FROM burgers WHERE id=${id};`;
    connection.query(query, (err, res) => {
      if (err) {throw err};
      callback(res);
    });
  }
};

module.exports = ORM;