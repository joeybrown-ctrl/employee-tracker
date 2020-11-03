DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
dept_name VARCHAR(30),
PRIMARY KEY(id)
);

CREATE TABLE emp_role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
PRIMARY KEY(id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
PRIMARY KEY(id)
);

SELECT employee.first_name, employee.last_name, emp_role.title, emp_role.salary, department.dept_name, manager.first_name AS manager_firstname, manager.last_name AS manager_lastname FROM employee
LEFT JOIN emp_role 
ON employee.role_id = emp_role.id
LEFT JOIN department
ON emp_role.department_id = department.id
LEFT JOIN employee manager 
ON employee.manager_id = manager.id;

SELECT emp_role.title, emp_role.salary, department.dept_name FROM emp_role
LEFT JOIN department
ON emp_role.department_id = department.id;

INSERT INTO department (dept_name)
VALUES ("Human Resources"), ("Janitorial"), ("Engineering");

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Manager", "90000", 1), ("Janitor", "150000", 2), ("Engineer", "75000", 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Jones", 1, 2), ("Mister", "Cat", 2, 1), ("Katya", "Zamo", 3, 1),
("Trixie", "Mattell", 3, 2), ("Jinkx", "Monsoon", 3, 1), ("Lady", "Gaga", 2, 3);