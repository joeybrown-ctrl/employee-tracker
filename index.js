const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Claptonrules77!!",
    database: "employee_db"
});

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("successfully connected to employee_db")
// });