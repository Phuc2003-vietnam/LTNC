var mysql= require('mysql2/promise');

const pool = mysql.createPool({
  host: '192.168.1.3',
  user: 'sManager',
  database: 'bankaccount',
  password: 'thien226',
  dateStrings: true
})
  
console.log("Creating connection pool...")
module.exports = pool;