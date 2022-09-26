// import and require mysql, inquirer, and console.table

const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Three#369nine',
    database: 'employees_db'
});

db.connect(function(err) {
    if (err) throw err;

    console.log(`Connected to the MySQL server.`);

    selectionScreen();
});

const selectionScreen = () => {
    return inquirer.createPromptModule({
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
})
.then(answers => {
    switch (answers.selections) {
        case "View all departments": displayAllDepartments(); break;
        case "View all roles": displayAllRoles(); break;
        case "View all employees": displayAllEmployees(); break;
        case "Add a departments": addDepartment(); break;
        case "Add a role": addRole(); break;
        case "Add an employee": addEmployee(); break;
        case "Update an employee's role": updateEmployeeRole(); break;
        case "Exit": console.log("You are now exiting the employee database"); Connection.end(); break;
        }
})
}