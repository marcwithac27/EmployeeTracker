const inquirer = require("inquirer");
const mysql = require("mysql");
const confirm = require('inquirer-confirm');
const imageToAscii = require("image-to-ascii");


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


imageToAscii("./assets/WithAC4.jpg", (err, converted) => {
    console.log(err || converted);
    

connection.connect(function(err) {
    if (err) throw err;
    
});
    console.log("connected on port " + connection.port);
    connection.query("SELECT * from role",  (err, res) => {
        if (err) throw err;
        showroles = res.map(role => ({ name: role.title, value: role.id }))
      })
      connection.query("SELECT * from department", (err, res) => {
          if (err) throw err;
       showdepartments = res.map(dep => ({ name: dep.name, value: dep.id }))
      })
      connection.query("SELECT * from employee", (err, res) => {
          if (err) throw err;
        showemployees = res.map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }))
      })
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
            value: "employeeView"
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
      }).then(function (res) {
        menu(res.choices)
      
    });
}
function menu(option){
    switch(option) {
        case "employeeView":
            employeeView();
            break;
        case "departmentsView":
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
            roleUpdate();
            break;
        case "end":
            endapp()
        }
}

function rolesView(){
   let query = "SELECT * FROM role";
   connection.query(query,(err,res) => {
    if (err) throw err
    console.table(res)
    next()

} )
};

function departmentsView(){
    let query = "SELECT * FROM department"
    connection.query(query,(err,res) => {
        if (err) throw err
        console.table(res)
        next()
    
    } )
}

function employeeView(){
    let query = "SELECT * FROM employee";
  
    connection.query(query, (err,res) => {
        if (err) throw err
    console.table(res) 
    next()
    })
};
function employeeAdd() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "First name?",
          name: "first_name",
        },
        {
          type: "input",
          message: "Last name?",
          name: "last_name",
        },
        {
          type: "list",
          message: "Employee's title?",
          name: "title",
          choices: showroles
        },
        {
          type: "list",
          message: "Employee's manager?",
          name: "manager",
          choices: showemployees,
        }
      ]).then( (err,res) => {
          if (err) throw err;
        
        addEmployees(res)
      })
  }


function next() {
    confirm("Continue?")
    .then(function confirmed() {
      startQuestions();
    }, function cancelled() {
      endapp();
    });
  }
function endapp(){
    console.log("See you next time!!");
    connection.end()
}

