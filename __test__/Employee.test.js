const Employee = require('../lib/Employee.js');
// jest.mock('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Robert', '001','rjimeneztech@gmail.com');
    expect(employee.name).toBe('Robert');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('rjimeneztech@gmail.com');
});

test('returns name of employee', () => {
    const employee = new Employee('Robert', '001','rjimeneztech@gmail.com');
    const empName = employee.getName();
    expect(empName).toBe('Robert');
})

test('returns id of employee', () => {
    const employee = new Employee('Robert', '001','rjimeneztech@gmail.com');
    const empId = employee.getId();
    expect(empId).toBe('001');
});

test('returns email of employee',() => {
    const employee = new Employee('Robert', '001','rjimeneztech@gmail.com');
    const empEmail = employee.getEmail();
    expect(empEmail).toBe('rjimeneztech@gmail.com');
});

test("returns employee's role", () => {
    const employee = new Employee('Robert', "001",'rjimeneztech@gmail.com');
    const empRole = employee.getRole();
    expect(empRole).toBe('Employee');
})
