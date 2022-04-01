const createHTML = require('./src/createHTML');
const fs = require('fs');
const inquire = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');

const teamArray = [];

function createTeam() {
    inquire.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'What type of employee would you like to add to your team?',
            choices: ['Manager', 'Engineer', 'Intern', 'No more team members are needed.'],
        }
    ]).then(function(userInput) {
        switch(userInput.addEmployee) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'No more team members are needed.':
                break;
            
            default: generateHTML();
        }
    })
}

function addManager() {
    inquire.prompt ([
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
        createTeam();
    });
}

function addEngineer() {
    inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the engineer of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the engineer's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's Github username?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username!");
                    return false;
                }
            }
        }
    ]).then(engineerInput => {
        const {name, id, email, github} = engineerInput;
        const engineer = new Engineer (name, id, email, github);

        teamArray.push(engineer);
        createTeam();
    }) 
}

function addIntern() {
    inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the intern of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the intern's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the school name");
                    return false;
                }
            }
        }
    ]).then(internInput => {
        const {name, id, email, school} = internInput;
        const intern = new Intern (name, id, email, school);

        teamArray.push(intern);
        createTeam();
    });
}

function generateHTML () {
    console.log("Your team has been created!");
    fs.writeFileSync('./dist/index.html');
}

createTeam();