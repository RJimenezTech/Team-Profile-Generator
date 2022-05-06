const fs = require('fs');
const Manager = require('./lib/Manager.js');

const renderManager = manager => {
    return `
            <div class="card col-4 m-3">
                <div class="card-body">
                    <h3 class="card-title">Manager</h3>
                    <h5 class="card-text">Name: ${manager.getName()}</h5>
                    <h5 class="card-text">ID: ${manager.getId()}</h5>
                    <h5 class="card-text">Email: ${manager.getEmail()}</h5>
                    <h5 class="card-text">Office: ${manager.getOfficeNumber()}</h5>
                </div>
            </div>`;
};

const renderEngineers = engineersData => {
    let template = "";
    engineersData.forEach(engineer => {
        template += `
            <div class="card col-4 m-3">
                <div class="card-body">
                    <h3 class="card-title">Engineer</h3>
                    <h5 class="card-text">Name: ${engineer.getName()}</h5>
                    <h5 class="card-text">ID: ${engineer.getId()}</h5>
                    <h5 class="card-text">Email: ${engineer.getEmail()}</h5>
                    <h5 class="card-text">GitHub: ${engineer.getGitHub()}</h5>
                </div>
            </div>`
    })
    return template;
};

const renderInterns = internsData => {
    let template = "";
    internsData.forEach(intern => {
        template += `
            <div class="card col-4 m-3">
                <div class="card-body">
                    <h3 class="card-title">Engineer</h3>
                    <h5 class="card-text">Name: ${intern.getName()}</h5>
                    <h5 class="card-text">ID: ${intern.getId()}</h5>
                    <h5 class="card-text">Email: ${intern.getEmail()}</h5>
                    <h5 class="card-text">School: ${intern.getSchool()}</h5>
                </div>
            </div>`
    })
    return template;
};

const generateSite = teamObject => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <header class="bg-primary text-light d-flex justify-content-center align-items-center">
            <h1>Team Profile</h1>
        </header>
        <main class="container-fluid">
            <div class="row border border-dark d-flex justify-content-center align-items-center">
                ${renderManager(teamObject.manager)}
                ${renderEngineers(teamObject.engineers)}
                ${renderInterns(teamObject.interns)}
            </div>
        </main>
        
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    </body>
    </html>
`;
};

const writeToFile = siteHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', siteHTML, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = {writeToFile, generateSite};