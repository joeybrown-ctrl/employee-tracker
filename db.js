const mysql = require("mysql");
const inquirer = require("inquirer");

function main() {
    inquirer.prompt([
        {
            type: "list",
            name: "list",
            message: "What would you like to do?",
            choices: ["Add Employee", "Add Employee Role", "Add Department", "View Employees", "View Employee Role", "View Departments", "Update Employee", "Update Employee Manager", "View Employee Manager", "Delete Employee", "Delete Employee Role", "Delete Department", "View Department Budget", "Exit"]
        }
    ]).then(answers => {
        if (answers.list === "View Employees") {
            viewEmp();
        }
        else if (answers.list === "View Employee Role") {
            viewRole();
        }
        else if (answers.list === "View Departments") {
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
        else if (answers.list === "Update Employee Role") {
            updateEmpRole();
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
        else if (answers.list === "Exit") {
            connection.end();
        }
    })
}


//addPrompt -- insert

function addDept() {
    inquirer
        .prompt([
            {
                name: "addDepartment",
                type: "confirm",
                message: "Would you like to add a department?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO employee ?", [addDepartment], function (err, res) {
                if (err) throw err;
                console.table(res);
                main();
            });

        });
}

function addRole() {
    inquirer
        .prompt([
            {
                name: "addEmpRole",
                type: "confirm",
                message: "Would you like to add an employee's role?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO employee ?", [addEmpRole], function (err, res) {
                if (err) throw err;
                console.table(res);
                main();
            });

        });

}

function addEmp() {
    inquirer
        .prompt([
            {
                name: "addEmployee",
                type: "confirm",
                message: "Would you like to add an employee?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO employee ?", [addEmployee], function (err, res) {
                if (err) throw err;
                console.table(res);
                main();
            });

        });

}

///////////////////////
//create readPrompt function -- select

function viewDept() {
    connection.query("SELECT first_name, last_name, department.name FROM employee LEFT JOIN emp_role ON employee.role_id = emp_role.id LEFT JOIN department ON emp_role.department_id = department.id;", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    })
    //what if two employees have the same dept id?


}

function viewRole() {
    connection.query("SELECT first_name, last_name, role_id, manager_id, emp_role.title FROM employee LEFT JOIN emp_role ON employee.role_id = emp_role.id;", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    })

}

function viewEmp() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    })

}

///////////////////////
//updatePrompt function  -- update

function updateEmpRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "updateRole",
            message: "What is the employee's role title?"
        },
        {
            type: "input",
            name: "updateSalary",
            message: "What is the employee's salary for this role?"
        },
        {
            type: "input",
            name: "updateDeptId",
            message: "What is the department ID?"
        }
    ]).then(answers => {
        connection.query("UPDATE roles SET ? WHERE",
            {
                updateRole: answers.updateRole,
                updateSalary: answers.updateSalary,
                updateDeptId: answers.updateDeptId
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "Employee updated!\n");
                main();
        });
    });

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
    inquirer.prompt([
        {
            type: "number",
            name: "id",
            message: "Enter department ID"
        }
    ]).then(answers => {
        connection.query("DELETE FROM department WHERE ?", {
                id: answers.id
        },
        function (err, res){
            if (err) throw err;
            console.log(res.affectedRows + "Deleted department!\n");
            main();
        });
    });

}

function deleteRole() {
    inquirer.prompt([
        {
            type: "number",
            name: "id",
            message: "Enter role ID"
        }
    ]).then(answers => {
        connection.query("DELETE FROM emp_role WHERE ?", {
                id: answers.id
        },
        function (err, res){
            if (err) throw err;
            console.log(res.affectedRows + "Deleted role!\n");
            main();
        });
    });

}

function deleteEmp() {
    inquirer.prompt([
        {
            type: "number",
            name: "id",
            message: "Enter employee ID"
        }
    ]).then(answers => {
        connection.query("DELETE FROM employee WHERE ?", {
                id: answers.id
        },
        function (err, res){
            if (err) throw err;
            console.log(res.affectedRows + "Deleted employee!\n");
            main();
        });
    });
}

//////////////////////////

function viewDeptBudget() {
    connection.query("SELECT", function (err, res) {
        if (err) throw err;
        console.table(res);
    })

}