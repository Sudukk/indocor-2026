import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",          // default XAMPP tidak pakai password
    database: "indocor_2026",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool;
