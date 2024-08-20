import { createPool } from "mysql2";
import "dotenv/config";

let connection = createPool({
    host: process.env.hostdb,
    user: process.env.user,
    password: process.env.password,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit:20,
})
connection.on("connection",(pool) => {
if (!pool)
    throw new Error(
    "Unable to connect to the database, please try again later");

});
export {connection}