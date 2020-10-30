const mysql = require("mysql");
const inquirer = require("inquirer");

function main() {
        inquirer.prompt([
            {
                type: "list",
                name: "list",
                message: "What would you like to do?",
                choices: ["Add Employee", "Add Employee Role", "Add Department", "View Employee", "View Employee Role", "View Department", "Update Employee", "Update Employee Manager", "View Employee Manager", "Delete Employee", "Delete Employee Role", "Delete Department", "View Department Budget", "End"]
            }
        ]).then(answers => {
            if (answers.list === "View Employee") {
                viewEmp();
            }
            else if (answers.list === "View Employee Role") {
                viewRole();
            }
            else if (answers.list === "View Department") {
                viewDept();
            }
            else if (answers.list === "Add Employee") {
                addEmp();
            }
            else if (answers.list === "Add Employee Role") {
                addRole();
            }
            else if (answers.list === "Add Department") {
                addDept();
            }
            else if (answers.list === "Update Employee") {
                updateEmployee();
            }
            else if (answers.list === "Update Employee Manager") {
                updateEmpManager();
            }
            else if (answers.list === "View Employee Manager") {
                viewEmpManager();
            }
            else if (answers.list === "Delete Employee") {
                deleteEmp();
            }
            else if (answers.list === "Delete Employee Role") {
                deleteRole();
            }
            else if (answers.list === "Delete Department") {
                deleteDept();
            }
            else if (answers.list === "View Department Budget") {
                viewDeptBudget();
            }
            else if (answers.list === "End") {
                connection.end();
            }
        })
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
    connection.query("SELECT first_name, last_name, department.name FROM employee LEFT JOIN emp_role ON employee.role_id = emp_role.id LEFT JOIN department ON emp_role.department_id = department.id;", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
    //what if two employees have the same dept id?


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