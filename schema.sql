DROP DATABASE IF EXISTS emplyoeeTracker_db;

CREATE DATABASE emplyoeeTracker_db;

USE emplyoeeTracker_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Customer Service");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Administration");
CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY(id)
);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales MGR", 200000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 75000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Representitive", 50000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Customer Service Manager", 80000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Web Developer", 60000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Executive Assistant", 125000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Mgr", 50000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Verification", 150000, 4);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id iNT NOT NULL,
  manager_id VARCHAR(30),
  PRIMARY KEY(id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tristen", "Willis", 8, "David Griffen");
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jose", "Paltt", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 3, "Jose Paltt";

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Even", "Samuals", 1, "David Griffen");
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luis", "Gonzales", 3, "Jose Paltt");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "Griffen", 2, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jenifer", "Tillman", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Adrial", "Chan", 7, "David Griffen");
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bridget", "Grey", 6, "David Griffen");
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kendall", "Ell", 6, "Jose Paltt");