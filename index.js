const fs = require('fs');
const inquirer = require('inquirer');

const {writeToFile, generateSite} = require('./generate-site.js');
const generateTeam = require('./generate-team.js');

const promptManager = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the team manager?',
            validate: manName => {
                if (manName) {
                    return true;
                } else {
                    console.log("Manager's name is required.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the employee ID of the team manager?',
            validate: manId => {
                if (manId) {
                    return true;
                } else {
                    console.log("Manager's employee ID is required.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email address of the team manager?',
            validate: manEmail => {
                if (manEmail) {
                    return true;
                } else {
                    console.log("Manager's email address is required.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the team manager?',
            validate: office => {
                if (office) {
                    return true;
                } else {
                    console.log("Manager's office number is required.");
                    return false;
                }
            }

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
                message: "What is the Engineer's name?",
                validate: engName => {
                    if (engName) {
                        return true;
                    } else {
                        console.log("Engineer's name is required.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Engineer's employee ID?",
                validate: engId => {
                    if (engId) {
                        return true;
                    } else {
                        console.log("Engineer's employee ID is required.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Engineer's email address?",
                validate: engEmail => {
                    if (engEmail) {
                        return true;
                    } else {
                        console.log("Engineer's email address is required.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'gitHub',
                message: "What is the Engineer's GitHub profile name?",
                validate: engGit => {
                    if (engGit) {
                        return true;
                    } else {
                        console.log("Engineer's GitHub profile is required.");
                        return false;
                    }
                }
            }
        ])
        .then(engineerData => {
            teamData.engineers.push(engineerData);
            // if(engineerData.confirmAddEngineer) {
            //     return promptEngineer(teamData);
            // } else {
                return teamData;
            // }
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
                message: "What is the Intern's name?",
                validate: intName => {
                    if (intName) {
                        return true;
                    } else {
                        console.log("Intern's name is required.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Intern's employee ID?",
                validate: intId => {
                    if (intId) {
                        return true;
                    } else {
                        console.log("Intern's employee ID is required.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Intern's email address?",
                validate: intEmail => {
                    if (intEmail) {
                        return true;
                    } else {
                        console.log("Intern's email addres is required.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the Intern's school?",
                validate: intSchool => {
                    if (intSchool) {
                        return true;
                    } else {
                        console.log("Intern's school is required.");
                        return false;
                    }
                }
            }
        ])
        .then(internData => {
            teamData.interns.push(internData);
            // if(internData.confirmAddIntern) {
            //     return promptIntern(teamData);
            // } else {
                return teamData;
            // }
        });
};

const promptAddEmployee = teamData => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "Do you want to add an employee?",
                choices: ["Add engineer", "Add intern", "Do NOT add employee."]
            }
        ])
        .then(choiceData => {
            if (choiceData.choice === "Add engineer") {
                return promptEngineer(teamData).then(teamData => {
                    return promptAddEmployee(teamData)
                    });
            } else if (choiceData.choice === "Add intern") {
                return promptIntern(teamData).then(teamData => {
                    return promptAddEmployee(teamData);
                    });
            }
            return teamData;
        })
};

promptManager()
    .then(teamData => {
        return promptAddEmployee(teamData);
    })
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