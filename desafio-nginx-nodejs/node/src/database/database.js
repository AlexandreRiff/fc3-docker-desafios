import mysql from "mysql2/promise";
import db from "../config/db.js";

const pool = mysql.createPool({
  host: db.host,
  port: db.port,
  database: db.database,
  user: db.user,
  password: db.password,
});

export default pool;
