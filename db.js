const mysql = require("mysql");
const inquirer = require("inquirer");

function main() {

}

//addPrompt -- insert

function addDept() {
    connection.query("INSERT INTO", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

function addRole() {
    connection.query("INSERT INTO", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

function addEmp() {
    connection.query("INSERT INTO", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

///////////////////////
//create readPrompt function -- select

function viewDept() {
    connection.query("SELECT first_name, last_name, department.name FROM employee LEFT JOIN emp_role ON employee.role_id = emp_role.idLEFT JOIN department ON emp_role.department_id = department.id;", function (err, res) {
        if (err) throw err;
        console.table(res);
    })


}

function viewRole() {
    connection.query("SELECT * FROM", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

function viewEmp() {
    connection.query("SELECT", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

///////////////////////
//updatePrompt function  -- update

function updateEmpRole() {
    connection.query("SELECT", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

function updateEmpManager() {
    connection.query("SELECT", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

function viewEmpManager() {
    connection.query("SELECT", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

//////////////////////////
//deletePrompt function -- delete

function deleteDept() {
    connection.query("DELETE", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

function deleteRole() {
    connection.query("DELETE",function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}

function deleteEmp() {
    connection.query("DELETE", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
}

//////////////////////////

function viewDeptBudget() {
    connection.query("SELECT", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}