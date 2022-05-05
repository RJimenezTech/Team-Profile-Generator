const fs = require('fs');

const renderManager = teamData => {
    return `
            <div class="row border border-dark d-flex justify-content-center align-items-center">
                <div class="card col-4 m-3">
                    <div class="card-body">
                        <h3 class="card-title">Manager</h3>
                        <h5 class="card-text">Name: ${teamData.managerName}</h5>
                        <h5 class="card-text">ID: ${teamData.managerId}</h5>
                        <h5 class="card-text">Email: ${teamData.managerEmail}</h5>
                        <h5 class="card-text">Office: ${teamData.officeNumber}</h5>
                    </div>
                </div>
            </div>`;
};

const renderEngineers = engineersData => {

};

const renderInterns = internsData => {

};

const generateSite = teamData => {
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
            ${renderManager(teamData)}
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

module.exports = {writeToFile, generateSite, renderManager, renderEngineers, renderInterns};