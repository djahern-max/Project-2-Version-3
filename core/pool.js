const util = require('util');
const mysql = require('mysql');
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    const pool = mysql.createPool({
        // connectionLimit: 10,
        host: 'localhost',
        port: 3306,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });


    pool.getConnection();

    module.exports = pool;

}