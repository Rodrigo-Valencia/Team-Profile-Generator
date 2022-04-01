const Manager = require('../lib/Manager');

test('creates a Manager Object', () => {
    const manager = new Manager('Test', 10, 'test@test.com', 9);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of Manager', () => {
    const manager = new Manager('Test', 10, 'test@test.com');

    expect(manager.getRole()).toEqual("Manager");
});
