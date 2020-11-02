DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
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

SELECT first_name, last_name, department.name FROM employee
LEFT JOIN emp_role 
ON employee.role_id = emp_role.id
LEFT JOIN department
ON emp_role.department_id = department.id;

SELECT first_name, last_name, role_id, manager_id, emp_role.title FROM employee
LEFT JOIN emp_role
ON employee.role_id = emp_role.id;


INSERT INTO department (dept_name)
VALUES ("Human Resources"), ("Janitorial"), ("Engineering");

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Manager", "90000", "22"), ("Janitor", "150000", "23"), ("Engineer", "75000", "24");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Jones", "1", NULL), ("Mister", "Cat", "2", NULL), ("Katya", "Zamo", "3", "001"),
("Trixie", "Mattell", "3", "002"), ("Jinkx", "Monsoon", "5", NULL), ("Lady", "Gaga", "6", "003");