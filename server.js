// import and require mysql, inquirer, and console.table

const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { default: Prompt } = require('inquirer/lib/prompts/base');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ChickenFeet',
    database: 'employees_db'
});

db.connect(function(err) {
    if (err) throw err;
    selectionScreen();
});

const selectionScreen = () => {
    inquirer.prompt([
    {
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee's role",
        "Exit"
      ],
      name: "selections",
      message: "Please select one of the following:"      
    }
])
.then(answers => {
    switch (answers.selections) {
        // allows the user to view the departments created
        case "View all departments": displayAllDepartments(); break;
        // allows the user to view the roles created
        case "View all roles": displayAllRoles(); break;
        // allows the user to view all the employees added and updated along with roles,departments, managers, salaries
        case "View all employees": displayAllEmployees(); break;
        // allows the user to add a department
        case "Add a department": addDepartment(); break;
        // allows the user to add a role
        case "Add a role": addRole(); break;
        // allows the user to add an employee with their role and manager
        case "Add an employee": addEmployee(); break;
        // allows the user to update an employee's role
        case "Update an employee's role": updateEmployeeRole(); break;
        // create an exit case when a user wants to exit and kill the inquirer
        case "Exit": console.log("Good Bye!"); process.exit();
        }
})
}

const displayAllDepartments = () => {
  db.query("SELECT * FROM departments", function (err, res) {
    if (err) {console.log(err)
    }
    console.table(res);
    selectionScreen();
  })
  
}

const displayAllRoles = () => {
  db.query("SELECT id, title, salary, department_id FROM roles", function (err, res) {
    if (err) {console.log(err)}
    console.table(res);
    selectionScreen();
  })
};

const displayAllEmployees = () => {
  db.query("SELECT employees.id AS ID, employees.firstName, employees.lastName, roles.title, roles.salary, department_id AS department, employees.manager_id FROM employees JOIN roles ON roles.id = employees.role_id JOIN departments ON roles.department_id = departments.id ORDER BY employees.id;", function (err, res){
    if (err) {console.log(err)}
    console.table(res);
    selectionScreen();
  })
};

const addRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'newRole',
      message: 'Name of the role you are adding:'
    },
    {
      type: 'input',
      name: 'addSalary',
      message: 'Input current salary:'
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'Which department does this fall in?'
    }
  ])
  .then(answer => {
    db.query('INSERT INTO roles (title, salary, department_Id) VALUES (?, ?, ?)', [answer.newRole, answer.addSalary, answer.departmentId], function (err, res) {if (err) throw err; console.table(res)
    selectionScreen(); })
  })
};

const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'newDepartment',
      message: 'Enter department name:'
    }
  ])
  .then(answer => {
    db.query('INSERT INTO departments (name) VALUES (?)', [answer.newDepartment], function (err, res) {if (err) throw err; console.table(res); selectionScreen();})
  })
};

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter first name:'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter last name:'
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter employee`s role:'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter Manager ID number:'
    }
  ])
  .then(answer => {
    db.query('INSERT INTO employees (firstName, lastName, role_Id, manager_Id) VALUES (?,?,?,?)', [answer.firstName, answer.lastName, answer.roleId, answer.managerId], function (err, res) {if (err) throw err; console.table(res)
    selectionScreen();});
  });
};

const updateEmployeeRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'employeeSelect',
      message: 'Select the employee to update'
    },
    {
      type: 'input',
      name: 'employeeRole',
      message: 'Select the employee`s new role'
    }
  ])
  .then(answer => {
    db.query('UPDATE employees SET role_Id=? WHERE firstName=?', [answer.employeeSelect, answer.employeeRole], function (err, res) { if (err) throw err; console.table(res)
    selectionScreen();
    }); 
  });
};
