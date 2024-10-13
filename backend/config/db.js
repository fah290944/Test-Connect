const mysql2 = require('mysql2');

const connectAPI = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'beconnect'
});

module.exports = connectAPI;