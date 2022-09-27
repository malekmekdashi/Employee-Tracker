USE employees_db;

INSERT INTO departments (name) VALUES ('Sales'),('Legal'),('Finance'),('Engineering');

INSERT INTO roles (title, salary, department_id) VALUES ('Sales Lead', 100000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Sales Person', 80000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Lead Engineer', 150000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 120000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Account Manager', 160000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 125000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Legal Team Lead', 250000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Lawyer', 190000, 4);

INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Johnny', 'Depp', 1, 'Malek Mekdashi');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Amber', 'Heard', 2, 'Kobe Bryant');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Robert', 'De Niro', 3, 'Michael Jordan');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Walter', 'White', 4, 'Elon Musk');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Jesse', 'Pinkman', 1, 'Malek Mekdashi');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Gustavo', 'Fring', 2, 'Kobe Bryant');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Wood', 'E', 3, 'Michael Jordan');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Buzz', 'Lightyear', 4, 'Elon Musk');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Tom', 'Cruise', 1, 'Malek Mekdashi');
INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES ('Willy', 'Wonka', 2, 'Kobe Bryant');