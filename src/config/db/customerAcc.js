var mysql= require('mysql2/promise');

const pool = mysql.createPool({
  host: '34.92.30.187',
  user: 'phuc',
  database: 'bankAccount',
  password: '123',
  port:3306,
  dateStrings: true
})
  
console.log("Creating connection pool...")
module.exports = pool;