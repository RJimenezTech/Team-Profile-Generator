const fs = require('fs');

const renderManager = manager => {
    return `<div class="card col-3 m-3 p-0 shadow">
                <div class="card-header bg-success text-white">
                    <h3>${manager.getName()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <h6 class="list-group-item">Role: ${manager.getRole()}</h6>
                    <h6 class="list-group-item">ID: ${manager.getId()}</h6>
                    <h6 class="list-group-item">E: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h6>
                    <h6 class="list-group-item">Office #: ${manager.getOfficeNumber()}</h6>
                </ul>
            </div>`;
};

const renderEngineers = engineersData => {
    let template = "";
    if (!engineersData) {
        return template;
    }
    engineersData.forEach(engineer => {
        template += `
            <div class="card col-3 m-3 p-0 shadow">
                <div class="card-header bg-warning text-dark">
                    <h3>${engineer.getName()}</h3>    
                </div>
                <ul class="list-group list-group-flush">
                    <h6 class="list-group-item">Role: ${engineer.getRole()}</h5>
                    <h6 class="list-group-item">ID: ${engineer.getId()}</h5>
                    <h6 class="list-group-item">E: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h5>
                    <h6 class="list-group-item">GitHub: <a href="${engineer.getGitHubUrl()}">${engineer.getGitHub()}</a></h5>
                </ul>
            </div>`
    })
    return template;
};

const renderInterns = internsData => {
    let template = "";
    if(!internsData) {
        return template;
    }
    internsData.forEach(intern => {
        template += `
            <div class="card col-3 m-3 p-0 shadow">
                <div class="card-header bg-secondary text-white">
                    <h3>${intern.getName()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <h6 class="list-group-item">Role: ${intern.getRole()}</h5>
                    <h6 class="list-group-item">ID: ${intern.getId()}</h5>
                    <h6 class="list-group-item">E: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h5>
                    <h6 class="list-group-item">School: ${intern.getSchool()}</h5>
                </ul>
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
            <div class="row d-flex justify-content-center align-items-center">
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