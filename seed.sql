USE employees_db;

INSERT INTO departments (name) 
VALUES 
('Sales'),
('Legal'),
('Finance'),
('Engineering');

INSERT INTO roles (title, salary, department_id) 
VALUES 
('Sales Lead', 100000, 1),
('Sales Person', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employees (firstName, lastName, role_Id, manager_Id) 
VALUES 
('Johnny', 'Depp', 1, 'Malek Mekdashi'),
('Amber', 'Heard', 2, 'Kobe Bryant'),
('Robert', 'De Niro', 3, 'Michael Jordan'),
('Walter', 'White', 4, 'Elon Musk'),
('Jesse', 'Pinkman', 1, 'Malek Mekdashi'),
('Gustavo', 'Fring', 2, 'Kobe Bryant'),
('Wood', 'E', 3, 'Michael Jordan'),
('Buzz', 'Lightyear', 4, 'Elon Musk'),
('Tom', 'Cruise', 1, 'Malek Mekdashi'),
('Willy', 'Wonka', 2, 'Kobe Bryant');
