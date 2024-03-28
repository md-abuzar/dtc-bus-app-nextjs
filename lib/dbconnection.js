import mysql from 'mysql2/promise';

const dbconnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dtcbus',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default dbconnection;