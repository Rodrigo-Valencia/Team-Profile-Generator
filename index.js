const createHTML = require('./src/createHTML');
const fs = require('fs');
const inquire = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');

const teamArray = [];

// function createTeam() {
//     inquire.prompt([
//         {
//             type: 'list',
//             name: 'addEmployee',
//             message: 'What type of employee would you like to add to your team?',
//             choices: ['Manager', 'Engineer', 'Intern', 'No more team members are needed.'],
//         }
//     ]).then(function(userInput) {
//         switch(userInput.addEmployee) {
//             case 'Manager':
//                 addManager();
//                 break;
//             case 'Engineer':
//                 addEngineer();
//                 break;
//             case 'Intern':
//                 addIntern();
//                 break;
//             case 'No more team members are needed.':
//                 break;
            
//             default: generateHTML();
//         }
//     })
// }

const addManager = () => {
    return inquire.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    });
}

const addEmployee = () => {
    return inquire.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of your employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the employee's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email:",
            validate: email => {
                valid = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid emial!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's Github username:",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's Github username!");
                };
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school name:",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add another team member?",
            default: false
        }

    ]).then(employeeData => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);

        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team has been created!")
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return createHTML(teamArray);

}).then(pageHTML => {
    return writeFile(pageHTML);

}).catch(err => {
    console.log(err);
});