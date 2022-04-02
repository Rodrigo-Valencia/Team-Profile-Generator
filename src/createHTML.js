const buildManager = function(manager) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
    <h3>${manager.name}</h3>
    <h4>Manager</h4><i class="material-icons">content_paste</i>
    </div>

    <div class="card-body">
    <p class="id">ID: ${manager.id}</p>
    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;
}

const buildEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
    <h3>${engineer.name}</h3>
    <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
    </div>

    <div class="card-body">
    <p class="id">ID: ${engineer.id}</p>
    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p class="githubUsername">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
    </div>
    </div>
    `;
}

const buildIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
    <h3>${intern.name}</h3>
    <h4>Intern</h4><i class="material-icons">assignment_ind</i>
    </div>

    <div class="card-body">
    <p class="id">ID: ${intern.id}</p>
    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="school">School: ${intern.school}</p>
    </div>
    </div>
    </div>
    `;
}

createHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = buildManager(employee);
            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = buildEngineer(employee);
            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = buildIntern(employee);
            pageArray.push(internCard);
        }
    }
    
    const employeeCards = pageArray.join('')
    const createTeam = createTeamPage(employeeCards);
    return createTeam;
}

const createTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="style.css" />
    </head>
    <body>
    <header>
    <nav class="navbar" id="navbar">
    <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
    </nav>
    </header>
    <main>
    <div class="container">
    <div class="row justify-content-center" id="team-cards">
    <!--Team Cards-->
    ${employeeCards}
    </div>
    </div>
    </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script
    <script
    <script
    </html>

    `;
}

module.exports = createHTML;

