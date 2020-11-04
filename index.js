//NPM packages required for this project
const mysql = require("mysql");
const inquirer = require("inquirer");

//Setting up server connectivity (I deleted my password for privacy reasons, but this will require the user's MySQL workbench password!)
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    main();
});


//Main function showing a list of options for the user to choose from
function main() {
    inquirer.prompt([
        {
            type: "list",
            name: "list",
            message: "What would you like to do?",
            choices: ["Add Employee", "Add Employee Role", "Add Department", "View Employees", "View Employee Role", "View Departments", "Update Employee", "Delete Employee", "Delete Employee Role", "Delete Department", "Exit"]
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
        else if (answers.list === "Update Employee") {
            updateEmpRole();
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
        else if (answers.list === "Exit") {
            connection.end();
        }
    });
};


//Functions to create new employees, roles, and departments
function addEmp() {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role_id",
                type: "number",
                message: "What is the employee's role ID?"
            },
            {
                name: "manager_id",
                type: "number",
                message: "What is the employee's manager ID?"
            },
        ])
        .then(function (answer) {
            connection.query("INSERT INTO employee SET ?", [answer], function (err) {
                if (err) throw err;
                console.log("Success!")
                main();
            });
        });
};

function addRole() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the role title?",
            },
            {
                name: "salary",
                type: "number",
                message: "What is the salary for this role?",
            },
            {
                name: "department_id",
                type: "number",
                message: "What is the department ID for this role?",
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO emp_role SET ?", [answer], function (err) {
                if (err) throw err;
                console.log("Success!")
                main();
            });
        });
};

function addDept() {
    inquirer
        .prompt([
            {
                name: "dept_name",
                type: "input",
                message: "What is the name of the department you would like to add?",
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO department SET ?", [answer], function (err) {
                if (err) throw err;
                console.log("Success!")
                main();
            });
        });
};


//Functions to view employees, roles and departments
function viewEmp() {
    connection.query("SELECT employee.first_name, employee.last_name, emp_role.title, emp_role.salary, department.dept_name, manager.first_name AS 'manager_firstname', manager.last_name AS 'manager_lastname' FROM employee LEFT JOIN emp_role ON employee.role_id = emp_role.id LEFT JOIN department ON emp_role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    });
};

function viewRole() {
    connection.query("SELECT emp_role.title, emp_role.salary, department.dept_name FROM emp_role LEFT JOIN department ON emp_role.department_id = department.id;", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    });
};

function viewDept() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        main();
    });
};


//Function to update employees by their first and last names, and role ID
function updateEmpRole() {
    connection.query("SELECT * FROM employee", function (err, res) {
        const employees = res.map(element => {
            return (
                {
                    name: element.first_name + element.last_name,
                    value: element.id
                }
            )
        })
        connection.query("SELECT * FROM employee", function (err, res1) {
            const roles = res.map(element => {
                return (
                    {
                        name: element.role_id,
                        value: element.id
                    }
                )
            })
            inquirer.prompt([
                {
                    type: "list",
                    name: "employee",
                    message: "Which employee?",
                    choices: employees
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the employee's new role ID?",
                    choices: roles
                }
            ]).then(answers => {
                connection.query("UPDATE employee SET role_id = ? WHERE id = ?",
                    [answers.employee, answers.role],
                    function (err, res) {
                        if (err) throw err;
                        console.log(res.affectedRows + "Employee updated!\n");
                        main();
                    });
            });
        });
    });
};


//Functions to delete employees, roles and departments
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
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "Deleted employee!\n");
                main();
            });
    });
};

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
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "Deleted role!\n");
                main();
            });
    });
};

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
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "Deleted department!\n");
                main();
            });
    });
};
