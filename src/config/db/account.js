var mysql= require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  port:3306,
  user: 'root',
  database: 'account',
  password: 'thien226'
})
  
console.log("Creating connection pool...")
module.exports = pool;