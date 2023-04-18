var mysql= require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  database: 'bankaccount',
  password: 'thien226',
  dateStrings: true
})
  
console.log("Creating connection pool...")
module.exports = pool;