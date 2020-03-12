const inquirer = require("inquirer");
const mysql = require("mysql");
const cliTable = require("cli-table");


const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "100Grovewood!",
    database: "emplyoeeTracker_db"
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("connected on port " + connection.port);
    startQuestions();
})

function startQuestions(){
    inquirer
    .prompt(
      {
        type: "list",
        message: "Welcome to Employee Tracker. What would you like to do?",
        name: "choices",
        choices: [
          {
            name: "View employees",
            value: "employeesView"
          },
          {
            name: "View departments",
            value: "departmentsView"
          },
          {
            name: "View roles",
            value: "rolesView"
          },
          {
            name: "Add employee",
            value: "employeeAdd"
          },
          {
            name: "Add department",
            value: "deparmentAdd"
          },
          {
            name: "Add role",
            value: "roleAdd"
          },
          {
            name: "Update role",
            value: "roleUpate"
          },
          {
            name: "End",
            value: "end"
          }
        ]
      }).then(function (answer) {
        switch(answer.value) {
        case "employeeView":
            employeesView();
            break;
        case "departmentView":
            departmentsView();
            break;
        case "rolesView":
            rolesView();
            break;
        case "employeeAdd":
            employeeAdd()
        case "deparmentAdd":
            deparmentAdd();
            break;
        case "roleAdd":
            roleAdd();
            break;
        case "roleUpate":
            roleUpate();
            break;
        case "end":
            endapp()
        }
      
    })
}