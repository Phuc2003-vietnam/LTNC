var mysql= require('mysql2/promise');

const pool = mysql.createPool({
  host: '192.168.1.3',
  port:3306,
  user: 'sManager',
  database: 'account',
  password: 'thien226'
})
  
console.log("Creating connection pool...")
module.exports = pool;