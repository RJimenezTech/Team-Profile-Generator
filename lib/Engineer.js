const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email,gitHubName) {
        super(name, id, email);
        this.role = 'Engineer';
        this.gitHubName = gitHubName;
    }

    getGitHub = function() {
        return this.gitHubName;
    }
    getGitHubUrl = function() {
        return `https://github.com/${this.gitHubName}`;
    }
};
module.exports = Engineer;