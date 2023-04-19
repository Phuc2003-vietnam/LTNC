var mysql= require('mysql2/promise');

const pool = mysql.createPool({
  host: '34.92.30.187',
  port: 3306,
  user: 'phuc',
  database: 'account',
  password: '123',
})
  
console.log("Creating connection pool...")
module.exports = pool;