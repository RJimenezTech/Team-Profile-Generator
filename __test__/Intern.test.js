const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('Robert','001','rjimeneztech@gmail.com','UT-Austin');
    expect(intern.name).toBe('Robert');
    expect(intern.id).toBe('001');
    expect(intern.email).toBe('rjimeneztech@gmail.com');
});

test("returns 'school' for Intern object", () => {
    const intern = new Intern('Robert','001','rjimeneztech@gmail.com','UT-Austin');
    const school = intern.getSchool();
    expect(school).toBe('UT-Austin');
});

test("returns 'intern' for Intern object", () => {
    const intern = new Intern('Robert','001','rjimeneztech@gmail.com','UT-Austin');
    const role = intern.getRole();
    expect(role).toBe('Intern');
});

