const Intern = require('../lib/Intern');

test('creates an Intern Object', () => {
    const intern = new Intern('Test', 10, 'test@test.com', 'UofA');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Test', 10, 'test@test.com', 'UofA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of intern', () => {
    const intern = new Intern('Test', 10, 'test@test.com', 'UofA');

    expect(intern.getRole()).toEqual("Intern");
});