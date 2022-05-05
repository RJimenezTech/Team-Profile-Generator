const Engineer = require('./lib/Engineer.js');
// const manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const generateTeam = (teamData) => {
    const teamObject = {};
    const manager = new Manager(
        teamData.managerName, 
        teamData.managerId, 
        teamData.managerEmail, 
        teamData.officeNumber);
    teamObject.manager = manager;
    
    if (teamData.engineers) {
        teamObject.engineers = [];
        teamData.engineers.forEach(engineer => {
            const newEngineer = new Engineer(
                engineer.engineerName,
                engineer.email,
                engineer.gitHub,
            )
            teamObject.engineers.push(newEngineer);
        })
    }
    if (teamData.interns) {
        teamObject.interns = [];
        teamData.interns.forEach(intern => {
            const newIntern = new Intern(
                intern.internName,
                intern.email,
                intern.school,
            )
            teamObject.interns.push(newIntern);
        })
    }

    return teamObject;
};

module.exports = generateTeam;