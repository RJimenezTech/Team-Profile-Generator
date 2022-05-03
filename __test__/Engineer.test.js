const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Robert','001','rjimeneztech@gmail.com','rjimenez');
    expect(engineer.name).toBe('Robert');
    expect(engineer.id).toBe('001');
    expect(engineer.email).toBe('rjimeneztech@gmail.com');
});

test("returns 'engineer' for Engineer object", () => {
    const engineer = new Engineer('Robert','001','rjimeneztech@gmail.com','rjimenez');
    const role = engineer.getRole();
    expect(role).toBe('Engineer');
});

test("returns GitHub profile name for Engineer object", () => {
    const engineer = new Engineer('Robert','001','rjimeneztech@gmail.com','rjimeneztech');
    const github = engineer.getGitHub();
    expect(github).toBe('rjimeneztech');
});

test('returns GitHub URL for Engineer', () => {
    const engineer = new Engineer('Robert',"001",'rjimeneztech@gmail.com','rjimeneztech');
    const gitHubUrl = engineer.getGitHubUrl();
    expect(gitHubUrl).toBe('https://github.com/rjimeneztech');
});


