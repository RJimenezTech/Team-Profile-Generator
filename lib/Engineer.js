const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email,gitHub) {
        super(name, id, email);
        this.role = 'Engineer';
        this.gitHub = gitHub;
    }

    getGitHub = function() {
        return this.gitHub;
    }
    getGitHubUrl = function() {
        return `https://github.com/${this.gitHub}`;
    }
};
module.exports = Engineer;