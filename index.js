const fs = require('fs');
const inquirer = require('inquirer');

const {writeToFile, generateSite} = require('./generate-site.js');
const generateTeam = require('./generate-team.js');

const promptManager = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the team manager?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the employee ID of the team manager?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email address of the team manager?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the team manager?'

        }
    ]);
};

const promptEngineer = teamData => {
    console.log(`
==============================
Add an Engineer to the project
==============================    
`);

    if (!teamData.engineers) {
        teamData.engineers = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the Engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Engineer's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Engineer's email address?"
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "What is the Engineer's GitHub profile name?"
            },
            {
                type: 'confirm',
                name: 'confirmAddEngineer',
                message: "Do you want to add an Engineer?",
                default: false
            }
        ])
        .then(engineerData => {
            teamData.engineers.push(engineerData);
            if(engineerData.confirmAddEngineer) {
                return promptEngineer(teamData);
            } else {
                return teamData;
            }
        });
};

const promptIntern = teamData => {
    console.log(`
==============================
Add an Intern to the project
==============================    
`);

    if (!teamData.interns) {
        teamData.interns = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the Intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Intern's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Intern's email address?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the Intern's school?"
            },
            {
                type: 'confirm',
                name: 'confirmAddIntern',
                message: "Do you want to add an intern?",
                default: false
            }
        ])
        .then(internData => {
            teamData.interns.push(internData);
            if(internData.confirmAddIntern) {
                return promptIntern(teamData);
            } else {
                return teamData;
            }
        });
};

promptManager()
    .then(promptEngineer)
    .then(promptIntern)
    .then(teamData => {
        return generateTeam(teamData);
    })
    .then(teamObject => {
        console.log(teamObject);
        return generateSite(teamObject);
    })
    .then(siteHTML => {
        return writeToFile(siteHTML);
    }); 