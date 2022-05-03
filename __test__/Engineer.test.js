const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Robert');
    expect(engineer.name).toBe('Robert');
});

test("returns 'engineer' for Engineer object", () => {
    const engineer = new Engineer('Robert','001','rjimeneztech@gmail.com');
    const role = engineer.getRole();
    expect(role).toBe('Engineer');
});

test("returns 'github' for Engineer object", () => {
    const engineer = new Engineer('Robert','001','rjimeneztech@gmail.com','rjimeneztech');
    const github = engineer.getGitHub();
    expect(github).toBe('rjimeneztech');
});


