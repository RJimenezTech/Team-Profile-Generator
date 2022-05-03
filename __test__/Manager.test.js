const Manager = require('../lib/Manager.js');
// const Employee = require('../lib/Employee.js');
// jest.mock('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Robert','001','rjimeneztech@gmail.com');
    expect(manager.name).toBe('Robert');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('rjimeneztech@gmail.com');
});

test("returns 'manager' for manager object", () => {
    const manager = new Manager('Robert','001','rjimeneztech@gmail.com');
    const role = manager.getRole();
    expect(role).toBe('Manager');
});

test("returns 'officeNumber' for manager object", () => {
    const manager = new Manager('Robert','001','rjimeneztech@gmail.com','100');
    const office = manager.getOfficeNumber();
    expect(office).toBe('100');
});


