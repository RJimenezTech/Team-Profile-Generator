const Employee = require('../lib/Employee');
jest.mock('../lib/Employee.js');


test('creates an Employee object', () => {
    const employee = new Employee('Robert');
    expect(employee.name).toBe('Robert');
});


