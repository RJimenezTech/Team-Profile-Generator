const Manager = require('../lib/Manager.js');
jest.mock('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Robert');
    expect(manager.name).toBe('Robert');
});
