const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Claptonrules77!!",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

function main() {

}

function addDept() {

}

function addRole() {

}

function addEmp() {

}

///////////////////////

function viewDept() {

}

function viewRole() {

}

function viewEmp() {

}

///////////////////////

function updateEmpRole() {

}

function updateEmpManager() {

}

function viewEmpManager() {

}

//////////////////////////

function deleteDept() {

}

function deleteRole() {

}

function deleteEmp(){

}

//////////////////////////

function viewDeptBudget(){
    
}