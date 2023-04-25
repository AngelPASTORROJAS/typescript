// get the client
import mysql from 'mysql2';

// create the connection to database
export const connection = mysql.createConnection({
  host: 'host',
  user: 'user',
  database: 'database',
  multipleStatements: true
});

